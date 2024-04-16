import axios from "axios";
import { BASE_URL } from "./constant";

const accessToken=localStorage.getItem("access_token");

const Axios = axios.create({
	baseURL:BASE_URL,
	headers:{
		Authorization: `Bearer ${accessToken}`
	}
})

  export default Axios;
