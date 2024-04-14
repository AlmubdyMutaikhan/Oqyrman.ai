import axios from '../utils/axios';
import useThreadStore from '../stores/useThreadStore';
const imageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // 'file' is the key expected by the backend for the file upload
  
    const { id } = await axios.post('/file', formData, {
    headers: {
          'Content-Type': 'multipart/form-data'
        }
    });
    return id;
}

const getThreads = async () => {
    const data = await axios.get('/thread');
    useThreadStore.getState().setThreads(data);
}


const getThread = async (id) => {
    const data = await axios.get(`/thread/${id}`);
    useThreadStore.getState().setThread(data);
    return data;
}

const createThread = async (threadData) => {
    const data = await axios.post('/thread', threadData);
    console.log('thread data', data);
}
export default {
    imageUpload,
    createThread,
    getThreads,
    getThread
}