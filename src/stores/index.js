import create from "zustand";
import arraySlice from "./array";
import controllsSlice from "./controlls";

const store = create((set, get) => ({
    ...arraySlice(set, get),
    ...controllsSlice(set, get),
}))

export default store;