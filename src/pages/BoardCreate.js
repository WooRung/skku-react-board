import React from "react";
import { useNavigate } from "react-router-dom";
import { postBoard } from "../services/boardService";

export default function BoardCreate() {
	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");

	const navigate = useNavigate();

	return (
		<div>
			<h3>BoardCreate</h3>
			<div>
				<input
					type="text"
					value={title}
					onChange={e => {
						setTitle(e.target.value);
					}}
				/>
			</div>
			<div>
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					value={content}
					onChange={e => {
						setContent(e.target.value);
					}}
				/>
			</div>
			<div>
				<button
					type="button"
					onClick={e => {
						postBoard(title, content).then(data => {
							console.log(data);
							navigate("/board", { replace: true });
						});
					}}>
					글 쓰기
				</button>
			</div>
		</div>
	);
}
