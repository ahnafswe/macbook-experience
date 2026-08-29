import { create, StoreApi, UseBoundStore } from "zustand";

const useMacbookStore: UseBoundStore<StoreApi<Record<string, any>>> = create(
	(set) => ({
		color: "#3e3e40",
		setColor: (color: string) => set({ color }),
		scale: 0.08,
		setScale: (scale: number) => set({ scale }),
		reset: () => set({ color: "#3e3e40", scale: 0.08 }),
	}),
);

export default useMacbookStore;
