export default (set, get) => ({
    isRunning: false,
    play: () => set({ isRunning: true }),
    pause: () => set({ isRunning: false }),
    switchIsRunning: () => set(state => ({ isRunning: !state.isRunning }))
})
