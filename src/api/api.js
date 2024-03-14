import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})


export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:3000' ,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

