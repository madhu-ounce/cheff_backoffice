import LoginComponent from "./login"
import Logo from '../../assets/images/cheff_logo_1.svg';

const LoginMain = () => {
    return (
        <>
            <img className="logoImg" src={Logo} />
            <LoginComponent />
        </>)
}

export default LoginMain;