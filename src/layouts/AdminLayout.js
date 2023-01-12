import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
	return (
		<div>
			AdminLayout
			<div style={{ height: 1, backgroundColor: "black" }} />
			<Outlet />
		</div>
	);
}
