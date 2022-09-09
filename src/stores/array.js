export default (set, get) => ({
    values: [],
    setValues: (arr) => set(() => ({ values: [...arr] })),
    resetValues: (length) => set(state => {
        if (get().isRunning) return { values: state.values }
        let arr = new Array(length)
        for (let i = 0; i < length; i++) {
            arr[i] = Math.floor(Math.random() * 100) + 1;
        }
        return { values: [...arr] }
    }),
})
