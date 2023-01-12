import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { getBoard } from "../services/boardService";

export default function BoardDetail() {
	const navigate = useNavigate();
	const { boardId } = useParams();
	const [board, setBoard] = React.useState({});

	useEffect(() => {
		console.log(boardId);
		getBoard(boardId).then(data => {
			setBoard(data);
		});
	}, [boardId]);

	return (
		<div>
			<h3>BoardDetail</h3>
			<button
				type="button"
				onClick={() => {
					navigate(-1); // 뒤로가기
				}}>
				뒤로
			</button>
			<div>
				<h3>{board.title}</h3>

				<div>{board.content}</div>
			</div>
		</div>
	);
}
