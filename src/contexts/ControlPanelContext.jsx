import React from "react";

export const ControlsContext = React.createContext();

const initialState = {
    disableButtons: false,
    timer: 0,
    stopIcon: 'pause'
}

function reducer(state, action) {
    switch (action.type) {
        case 'disableButtons':
            return { ...state, disableButtons: !state.disableButtons };
        case 'stopIcon':
            return { ...state, stopIcon: action.payload };
        default:
            throw new Error();
    }
}

export const ControlsProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return <ControlsContext.Provider
        value={{ state, dispatch }}>
        {children}
    </ControlsContext.Provider>
}
