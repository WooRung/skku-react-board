import React from "react";
import { useLocation, useNavigate, useParams, useMatch } from "react-router-dom";
import { getBoardList } from "../services/boardService";

export default function BoardList() {
	const location = useLocation(); // 현재 경로에 대한 정보
	const navigate = useNavigate(); // 경로를 이동시킬 수 있는 함수
	// navigate('path', {replace: [=false | true]})

	const [boardList, setBoardList] = React.useState([
		{ id: 1, title: "제목1" },
		{ id: 2, title: "제목2" },
	]);
	const sample = getBoardList().then(resp => {
		console.log(resp);
	});

	return (
		<div>
			<h3>BoardList</h3>

			<ul>
				{boardList.map(board => (
					<li
						onClick={() => {
							navigate(`/board/${board.id}`, { replace: true });
						}}
						key={board.id}>
						{board.title}
					</li>
				))}
			</ul>
		</div>
	);
}
