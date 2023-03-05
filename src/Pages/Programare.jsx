import Popup from 'reactjs-popup';

import '../styles/programare.scss';

function Programare() {
  return (
    <section className="section-programare">
      <div className="calendar">
        <div className="calendar-ora">
          <Popup
            contentStyle={{
              width: '30%',
              height: '30%',
              padding: '0%',
              position: 'relative',
              marginTop: '10%',
            }}
            trigger={<button className="btn-ora">09:00 - 09:15</button>}
            modal
            nested
          >
            {close => (
              <div className="">
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
                <div className="regulament-titlu">
                  <h1>09:00 - 09:15</h1>
                  <button></button>
                </div>
              </div>
            )}
          </Popup>
          {/* <div className="calendar-minut">
            <h6 className="calendar-minut-text">09: 00 - 09 : 15</h6>
          </div> */}
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
