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
          const b = await bookService.getBook(params.id);
          setUserBook(b[0]);
          console.log('this is b', b[0]);
          console.log(b[0].questions);
      }
      fetch();
  }, [params.id]);


    return (
        <>
            <NavbarTop />
            <Divider />
            <QuizPage title={book?.book_name?.slice(0, -4)} quizData={book && book?.questions}/>
            <NavbarBottom />
        </>
    )
}

export default QuizzPage;