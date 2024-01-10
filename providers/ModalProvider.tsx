"use client";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useEffect, useState } from "react";

interface ModalProviderProps {
	products: ProductWithPrice[];
};

const ModalProvider: React.FC<ModalProviderProps> = ({
	products
}) => {
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
			<SubscribeModal products={products}/>
		</>
	);
};

export default ModalProvider;
