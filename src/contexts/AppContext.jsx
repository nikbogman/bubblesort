import React, { useEffect } from "react";
import constants from "../shared/constants";
import global from "../shared/common";

export const AppContext = React.createContext();

const initalState = {
    step: 0,
    shapeWidth: 0,
    shapeStroke: false,
    delay: 0,
    arrSize: 0
}

const initializeState = () => {
    const index = 6;
    global.array.length = constants.CANVAS_WIDTH / constants.SHAPE_WIDTH_STEPS[index];
    return {
        step: index,
        shapeWidth: constants.SHAPE_WIDTH_STEPS[index],
        shapeStroke: false,
        delay: 0,
        arrSize: constants.CANVAS_WIDTH / constants.SHAPE_WIDTH_STEPS[index],
    }
}
function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return initializeState();
        case 'onChange':
            const index = action.payload;
            global.array.length = constants.CANVAS_WIDTH / constants.SHAPE_WIDTH_STEPS[index];
            return {
                ...state,
                step: index,
                shapeWidth: constants.SHAPE_WIDTH_STEPS[index],
                arrSize: constants.CANVAS_WIDTH / constants.SHAPE_WIDTH_STEPS[index],
            }
        case 'setStroke':
            return {
                ...state,
                shapeStroke: !state.shapeStroke
            }
        case 'setDelay':
            return {
                ...state,
                delay: action.payload
            }
        default:
            throw new Error();
    }
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initalState, initializeState);

    return <AppContext.Provider
        value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>
}
