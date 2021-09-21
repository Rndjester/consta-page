import axios from "axios";
import { REACT_APP_API_URL } from "../config";

export default axios.create({
    // uncomment line below, if you need credentials
    // withCredentials: true,
    baseURL: REACT_APP_API_URL
});
