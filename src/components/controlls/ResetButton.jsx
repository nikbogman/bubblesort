import { useEffect } from "react";
import store from "../../stores";

export default () => {
    const resetArrayValues = store(state => state.resetValues)
    useEffect(() => { resetArrayValues(10) }, [])
    return <button onClick={() => resetArrayValues(10)}>reset</button>
}