import React from "react";

const GridCanvasColumn = (props) => {
    return <div
        style={{
            height: props.value * 5,
            backgroundColor: props.bgColor
        }}
        className="grid-canvas__column">
    </div >
}

export default GridCanvasColumn;