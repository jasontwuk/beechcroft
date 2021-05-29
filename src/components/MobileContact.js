// *** image
import arrow_right_icon from "../img/img/icon-arrow-right.svg";

const MobileContact = () => {
  return (
    <div className="mobile-contact">
      <div className="mobile-number">
        Call <em>01491 825522</em>
      </div>
      <div className="mobile-get-in-touch">
        Get in touch <img src={arrow_right_icon} alt="arrow right icon" />
      </div>
    </div>
  );
};

export default MobileContact;
