import React from "react";
import CollectionControls from "./SetupControls/CollectionControls";
import DelaySlider from "./RuntimeControls/DelaySlider";
import StartStopButton from "./RuntimeControls/StartStopButton";
import SortControl from "./SetupControls/SortControl";

const ConrolPanel = () => <div className="control-panel">
    <div className="runtime-controls">
        <DelaySlider />
        <StartStopButton />
    </div>
    <div className="setup-controls">
        <CollectionControls />
        <SortControl />
    </div>

</div>;

export default ConrolPanel;
