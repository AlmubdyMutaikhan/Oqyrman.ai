import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import AuthLayout from "../AuthLayout";
import { toast, ToastContainer } from "react-toastify";
import AuthService from "../../../services/authService";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import "./SignUp.scss";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { ok } = await AuthService.register(data);
    console.log(ok);
    if (ok) {
      toast.success(t('okSignup'));
      navigate('/dashboard'); 
    } else {
      toast.error(t('nokSignup'));
    }
  };

  const onError = (errors, e) => {
    const errorKeys = Object.keys(errors);
    console.log(errorKeys);
    toast.error(errors[errorKeys[0]].message);
  };
  return (
    <AuthLayout title={t("welcome")} style={{
      paddingTop: '100px',
      paddingBottom: '50px'
    }}>
      <form
        className="auth-form-fields"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="auth-form-fields__name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: "Name is required", // Custom error message
            })}
            placeholder={t("fillName")}
          />
        </div>
        <div className="auth-form-fields__email">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder={t("fillEmail")}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
          />
        </div>
        <div className="auth-form-fields__password">
          <label htmlFor="password">Құпия сөз:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={t("fillPassword")}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Құпия сөз кемінде 8 әріптен тұру қажет",
              },
            })}
          />
        </div>
        <div className="auth-form-fields__tos">
          <input
            type="checkbox"
            id="tos"
            name="tos"
            {...register("tos", {
              required: "You must agree to the Terms of Service to continue",
            })}
          />
          <label htmlFor="tos">Қолдану шарттарымен келісемін</label>
        </div>

        <button className="auth-form-fields__submit" type="submit">
            Тіркелу
        </button>
        
      </form>
      <Link to="/login">{t('redirectLogin')}</Link>
    </AuthLayout>
  );
};

export default SignUp;
