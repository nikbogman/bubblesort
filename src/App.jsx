import React from "react";

import GridCanvas from "components/GridCanvas";
import ControlPanel from "components/Controls/ControlPanel";
import { BsGithub } from "react-icons/bs";
import { RiArrowRightLine } from "react-icons/ri";

const App = () => {
	return <div className="App">
		<GridCanvas />
		<ControlPanel />
		<footer>
			<a href="https://github.com/one-moonman/sort-visualizator">
				Source code here<RiArrowRightLine style={{ marginLeft: '0.5em' }} /><BsGithub className="github-redirect" />
			</a>
		</footer>
	</div >
};

export default App;