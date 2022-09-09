import React from "react";
import Rectangle from "../components/canvas/Rectangle";
import store from "../stores";
import "./Canvas.css";

export default () => {
    const arrayValues = store(state => state.values)

    return (
        <div className="Canvas">
            {arrayValues.map(i => (<Rectangle value={i} />))}
        </div>
    )
}