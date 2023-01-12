const API_BASE_URL = "http://localhost/api";

export function getBoardList() {
	const boardApiUrl = `${API_BASE_URL}/board/`;

	return fetch(boardApiUrl, {
		method: "GET",
	}).then(resp => resp.json());
}

export function getBoard(boardId) {
	const boardApiUrl = `${API_BASE_URL}/board/${boardId}`;
	return fetch(boardApiUrl, {
		method: "GET",
	}).then(resp => resp.json());
}

export function postBoard(title, content) {
	const boardApiUrl = `${API_BASE_URL}/board/`;
	return fetch(boardApiUrl, {
		method: "POST",
		body: JSON.stringify({
			title,
			content,
		}),
	}).then(resp => resp.json());
}
