"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);
	// If we are in server-side rendering, modals shouldn't
	// be rendered. Once the component is mounted, then
	// we can render the modal.
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) {
		return null;
	}
	return (
		<>
			<AuthModal />
			<UploadModal />
		</>
	);
};

export default ModalProvider;
