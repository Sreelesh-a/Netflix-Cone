import { BACKGROUND_COLLAGE_IMG } from "../utils/constants";
import Header from "./Header";
import LoginForm from "./subComponents/LoginForm";

const Login = () => {
  return (
    <div className="bg-black">
      <Header />
      <LoginForm />
      <div className="">
        <img
          className="h-screen w-full"
          src={BACKGROUND_COLLAGE_IMG}
          alt="BG_IMG"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Login;
