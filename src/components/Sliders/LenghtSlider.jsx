import store from "../../stores";

export default () => {
    const { lenght, setLenght, isRunning } = store(state => ({
        lenght: state.lenght,
        setLenght: state.setLenght,
        isRunning: state.isRunning
    }))

    return <>
        <input disabled={isRunning} type="range" min="10" max="100" step={10} value={lenght}
            onChange={e => setLenght(e.target.value)} />
        <p>{lenght}</p>
    </>

}