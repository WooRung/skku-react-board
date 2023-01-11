import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<nav style={{ display: "inline-block" }}>
				<Link to="/" style={{ margin: 10 }}>
					홈
				</Link>
				<Link to="/board" style={{ margin: 10 }}>
					게시판
				</Link>
			</nav>
		</div>
	);
}
