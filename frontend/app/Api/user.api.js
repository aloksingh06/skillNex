import axiosInstance from "../Utils/axiosInstance"


export const userLoginApi = async (email, password) =>{
    try{
        const response = await axiosInstance.post('/auth/login', {email, password});
       
    } catch (error) {
        throw error;
    }
}

export const userRegisterApi = async (username, email, password) =>{
    console.log("Register API called with:", {username, email, password});
    try{
        const response = await axiosInstance.post('/auth/register', {username, email, password});
        
    } catch (error) {
        throw error;
    }
}