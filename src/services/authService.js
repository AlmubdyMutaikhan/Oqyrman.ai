// import axios from '../utils/axios';
import axios from 'axios';

import useAuthStore from '../stores/useAuthStore';

const url = 'https://oqr-back-node.vercel.app';
const login = async ({email, password}) => {
    try {

        const { data } = await axios.post(`${url}/user/login`, { email, password });
        
        const { token } = data;
        if (token) {
            localStorage.setItem('token', token);
            useAuthStore.getState().setAuthenticated(true);
            return {ok:true};
        }
        return {ok: false};
    } catch (error) {
        console.error('Login error:', error.response);
        return { ok: false, message: error.response.data};
    }
};

const logout = () => {
    useAuthStore.getState().logout(); 
    localStorage.removeItem('token');
};

const register = async ({ email, password, name }) => {
    try {
        const { data } = await axios.post(`${url}/user/register`, { email, password, name });
        const { token } = data;
        if (token) {
            localStorage.setItem('token', token);
            useAuthStore.getState().setAuthenticated(true);
            return {ok:true};
        }
        return {ok: false};
    } catch (error) {
        console.error('Registration error:', error.response);
        return {ok: false, message: error.response.data};
    }
};

export default {
    login,
    logout,
    register
};
