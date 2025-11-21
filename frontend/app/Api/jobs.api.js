import axiosInstance from "../Utils/axiosInstance";



export const jobsDataApi = async (queryOptions) =>{
    try{
        const response = await axiosInstance.post('/jobs', queryOptions);   
        return response.data;
    }
    catch (error) { 
        throw error;
    }}
