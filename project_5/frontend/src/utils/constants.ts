const SERVER_URL = import.meta.env.VITE_SERVER_BASE_URL;
const AUTH_URL = `${SERVER_URL}/auth`;
const TODO_URL = `${SERVER_URL}/todos`;

export { SERVER_URL, AUTH_URL, TODO_URL };
