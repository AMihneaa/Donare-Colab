import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const LINKS1 = [
  { to: '/home', text: 'Home page' },
  { to: '/programare', text: 'Programare' },
];

const LINKS2 = [
  { to: '/info', text: 'Informatii' },
  { to: '/myaccount', text: 'Cont' },
];

const Navs = () => {
  return (
    <div className="navigation-bar">
      <ul>
        {LINKS1.map(item => (
          <li key={item.to}>
            <Link className="navlink" to={item.to}>
              {item.text}
            </Link>
          </li>
        ))}
        <li></li>
        {LINKS2.map(item => (
          <li key={item.to}>
            <Link className="navlink" to={item.to}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
