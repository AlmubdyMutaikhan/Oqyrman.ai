import React, { useEffect } from 'react';
import './Stories.scss';
import Story from './Story/Story';
import storyService from '../../services/storyService';
import useStoryStore from '../../stores/useStoryStore';
import { useTranslation } from 'react-i18next';

const Stories = () => {
  const stories = useStoryStore(state => state.stories);
  const {t} = useTranslation();
  useEffect(() => {
    storyService.getStories();
  }, []);

  console.log('stories', stories);
  return (<div className="stories-container">
    {stories.map((story,id) => (
      <Story label={t(story.title)} thumbID={story.thumbnail.id} imageID={story.image.id} key={id} />
    ))}
  </div>)
};

export default Stories;
