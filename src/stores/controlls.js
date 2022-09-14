export default (set, _) => ({
    isRunning: false,
    play: () => set({ isRunning: true }),
    pause: () => set({ isRunning: false }),
    switchIsRunning: () => set(state => ({ isRunning: !state.isRunning })),

    delay: 100,
    setDelay: (delay) => set({ delay }),

    lenght: 10,
    setLenght: (lenght) => set({ lenght })
})
