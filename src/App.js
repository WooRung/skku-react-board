/* eslint-disable react/no-unstable-nested-components */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BoardList from "./pages/BoardList";

function App() {
	return (
		<Router>
			<Navbar />
			<div style={{ maxWidth: 1280, margin: "auto", padding: 10 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/board" element={<BoardList />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
