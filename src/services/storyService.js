import axios from '../utils/axios';
import useStoryStore from '../stores/useStoryStore';

const getStories = async () => {
   const stories = await axios.get('/stories');
   useStoryStore.getState().setStories(stories);
}

export default {
    getStories
}