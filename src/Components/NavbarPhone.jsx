import { IoIosHome } from 'react-icons/io';
import { IoIosCalendar } from 'react-icons/io';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoIosPerson } from 'react-icons/io';
import '../styles/navPhone.scss';

const Navbar = () => {
  return (
    <div className="navigation-bar-phone">
      <ul className="ul-phone">
        <li>
          <button
            style={{
              borderRadius: '0',
              border: '0',
              padding: '0',
              margin: '0',
              backgroundColor: 'transparent',
            }}
          >
            <IoIosHome className="IoIo" />
          </button>
        </li>

        <li>
          <button
            style={{
              borderRadius: '0',
              border: '0',
              padding: '0',
              margin: '0',
              backgroundColor: 'transparent',
            }}
          >
            <IoIosCalendar className="IoIo" />
          </button>
        </li>

        <li></li>

        <li>
          <button
            style={{
              borderRadius: '0',
              border: '0',
              padding: '0',
              margin: '0',
              backgroundColor: 'transparent',
            }}
          >
            <IoIosInformationCircleOutline className="IoIo" />
          </button>
        </li>

        <li>
          <button
            style={{
              borderRadius: '0',
              border: '0',
              padding: '0',
              margin: '0',
              backgroundColor: 'transparent',
            }}
          >
            <IoIosPerson className="IoIo" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

//aici am editat
