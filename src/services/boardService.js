const API_BASE_URL = "http://localhost/api";

export function getBoardList() {
	const boardApiUrl = `${API_BASE_URL}/board/`;
	return fetch(boardApiUrl, {
		method: "GET",
	}).then(resp => resp.json());
}
