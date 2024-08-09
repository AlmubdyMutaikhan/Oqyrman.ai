import { useParams } from "react-router-dom";
import Divider from "../components/Divider/Divider";
import NavbarBottom from "../components/Navbar/NavbarBottom/NavbarBottom";
import NavbarTop from "../components/Navbar/NavbarTop/NavbarTop";
import { useEffect, useState } from "react";
import Forum from "../components/Forum/Forum";

const ThreadPage = () => {
    const params = useParams();
    const [thread, setThread] = useState({});
    const [comments, setComments] = useState([{id:1, body:'Пікірмен келісемін', createdAt: "2024-04-14T03:00:05.352+00:00"}]);

    const threds = [
        {
            "id": 1,
            "title": "Қазақ Тіліндегі Дауысты Дыбыстарды Меңгеру: Ә, І, Ү, Ы",
            "body": [
                {
                    "image": "https://ru-static.z-dn.net/files/ddc/4b7d7d3590c23c8f3ba25aae9176e24d.jpg",
                    "description": "Қазақ тілінде дауысты дыбыстардың рөлі өте маңызды. Ә, І, Ү, Ы дыбыстары - бұл тілдің негізгі ерекшеліктерінің бірі. Мысалы, Ә дыбысы қазақ тіліндегі басқа дыбыстардан ерекше, себебі ол сөздің мағынасын толықтай өзгерте алады. Бұл дыбысты дұрыс меңгеру үшін ауызды кеңірек ашып айту қажет.",
                    "hasAudio": false,
                    "hasVideo": false,
                    "videoLink": ""
                },
                {
                    "image": "https://avatars.mds.yandex.net/i?id=72de82e989569e646948f95dbd2e4fbc06d5337c-4322231-images-thumbs&n=13",
                    "description": "І дыбысы қазақ тілінде жиі кездеседі және ол басқа дыбыстардан ерекше. Бұл дыбысты дұрыс айту үшін тілді жоғарғы тістерге жақындату керек. І дыбысы қысқа әрі жұмсақ естіледі, оны меңгеру қазақ тілін дұрыс айтуға көмектеседі.",
                    "hasAudio": true,
                    "audioLink": "https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/i-letter.mp3?alt=media&token=3dc79b02-8719-49cc-bdca-9170f17733e7",
                    "audioText": "І дыбысын тыңдау",
                    "hasVideo": false,
                    "videoLink": ""
                },
                {
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cyrillic_letter_Ue.svg/1599px-Cyrillic_letter_Ue.svg.png",
                    "description": "Ү дыбысы қазақ тілінде ерекше орын алады. Бұл дыбыс, әсіресе, сөздің басында немесе ортасында кездескенде сөздің мағынасын өзгертеді. Ү дыбысын айту үшін ерінді дөңгелектеп, жұмсақ түрде айту қажет. Осы дыбысты дұрыс меңгеру тілдің байлығын сезінуге көмектеседі.",
                    "hasAudio": true,
                    "audioLink": "https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/u-letter.mp3?alt=media&token=b9b14ed7-a739-402f-85dd-2cd76d927178",
                    "audioText": "Ү дыбысын тыңдау",
                    "hasVideo": false,
                    "videoLink": ""
                },
                {
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Cyrillic_letter_Yeru.svg/1200px-Cyrillic_letter_Yeru.svg.png",
                    "description": "Ы дыбысы қазақ тілінде кеңінен қолданылады. Ол сөздің мағынасын түбегейлі өзгертетін маңызды дыбыс. Бұл дыбысты дұрыс айту үшін тілді төменгі жаққа жақындату қажет. Ы дыбысын дұрыс меңгеру арқылы қазақ тіліндегі көптеген сөздерді еркін қолдана аласыз.",
                    "hasAudio": true,
                    "audioLink": "https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/y-letter.mp3?alt=media&token=2dd81dc7-75c6-4614-9aba-af4b8971d228",
                    "audioText": "Ы дыбысын тыңдау",
                    "hasVideo": false,
                    "videoLink": ""
                }
            ],
            "commentList": []
        },
        {
            "id": 2,
            "title": "Қазақ Тіліндегі Сәлемдесудің Түрлері",
            "body": [
                {
                    "image": "https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/salem.webp?alt=media&token=a56b2511-4ba9-469e-9abc-7e1e6cd1c864",
                    "description": "Сәлемдесу - бұл әр мәдениеттің ажырамас бөлігі. Қазақ тілінде сәлемдесудің бірнеше түрі бар. Әдетте, күнделікті өмірде 'Сәлем' немесе 'Сәлеметсіз бе?' деген сөздер жиі қолданылады. Бұл сөздер сыпайылық пен құрметтің белгісі болып табылады.",
                    "hasAudio": true,
                    "audioText": "Сәлем беріп үйренейік",
                    "audioLink": "https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/salem.mp3?alt=media&token=2c16e848-625b-4b60-8102-04cce3f800a9",
                    "hasVideo": false,
                    "videoLink": ""
                },
                {
                    "image": "",
                    "description": "Ресми жағдайларда 'Сізге сәлем!' деген сөздер жиі қолданылады. Бұл сөздерді адамдар алғаш кездесу кезінде немесе маңызды кездесулерде пайдаланады. Сонымен қатар, сәлемдесу кезінде қол алысып, көзге қарап айту дәстүрге айналған.",
                    "hasAudio": false,
                    "audioLink": "",
                    "hasVideo": false,
                    "videoLink": ""
                },
                {
                    "image": "https://dm-dobrov.ru/uploads/images/a/s/s/assalauma_alejkum.jpg",
                    "description": "Қазақ халқының мәдениетінде сәлемдесу үлкен маңызға ие. 'Ассалаумағалейкум!' деген сөз үлкендерге, құрметті адамдарға арналған сәлемдесу түрі. Бұл сөздермен бірге бас ию, қол алып, амандасу мәдениетінің бір бөлігі.",
                    "hasAudio": false,
                    "audioLink": "",
                    "hasVideo": false,
                    "videoLink": ""
                }
            ],
            "commentList": []
        },
        {
            "id": 3,
            "title": "Қазақ Тіліндегі Сан Есімдер: 1-ден 10-ға Дейінгі Сандар",
            "body": [
                {
                    "image": "https://example.com/numbers.jpg",
                    "description": "Сан есімдер қазақ тілінде кеңінен қолданылады. 1-ден 10-ға дейінгі сандарды білу күнделікті өмірде өте маңызды. Мысалы, 'бір', 'екі', 'үш' деген сандарды күнделікті сатып алуларда немесе кездесулерде жиі қолданасыз.",
                    "hasAudio": false,
                    "audioLink": "",
                    "hasVideo": false,
                    "videoLink": ""
                },
                {
                    "image": "",
                    "description": "Қазақ тілінде сандарды дұрыс айту үшін олардың дыбысталуына назар аудару қажет. 'Төрт', 'бес', 'алты' деген сандардың айтылуы басқа тілдерден өзгеше. Сандарды дұрыс айту сіздің тілдік дағдыларыңызды дамытады.",
                    "hasAudio": false,
                    "audioLink": "",
                    "hasVideo": false,
                    "videoLink": ""
                },
                {
                    "image": "",
                    "description": "Сандарды меңгеру арқылы сіз кез келген жағдайда өзіңізді еркін сезінесіз. 'Жеті', 'сегіз', 'тоғыз', 'он' сандары қазақ тілінде ерекше орын алады. Бұл сандарды дұрыс меңгеру арқылы қазақ тілін еркін меңгеруге болады.",
                    "hasAudio": false,
                    "audioLink": "",
                    "hasVideo": false,
                    "videoLink": ""
                }
            ],
            "commentList": []
        }
    ]
    

    useEffect(() => {
        // Mock data being set directly
        const fetch = async () => {
            const mockThread = threds[parseInt(params.id) - 1]
            setThread(mockThread);
            setComments(mockThread.commentList);
        };

        fetch();
    }, []);

    return (
        <>
            <NavbarTop />
            <Divider />
            <Forum title={thread?.title} imageURL={thread.imageURL} body={thread?.body} commentList={comments} />
            <NavbarBottom />
        </>
    );
};

export default ThreadPage;
