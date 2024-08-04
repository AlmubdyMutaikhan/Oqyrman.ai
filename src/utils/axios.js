import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'http://64.226.97.233:8080/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});


axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    console.log('the error message is ', error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
    response => {
        // Return directly the data from the response
        return response.data;
    },
    error => {
        // Handle errors
        if (error.response) {
            toast.error('Oops, something went wrong...');
            // The server responded with a status code that falls out of the range of 2xx
            console.error('Backend returned status code:', error.response.status);
            console.error('Response body:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
        }
    }
);

export default axiosInstance;
