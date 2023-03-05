import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import '../styles/box.scss';

function BoxLayout() {
  return (
    <div className="boxlayout">
      <Popup
        contentStyle={{ width: '80%', height: '80%', padding: '0%' }}
        trigger={<button className="box-div">Regulament</button>}
        modal
        nested
      >
        {close => (
          <div className="regulament">
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
              <h1>Regulament</h1>
            </div>
          </div>
        )}
      </Popup>
      <Popup
        contentStyle={{ width: '80%', height: '80%', padding: '0%' }}
        trigger={<button className="box-div">Restrictii</button>}
        modal
        nested
      >
        {close => (
          <div className="regulament">
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
            <div className="regulament-titlu">Ceva</div>
          </div>
        )}
      </Popup>
      <Popup
        contentStyle={{ width: '80%', height: '80%', padding: '0%' }}
        trigger={<button className="box-div">Beneficii</button>}
        modal
        nested
      >
        {close => (
          <div className="regulament">
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
            <div className="regulament-titlu">Ceva</div>
          </div>
        )}
      </Popup>
      <Popup
        contentStyle={{ width: '80%', height: '80%', padding: '0%' }}
        trigger={
          <button className="box-div">
            <span className="invizibil">1</span>Locatie
            <span className="invizibil">12</span>
          </button>
        }
        modal
        nested
      >
        {close => (
          <div className="regulament">
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
            <div className="regulament-titlu">Ceva</div>
          </div>
        )}
      </Popup>
      <Popup
        contentStyle={{ width: '80%', height: '80%', padding: '0%' }}
        trigger={
          <button className="box-div">
            <span className="invizibil">12</span>Invite
            <span className="invizibil">12</span>
          </button>
        }
        modal
        nested
      >
        {close => (
          <div className="regulament">
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
            <div className="regulament-titlu">Ceva</div>
          </div>
        )}
      </Popup>
      <Popup
        contentStyle={{ width: '80%', height: '80%', padding: '0%' }}
        trigger={
          <button className="box-div">
            <span className="invizibil">1</span>
            Contacte <span className="invizibil">1</span>
          </button>
        }
        modal
        nested
      >
        {close => (
          <div className="regulament">
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
            <div className="regulament-titlu">Ceva</div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default BoxLayout;
