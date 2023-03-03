import { Link } from 'react-router-dom';
import SVGBloodRed from '../Components/svg/blood-svg-red';

const LoginRegister = () => {
  return (
    <div className="LoginRegister-Page">
      <div className="auth-form-container">
        <div className="imgBlood">
          <SVGBloodRed />
        </div>
        <h2 className="LoginRegister-h2">
          <span className="Donare">Donare</span>{' '}
          <span className="culoare-red">LSE</span>{' '}
          <span className="Sange">Sange</span>
        </h2>
        <div className="div-link">
          <Link
            className="btn-culoare-alb info link-btn "
            type="button"
            to="/login"
          >
            Log in
          </Link>
          {/* <span className="distantate-span"></span> */}
          <Link
            className=" btn-culoare-rosu info link-btn "
            type="button"
            to="/signup"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

//aici am editat
