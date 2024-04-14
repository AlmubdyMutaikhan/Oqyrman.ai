import { useParams } from "react-router-dom";
import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import { useEffect, useState } from "react";
import useThreadStore from "../stores/useThreadStore";
import threadService from "../services/threadService";
import Forum from "../components/Forum/Forum";

const ThreadPage = ({}) => {
    const params = useParams();
    const [thread, setThread] = useState({});
    const [comments, setComments] = useState([{id:1, body:'Пікірмен келісемін', createdAt: "2024-04-14T03:00:05.352+00:00"}]);

    useEffect(() => {
        const fetch = async () => {
            const t = await threadService.getThread(params.id);
            setThread(t);
            console.log('thi is comment', t.commentList);
            setComments(t.commentList);
        }

        fetch();
    }, []);

    return (
        <>
            <NavbarTop />
            <Divider />
            <Forum title={thread?.title} imageURL={`http://localhost:8080/api/file/${thread?.image?.id}`}
             body={thread?.body} commentList={comments}/>
            <NavbarBottom />
        </>
    )
}

export default ThreadPage;