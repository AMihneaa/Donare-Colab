import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="LoginRegister">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label12" htmlFor="email">
            Email
          </label>
          <input
            className="input12"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label className="label12" htmlFor="password">
            Password
          </label>
          <input
            className="input12"
            value={pass}
            onChange={e => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="info button12" type="submit">
            Log In
          </button>
        </form>
        <Link to="/signup" className="link btn">
          Don&apos;t have an account? Register now.
        </Link>
      </div>
    </div>
  );
};

export default Login;

//aici am editat
