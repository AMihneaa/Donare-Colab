import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [tel, setTel] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [verifPass, setVerifPass] = useState(true);
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="LoginRegister">
      <div className="auth-form-container border-solid-white">
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="" htmlFor="name">
            Full name
          </label>
          <input
            className=""
            value={name}
            name="name"
            onChange={e => setName(e.target.value)}
            id="name"
            placeholder="full Name"
          />
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className=""
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label className="" htmlFor="phone">
            Telefon
          </label>
          <input
            className=""
            value={tel}
            onChange={e => setTel(e.target.value)}
            type="tel"
            placeholder="Numar Telefon"
            id="phone"
            name="telefon"
          />
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            className=""
            value={pass}
            onChange={e => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label className="" htmlFor="confirmpassword">
            Confirmare password
          </label>
          <input
            className=""
            value={confirmPass}
            onChange={e => {
              setConfirmPass(e.target.value);
            }}
            type="password"
            placeholder="********"
            id="confirmpassword"
            name="confirmpassword"
          />
          {!verifPass ? (
            <h6 className="parolagresita-text">Parolele nu corespund</h6>
          ) : (
            <span></span>
          )}
          <button
            className="info"
            onClick={e => {
              setConfirmPass(e.target.value);
              setVerifPass(pass === confirmPass ? true : false);
            }}
            type="submit"
          >
            Register
          </button>
        </form>
        <Link to="/login" className="link btn">
          Already have an account? Login here.
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

//aici am editat
