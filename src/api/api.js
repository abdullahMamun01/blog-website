import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blogify-1-fy0m.onrender.com'
})


export const axiosPrivate = axios.create({
    baseURL: 'https://blogify-1-fy0m.onrender.com' ,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

