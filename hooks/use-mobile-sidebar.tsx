import { create } from "zustand";

type MobileSidebarStore = {
	isOpen: boolean;
	opOpen: () => void;
	onClose: () => void;
};

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
	isOpen: false,
	opOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
