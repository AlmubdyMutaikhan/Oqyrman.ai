import { useTranslation } from "react-i18next"
import Slider from "./Slider"
import BookCard from "../Card/Card";

const ThreadSlider = () => {
    const {t} = useTranslation();
    const list = [];
    return <Slider style={{marginBottom: '250px'}} title={t('interestingFacts')} list={list}/>
}

export default ThreadSlider;