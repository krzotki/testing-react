import axios from "axios";

export const myRequest = axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response => response.data);