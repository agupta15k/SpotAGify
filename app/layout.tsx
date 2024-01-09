import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Spotify Clone',
	description: 'Listen to your favorite music, anytime, anywhere!!',
}

export const revalidate = 0;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const userSongs = await getSongsByUserId();
  	return (
		<html lang="en">
			<body className={font.className}>
				<ToastProvider/>
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar songs={userSongs}>
							{children}
						</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
  	)
}
