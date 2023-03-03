// import { faHandLizard } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import '../styles/account.scss';

const MyAccount = () => {
  let userFirstName = 'Mihnea';
  let userLastName = 'Dep';

  const [bloodType, setBloodType] = useState('A+');
  const [userWeight, setUserWeight] = useState('80');
  const [userHeight, setUserHeight] = useState('190');
  const [userAge, setUserAge] = useState('19');
  const [userBloodType, setUserBloodType] = useState('B+');

  const classes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  const handleClick = e => {
    const allWithClass = Array.from(
      document.getElementsByClassName('bloodtype-circle')
    );

    for (let i = 0; i < allWithClass.length; i++) {
      allWithClass[i].addEventListener('click', () => {
        removeActiveClass();
        allWithClass[i].classList.add('active');
        setBloodType(classes[i]);
      });
    }

    const removeActiveClass = () => {
      allWithClass.forEach(element => {
        element.classList.remove('active');
      });
    };
  };

  useEffect(() => {
    document.getElementsByClassName(bloodType)[0].classList.add('active');
  }, []);

  return (
    <section className="account-section">
      <div className="account-div-principal">
        <div className="account-div-info">
          <div className="account-div-info-name">
            <h2>Nume {userLastName}</h2>
            <h2>Prenume {userFirstName}</h2>
          </div>
          <div className="account-div-info-3">
            <h4>
              Varsta{' '}
              <input
                className="input-cont"
                id="varsta"
                type="number"
                value={userAge}
                onChange={e => {
                  setUserAge(e.target.value);
                }}
              />
            </h4>
            <h4>Inaltime {userHeight} cm</h4>
            <h4>Greutate {userWeight} kg</h4>
          </div>
        </div>
        <div onClick={e => handleClick(e)} className="account-div-bloodtype">
          <div className="bloodtype-circle A+">A+</div>
          <div className="bloodtype-circle A-">A-</div>
          <div className="bloodtype-circle B+">B+</div>
          <div className="bloodtype-circle B-">B-</div>
          <div className="bloodtype-circle 0+">O+</div>
          <div className="bloodtype-circle 0-">O-</div>
          <div className="bloodtype-circle AB+">AB+</div>
          <div className="bloodtype-circle AB-">AB-</div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
