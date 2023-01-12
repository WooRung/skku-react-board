import React from "react";
import { Outlet, useMatch, useLocation } from "react-router-dom";

export default function BoardLayout() {
	const location = useLocation();
	// console.log(location);
	const match = useMatch("/board/*"); // useMatch(urlPattern:str) 주어진 url과 일치하는지 여부
	// console.log(match);
	return (
		<div>
			BoardLayout
			<div style={{ height: 1, backgroundColor: "black" }} />
			<Outlet />
		</div>
	);
}
