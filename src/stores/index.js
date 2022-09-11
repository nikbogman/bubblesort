import create from "zustand";
import controllsSlice from "./controlls";
import renderingSlice from "./rendreing";
import sortingSlice from "./sorting";

const store = create((set, get) => ({
    ...controllsSlice(set, get),
    ...renderingSlice(set, get),
    ...sortingSlice(set, get)
}))

export default store;