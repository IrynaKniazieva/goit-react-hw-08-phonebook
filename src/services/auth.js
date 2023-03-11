import axios from "axios";

const authInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
}) 


export const signup = credentials => {
    return authInstance.post("users/signup", credentials);

} 



export const login = credentials => {
    return authInstance.post("/users/login", credentials);
}