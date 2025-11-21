import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
})



// Detailed error handler interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // Server responded with a status code outside 2xx
            const status = error.response.status;
            let message = 'An error occurred';
            switch (status) {
                case 400:
                    message = 'Bad Request';
                    break;
                case 401:
                    message = 'Unauthorized';
                    break;
                case 403:
                    message = 'Forbidden';
                    break;
                case 404:
                    message = 'Not Found';
                    break;
                case 500:
                    message = 'Internal Server Error';
                    break;
                default:
                    message = error.response.data?.message || error.message;
            }
            console.error(`Axios error [${status}]: ${message}`);
            // Optionally show a user-friendly message
            // alert(message);
        } else if (error.request) {
            // No response received
            console.error('No response received:', error.request);
            // alert('No response from server.');
        } else {
            // Error setting up the request
            console.error('Axios setup error:', error.message);
            // alert('Request setup error: ' + error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;