import Popup from 'reactjs-popup';

import { programareData } from '../Json/CalendarData';

import '../styles/programare.scss';

function Programare() {
  let userFirstName = 'Mihnea';
  let userLastName = 'Familie';

  const handleProgramare = e => {
    programareData[e.target.id].ocupat == 'false' ? modificaProgramare() : {};

    const modificaProgramare = () => {
      JSON.stringify(programareData[e.target.id].ocupat, true);
      // programareData[e.target.id].ocupat = 'true';
      // programareData[e.target.id].firstName = userFirstName;
      // programareData[e.target.id].lastName = userLastName;
    };
  };

  return (
    <section className="section-programare">
      <div className="calendar">
        <div className="calendar-ora">
          <Popup
            contentStyle={{
              width: '500px',
              height: '400px',
              padding: '0%',
              position: 'relative',
              marginTop: '10%',
            }}
            trigger={<button className="btn-ora">09:00 - 09:15</button>}
            modal
            nested
          >
            {close => (
              <div className="close-btn">
                <div>
                  <button
                    style={{
                      float: 'right',
                      border: '0',
                    }}
                    className="close-btn"
                    onClick={() => {
                      close();
                    }}
                  >
                    <h3>x</h3>
                  </button>
                </div>
                <div className="programare-titlu">
                  <h1>09:00 - 09:15</h1>
                </div>
                <div className="programare-div">
                  <button
                    id="0"
                    className="btn-programare"
                    onClick={e => handleProgramare(e)}
                  >
                    {programareData[0].ocupat == 'false'
                      ? 'Nu esti programat'
                      : `${programareData[0].lastName} ${programareData[0].firstName}`}
                  </button>
                  <button id="1" className="btn-programare">
                    Programeaza-te
                  </button>
                  <button id="2" className="btn-programare">
                    Programeaza-te
                  </button>
                  <button id="3" className="btn-programare">
                    Programeaza-te
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <div className="calendar-minut">
            <h6 className="calendar-minut-text">09 : 15 - 09 : 30 </h6>
          </div>
          <div className="calendar-minut">
            <h6 className="calendar-minut-text">09 : 30 - 09 : 45 </h6>
          </div>
          <div className="calendar-minut">
            {' '}
            <h6 className="calendar-minut-text">09 : 45 - 10 : 00 </h6>{' '}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programare;
