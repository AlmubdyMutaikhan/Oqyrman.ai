// import axios from '../utils/axios';
import axios from 'axios';
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


const threadURL = 'https://oqr-back-node.vercel.app'
// const threadURL = 'http://localhost:3000'

const getThreads = async () => {
    const { data } = await axios.get(`${threadURL}/thread`);
    console.log('this is thread data', data)
    useThreadStore.getState().setThreads(data);
}


const getThread = async (id) => {
    const { data } = await axios.get(`${threadURL}/thread/${id}`);
    console.log('this is a data');
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