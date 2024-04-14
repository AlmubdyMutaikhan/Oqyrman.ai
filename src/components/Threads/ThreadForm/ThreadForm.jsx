import React, { useState } from 'react';
import './ThreadForm.scss'; // Your custom CSS for the rest of the form
import { useTranslation } from 'react-i18next';
import threadService from '../../../services/threadService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ThreadForm = () => {
    
  const {t} = useTranslation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [type, setType] = useState('TUTORIAL');
  const [imageId, setImageId] = useState(100);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const id = await threadService.imageUpload(file);
    setImageId(id);
};
    const navigate = useNavigate();
    const onSubmit = async (thread) => {
        await threadService.createThread(thread);
        toast.success(t('threadSuccess'));
        navigate('/threads');
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newThread = { title, body, type, image_id: imageId };
    onSubmit(newThread);
  };

  return (
    <form className="thread-form" onSubmit={handleSubmit}>
        <div className='thread-form__headline'>
            <h1>{t('createThread')}</h1>
        </div>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Thread Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Thread Body"
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="TUTORIAL">Tutorial</option>
        <option value="FORUM">Forum</option>
      </select>
      <button type="submit" style={{ backgroundColor: '#32ae8b', color: 'white' }}>
        Create Thread
      </button>
    </form>
  );
};

export default ThreadForm;
