import ImageFrame from "../Atoms/Image/Image";
import LanguageSelector from "../LangSelector/LangSelector";
import './index.scss';

const AuthLayout = ({ children, title, style }) => {
    // TODO: Import Navbar top
    return (
        <div className="auth-layout" style={style}>
        <div className="auth-layout__image">
            <ImageFrame
                src="https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/bg-desktop.png?alt=media&token=ea00c05f-3aa5-4c14-af49-c307430c2954"
                alt="Content"
                height='100%'
                width='100%'
                frametype="rectangle"
                text="Oqyrman.ai"
                textposition="center"
                textcolor="white"
            />    
        </div>
        <div className="auth-layout__content">
            <div className="auth-layout__menu">
                <LanguageSelector />
            </div>
        <div className="auth-headline">
                <ImageFrame
                    height="200px"
                    style={{marginTop: '-100px'}}
                    width="200px"
                    frametype="circle"
                    src="https://firebasestorage.googleapis.com/v0/b/bee-volunteers.appspot.com/o/logo.png?alt=media&token=b748025b-87b6-45e9-9306-46d0690a90e6"
                />
                <p>Бүгінгі балдырған - ертеңгі оқырман</p>
            </div>
            <div className="auth-form">
                <h1 className="auth-form__title">{ title }</h1>
                {children}
            </div>
        </div>
    </div>
    )
}

export default AuthLayout;