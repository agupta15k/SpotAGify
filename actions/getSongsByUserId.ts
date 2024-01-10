import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getSongsByUserId = async (): Promise<Song[]> => {
	const supabase = createServerComponentClient({
		cookies: cookies
	});
	const {
		data: sessionData,
		error: sessionError
	} = await supabase.auth.getSession();
	if (sessionError) {
		console.error("Some error occurred while getting auth session", sessionError.message);
		return [];
	}
	if (!sessionData.session?.user?.id) {
		return [];
	}
	const {
		data,
		error
	} = await supabase.from("songs").select("*").eq("user_id", sessionData.session?.user?.id).order("created_at", { ascending: false });
	if (error) {
		console.error("Some error occurred while getting songs by user id", error.message);
	}
	return (data as any) || [];
};

export default getSongsByUserId;
