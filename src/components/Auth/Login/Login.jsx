import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import AuthLayout from "../AuthLayout";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import AuthService from "../../../services/authService";
import { Link } from 'react-router-dom';


const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const { ok } = await AuthService.login(data);
    console.log(ok);
    if (ok) {
      toast.success(t('okLogin'));
      navigate('/dashboard'); 
    } else {
      toast.error(t('nokLogin'));
    }
  };

  const onError = (errors, e) => {
    const errorKeys = Object.keys(errors);
    console.log(errorKeys);
    toast.error(errors[errorKeys[0]].message);
  };
  return (
    <AuthLayout title={t("Login")}>
      <form
        className="auth-form-fields"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
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
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </div>
        {/*TODO: Add forget password */}

        <button className="auth-form-fields__submit" type="submit">
          {t('signin')}
        </button>
      </form>
      <Link to="/signup">{t('redirectSignup')}</Link>
      </AuthLayout>
  )
}

export default Login;
