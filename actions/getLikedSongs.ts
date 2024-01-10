import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getLikedSongs = async (): Promise<Song[]> => {
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
	} = await supabase.from("liked_songs").select("*, songs(*)").eq("user_id", sessionData.session?.user?.id).order("created_at", { ascending: false });
	if (error) {
		console.error("Some error occurred while getting liked songs for user", error.message);
		return [];
	}
	if (!data) {
		return [];
	}
	return data.map((item) => ({
		...item.songs
	}));
};

export default getLikedSongs;
