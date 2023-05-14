import React from "react";
import useInterval from "../hooks/useInterval";
import useStore from "../hooks/useStore";
import { collection } from "../lib/collection";
import "../index.css";
import GridCanvasColumn from "./GridCanvasColumn";

const GridCanvas = () => {
	const [reframe, frame, collectionLength] = useStore((state) => [
		state.reframe,
		state.frame,
		state.collectionLength,
	]);

	useInterval(
		() => {
			console.log(frame);
			reframe();
		},
		null//isRunning ? delay : null
	);

	return <div
		style={{
			gridTemplateColumns: `repeat(${collectionLength}, ${window.innerWidth / collectionLength}px)`
		}}
		className="GridCanvas">
		{collection.values.map((_, i) =>
			<GridCanvasColumn
				key={i}
				value={collection.values[i]}
				bgColor={collection.colors[i]}
			/>
		)}
	</div>
};

export default GridCanvas;
