import React from "react";
import CollectionControls from "./SetupControls/CollectionControls";
import DelaySlider from "./RuntimeControls/DelaySlider";
import StartStopButton from "./RuntimeControls/StartStopButton";
import SortControl from "./SetupControls/SortControl";

const ConrolPanel = () => <div className="control-panel">
    <StartStopButton />
    <div className="control">
        <DelaySlider />
    </div>
    <div className="control">
        <CollectionControls />
    </div>
    <div className="control">
        <SortControl />
    </div>
</div>;

export default ConrolPanel;
