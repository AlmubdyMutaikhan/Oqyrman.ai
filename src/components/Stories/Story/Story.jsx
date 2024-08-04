import { useState } from "react";
import ImageFrame from "../../Atoms/Image/Image";
import Stories from "stories-react";
import "stories-react/dist/index.css";

const Story = ({ id, label, thumbID, imageID}) => {
  const stories = [
    {
      type: "image",
      url: `http://64.226.97.233:8080/api/file/${imageID}`,
      duration: 5000,
    },
  ];

  const [storyShow, setStoryShow] = useState(false);

  return (
    <div className="story" onClick={() => setStoryShow(true)}>
      <ImageFrame
        height="60px"
        frametype="circle"
        style={{ border: "2px solid teal" }}
        width="60px"
        src={`http://64.226.97.233:8080/api/file/${thumbID}`}
        alt={label}
      />
      <div className="story-label">{label}</div>
      {storyShow && (
        <div className="story__modal">
        <Stories
          width="100%"
          height="100%"
          stories={stories}
          onAllStoriesEnd={() => setStoryShow(false)}
        />
        </div>

      )}
    </div>
  );
};

export default Story;
