const runtimeControlsStore = (set) => ({
    isRunning: false,
    start: () => set({ isRunning: true }),
    stop: () => set({ isRunning: false }),
    switchIsRunning: () => set(state => ({ isRunning: !state.isRunning })),

    delay: 100,
    setDelay: (delay) => set({ delay }),

    frame: 0,
    reframe: () => set(state => ({ frame: state.frame + 1 })),
});

export default runtimeControlsStore;