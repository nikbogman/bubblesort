import { create } from "zustand";
import runtimeControlsStore from "../stores/runtimeControlsStore";
import setupControlsStore from "../stores/setupControlsStore";

const useStore = create((...methods) => ({
    ...setupControlsStore(...methods),
    ...runtimeControlsStore(...methods),
}));

export default useStore;
