import { useParams } from "react-router-dom";
import Catalog from "../components/Catalog/Catalog";
import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import QuizPage from "../components/QuizzPage/QuizzPage";
import { useEffect, useState } from "react";
import bookService from "../services/bookService";
const QuizzPage = () => {
  const params = useParams();
  const [book, setUserBook] = useState({});

    useEffect(() => {
      const fetch = async () => {
          const b = await bookService.getBookQuizz(params.id);
          console.log('this is quiz aaa', b.quiz);
          setUserBook(b.quiz);
      }
      fetch();
  }, [params.id]);


    return (
        <>
            <NavbarTop />
            <Divider />
            <QuizPage title={'Test'} quizData={book}/>
            <NavbarBottom />
        </>
    )
}

export default QuizzPage;