import CarrouselComponent from '../Components/Home/Carrousel';
import Navs from '../Components/Navs';
import SVGBloodRed from '../Components/svg/blood-svg-red';
import BoxLayout from '../Components/BoxLayout';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <div className="home">
      <section className="home-section">
        <Navs className="nav-pc" />
        <div className="taietura">
          <SVGBloodRed className="svg-logo" />
        </div>

        <CarrouselComponent />
        <div className="info-btn-div">
          <BoxLayout />
        </div>
        {/* <SVGBloodRed className="svg-logo-tel" /> */}
      </section>
      <div className="Nav-phone">
        <div className="nav-phone-content">
          <Navbar />
          <div className="taietura-phone">
            <SVGBloodRed className="svg-logo-tel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
