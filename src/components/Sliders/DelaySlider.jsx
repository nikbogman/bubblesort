import store from "../../stores";

export default () => {
    const { delay, setDelay } = store(state => ({
        delay: state.delay,
        setDelay: state.setDelay
    }))

    return <>
        <input type="range" min="0" max="1000" step={100} value={delay}
            onChange={e => setDelay(e.target.value)} />
        <p>{delay}</p>
    </>

}