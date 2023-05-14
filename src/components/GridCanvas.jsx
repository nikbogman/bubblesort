import React from "react";
import useInterval from "hooks/useInterval";
import useStore from "hooks/useStore";
import "src/index.css";
import { collection } from "lib/collection";
import Sort from "lib/sorts/Sort";
import GridCanvasColumn from "./GridCanvasColumn";

const GridCanvas = () => {
	/*
	  it is not used anywhere but needs to 
	  be passed in component in order to react to reframes
	*/
	const frame = useStore(state => state.frame);

	const [collectionLength, delay, isRunning, sort] = useStore((state) => [
		state.collectionLength,
		state.delay,
		state.isRunning,
		state.sort,
	]);

	useInterval(
		() => sort instanceof Sort && sort.loop(),
		isRunning ? delay : null
	);

	return <div
		style={{
			gridTemplateColumns: `repeat(${collectionLength}, ${window.innerWidth / collectionLength}px)`
		}}
		className="grid-canvas">
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
