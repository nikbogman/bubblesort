import React from "react";

const GridCanvasColumn = (props) => {
    return <div
        style={{
            height: props.value * 5,
            backgroundColor: props.bgColor
        }}
        className="GridCanvasColumn">
    </div >
}

export default GridCanvasColumn;