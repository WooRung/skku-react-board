/* eslint-disable react/no-unstable-nested-components */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import BoardLayout from "./layouts/BoardLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
	return (
		<Router>
			<Navbar />
			<div style={{ maxWidth: 1280, margin: "auto", padding: 10 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/board" element={<BoardLayout />}>
						<Route path="/board" element={<BoardList />} />
						<Route path="/board/:boardId" element={<BoardDetail />} />
					</Route>
					<Route path="/admin" element={<AdminLayout />}>
						<Route path="/admin" element={<BoardList />} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
