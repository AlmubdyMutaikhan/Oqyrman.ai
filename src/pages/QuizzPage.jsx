import { useParams } from "react-router-dom";
import Catalog from "../components/Catalog/Catalog";
import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop"
import QuizPage from "../components/QuizzPage/QuizzPage";
import { useEffect, useState } from "react";
import bookService from "../services/bookService";
import { toast } from "react-toastify";
import Modal from "../components/Modal/Modal";
const QuizzPage = () => {
  const params = useParams();
  const [book, setUserBook] = useState({});

  const asanQuizz = [
    {
        "id": 1,
        "question": "Басты кейіпкердің аты кім?",
        "options": [
            {
                "id": 1,
                "name": "Асан"
            },
            {
                "id": 2,
                "name": "Үсен"
            },
            {
                "id": 3,
                "name": "Төлеген"
            },
            {
                "id": 4,
                "name": "Айдар"
            }
        ],
        "correctAnswer": "Асан"
    },
    {
        "id": 2,
        "question": "Асан мен Үсен қайда қалды?",
        "options": [
            {
                "id": 1,
                "name": "Ауылда"
            },
            {
                "id": 2,
                "name": "Жұртта"
            },
            {
                "id": 3,
                "name": "Қалада"
            },
            {
                "id": 4,
                "name": "Орманда"
            }
        ],
        "correctAnswer": "Жұртта"
    },
    {
        "id": 3,
        "question": "Асан неге жылады?",
        "options": [
            {
                "id": 1,
                "name": "Ойыншық жоғалтқаны үшін"
            },
            {
                "id": 2,
                "name": "Аштықтан"
            },
            {
                "id": 3,
                "name": "Ауыл көшкенін көргендіктен"
            },
            {
                "id": 4,
                "name": "Достары кетіп қалғандықтан"
            }
        ],
        "correctAnswer": "Ауыл көшкенін көргендіктен"
    },
    {
        "id": 4,
        "question": "Үсен не тапты?",
        "options": [
            {
                "id": 1,
                "name": "Пышақтың сынығын"
            },
            {
                "id": 2,
                "name": "Алтын"
            },
            {
                "id": 3,
                "name": "Інжу"
            },
            {
                "id": 4,
                "name": "Қылыш"
            }
        ],
        "correctAnswer": "Пышақтың сынығын"
    },
    {
        "id": 5,
        "question": "Үсен қалай от жақты?",
        "options": [
            {
                "id": 1,
                "name": "Мақта мен шақпақ тасты пайдаланып"
            },
            {
                "id": 2,
                "name": "Сіріңкемен"
            },
            {
                "id": 3,
                "name": "Оттықпен"
            },
            {
                "id": 4,
                "name": "Күн сәулесімен"
            }
        ],
        "correctAnswer": "Мақта мен шақпақ тасты пайдаланып"
    },
    {
        "id": 6,
        "question": "Асан неге балық аулау құралын жасады?",
        "options": [
            {
                "id": 1,
                "name": "Балық аулау үшін"
            },
            {
                "id": 2,
                "name": "Жаңбыр жаудыру үшін"
            },
            {
                "id": 3,
                "name": "Жер қазу үшін"
            },
            {
                "id": 4,
                "name": "Ағаш кесу үшін"
            }
        ],
        "correctAnswer": "Балық аулау үшін"
    },
    {
        "id": 7,
        "question": "Балалар қай жерде түнеп шықты?",
        "options": [
            {
                "id": 1,
                "name": "Үйде"
            },
            {
                "id": 2,
                "name": "Орманда"
            },
            {
                "id": 3,
                "name": "Ауылда"
            },
            {
                "id": 4,
                "name": "Өзен жағасында"
            }
        ],
        "correctAnswer": "Өзен жағасында"
    },
    {
        "id": 8,
        "question": "Қасқырдың дауысын қайда естіді?",
        "options": [
            {
                "id": 1,
                "name": "Ауылда"
            },
            {
                "id": 2,
                "name": "Орманда"
            },
            {
                "id": 3,
                "name": "Өзен жағасында"
            },
            {
                "id": 4,
                "name": "Жұртта"
            }
        ],
        "correctAnswer": "Өзен жағасында"
    },
    {
        "id": 9,
        "question": "Үсен қандай жануарларды көрді?",
        "options": [
            {
                "id": 1,
                "name": "Қасқыр мен киік"
            },
            {
                "id": 2,
                "name": "Арқар мен түлкі"
            },
            {
                "id": 3,
                "name": "Аю мен қоян"
            },
            {
                "id": 4,
                "name": "Құлан мен шортан"
            }
        ],
        "correctAnswer": "Қасқыр мен киік"
    },
    {
        "id": 10,
        "question": "Балалар ақыры қайда жетті?",
        "options": [
            {
                "id": 1,
                "name": "Өзенге"
            },
            {
                "id": 2,
                "name": "Молаға"
            },
            {
                "id": 3,
                "name": "Ауылға"
            },
            {
                "id": 4,
                "name": "Тауға"
            }
        ],
        "correctAnswer": "Ауылға"
    }
]

const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
      const fetch = async () => {
          const b = await bookService.getBookQuizz(params.id);
          setUserBook(asanQuizz);
      }
      fetch();
  }, [params.id]);





    return (
        <>
            <NavbarTop />
            <Divider />
            <QuizPage title={'Біліміңді тексер'} quizData={book}/>
            <Modal
                isOpen={isModalOpen}
                onClose={() => {setIsModalOpen(false)}}
                translation={'Маңызды !'}
                description={'Егер сіз тесттен кемінде 7 ұпай жинасаңыз, сізге ойын бөлімі ашылады'}
            />
            <NavbarBottom />
        </>
    )
}

export default QuizzPage;