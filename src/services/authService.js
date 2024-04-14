import axios from '../utils/axios';
import useAuthStore from '../stores/useAuthStore';
const login = async ({email, password}) => {
    try {
        const { token } = await axios.post('/auth/login', { email, password });
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
        const { token } = await axios.post('/auth/register', { email, password, name });
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
