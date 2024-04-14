import { useTranslation } from "react-i18next"
import Slider from "./Slider"
import { useEffect } from "react";
import useThreadStore from "../../stores/useThreadStore";
import threadService from "../../services/threadService";
import ThreadCard from "../ThreadCard/ThreadCard";
import { useNavigate } from "react-router-dom";

const FactsSlider = () => {
    const {t} = useTranslation();
    const threads = useThreadStore(state => state.threads); // This hooks into the Zustand store's books state

    useEffect(() => {
        threadService.getThreads();
    }, []);
    const navigate = useNavigate();
    return <Slider title={t('topFacts')} style={{
        marginBottom:'60px',
    }} list={
        threads
          .filter(thread => thread.id >= 152 && thread.id <= 154)
          .map((thread, id) => (
            <ThreadCard
              onClick={() => navigate(`/threads/${thread.id}`)}
              key={id}
              title={thread.title}
              commentLength={thread.commentList.length}
              body={thread.body}
              type={thread.type}
              imageUrl={`http://localhost:8080/api/file/${thread.image?.id}`}
            />
          ))
      }/>
}

export default FactsSlider;