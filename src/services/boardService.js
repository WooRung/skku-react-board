const API_BASE_URL = "http://localhost:8000/api";

export function getBoardList() {
	const boardApiUrl = `${API_BASE_URL}/board/`;
	return fetch(boardApiUrl, {
		method: "GET",
	});
}
