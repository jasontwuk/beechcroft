// *** image
import arrow_right_icon from "../img/img/icon-arrow-right.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-info">
          <h1>Luxury retirement homes for you</h1>
          <button className="btn">
            Explore our properties
            <img src={arrow_right_icon} alt="arrow right icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
