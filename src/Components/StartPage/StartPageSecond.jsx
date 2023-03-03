import { useEffect, useState } from 'react';
import SVGImagine1 from '../svg/imagine1';
import SVGIMAGE2 from '../svg/imagine2';
import LoginRegister from '../../Pages/LoginRegister';
// import { faL } from '@fortawesome/free-solid-svg-icons';

const FirstElement = props => {
  return (
    <div>
      <section className="SecondElement-section">
        <div className="SecondElementDiv ">
          <SVGIMAGE2 className="SecondElement-svg" />
          <div className="SecondElement-text">
            <h2>Donare de sange, editia nu stiu care </h2>
            <h6>
              *Insert Furtuna - copyrighting skills - *Insert Furtuna -
              copyrighting skills - *Insert Furtuna - copyrighting skills -
              *Insert Furtuna - copyrighting skills -
            </h6>
          </div>
          <button className="skip2-btn" onClick={props.skipAll} color="success">
            Skip
          </button>
          <button
            className="next2-btn"
            onClick={props.nextElement}
            color="success"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

const SecondElement = props => {
  useEffect(() => {
    setTimeout(() => {
      props.skipAll();
    }, 4000);
  });

  return (
    <section className="firstElement-section">
      <div className="fistElementDiv ">
        <SVGImagine1 className="imagine1-svg" />
        <div className="firstElement-text">
          <h2>In colaborare cu x, y, z, semnat LSE</h2>
          <h6>
            Nulla id convallis dolor. Sed pellentesque elit at nibh placerat, at
            feugiat dolor pretium. Proin mollis magna finibus, ultrices nunc in,
            aliquam nisi. Nulla id convallis dolor. Sed pellentesque elit at
            nibh placerat, at feugiat dolor pretium. Proin mollis magna finibus,
            ultrices nunc in, aliquam nisi.
          </h6>
          <button className="skip-btn" onClick={props.skipAll} color="success">
            Skip
          </button>
          <button
            className="next-btn"
            onClick={props.nextElement}
            color="success"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

const StartPageSecond = () => {
  const [showElement, setShowElement] = useState(true);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  });

  const handleSkip = () => {
    setShowElement(false);
    setSkip(true);
  };

  const nextElement = () => {
    setShowElement(false);
  };

  return skip ? (
    <LoginRegister />
  ) : showElement ? (
    <FirstElement skipAll={handleSkip} nextElement={nextElement} />
  ) : (
    <SecondElement skipAll={handleSkip} nextElement={handleSkip} />
  );
};

export default StartPageSecond;
