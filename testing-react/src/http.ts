import axios from "axios";

export const myRequest = axios.get("https://jsonplaceholder.typicode.com/posts").then(response => response.data);