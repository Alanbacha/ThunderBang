import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Game from "./pages/Game";
import About from "./pages/About";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Game}></Route>
				<Route path="/about" component={About}></Route>
			</Switch>
		</BrowserRouter>
	);
}
