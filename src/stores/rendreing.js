export default (set, _) => ({
    frame: 0,
    triggerFrame: () => set(state => ({ frame: state.frame + 1 })),
    rerender: () => set(state => ({ frame: state.frame + 1 }))
})
