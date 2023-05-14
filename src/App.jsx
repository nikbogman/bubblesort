import React from "react";

import GridCanvas from "./components/GridCanvas";
import ControlPanel from "./components/Controls/ControlPanel";
import { BsGithub } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

const App = () => <div className="App">
	<GridCanvas />
	<ControlPanel />
	<footer>
		<a href="https://github.com/one-moonman/sort-visualizator">
			Source code here <RiArrowRightSLine /><BsGithub className="github-redirect" />
		</a>
	</footer>
</div >;

export default App;