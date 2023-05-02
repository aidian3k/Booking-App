import axios from "axios";
import {baseApiUrl} from "../constans/ApiConstants";

export const connector = axios.create({
    baseURL: baseApiUrl
})

export const axiosPrivate = axios.create({
    baseURL: baseApiUrl,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})