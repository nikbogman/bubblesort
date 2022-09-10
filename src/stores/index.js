import create from "zustand";
import controllsSlice from "./controlls";

const store = create((set, get) => ({
    ...controllsSlice(set, get),
    frame: 0,
    triggerFrame: () => set(state => ({ frame: state.frame + 1 })),
    sort: () => { },
    setSort: (callback) => set({ sort: callback })
}))

export default store;