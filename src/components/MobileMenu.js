import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem1 } from "./MenuItem1";

// *** image
import arrow_right_icon from "../img/img/icon-arrow-right.svg";
import arrow_left_icon from "../img/img/icon-arrow-left.svg";
import search_icon from "../img/img/icon-search.svg";
import chat_icon from "../img/img/icon-chat.svg";

const MobileMenu = ({ areaList, newAreaList, countOccurrences }) => {
  const [click, setClick] = useState(false);
  const [hideLevel1, setHideLevel1] = useState(false);
  const [hideLevel2, setHideLevel2] = useState(true);
  const [hideLevel3, setHideLevel3] = useState(true);
  const [houselist, setHouselist] = useState(MenuItem1);

  let hideDelay;
  const toLevel2 = () => {
    setClick(!click);

    // *** delay hide level-1
    hideDelay = setTimeout(() => {
      setHideLevel1(true);
      setHideLevel2(false);
    }, 300);
  };
  clearTimeout(hideDelay);

  const backToLevel1 = () => {
    setClick(!click);
    setHideLevel1(false);
    setHideLevel2(true);
  };

  const level2 = document.querySelector(".mobile-menu-level-2");

  const backToLevel2 = () => {
    setHideLevel2(false);
    setHideLevel3(true);

    // *** remove .hide-left to .mobile-menu-level-2
    level2.classList.remove("hide-left");
  };

  const toLevel3 = (e) => {
    // console.log(e.currentTarget);

    setHideLevel3(false);

    // *** add .hide-left to .mobile-menu-level-2
    level2.classList.add("hide-left");

    // *** get area name
    const areaName =
      e.currentTarget.querySelector(".level-2-area-name").innerHTML;
    // console.log(areaName);

    // *** get the houses in the clicked area
    const newHouselist = MenuItem1.filter((house) => house.area === areaName);
    // console.log(newHouselist);

    // *** dynamicly display area name
    document.querySelector(".area-name").innerHTML = areaName;

    // *** set houselist
    setHouselist(newHouselist);
  };

  const maybePluralize = (count, noun, suffix = "s") =>
    `${count} ${noun}${count !== 1 ? suffix : ""}`;

  return (
    <div className="mobile-menu">
      <div
        className={
          hideLevel1 ? "mobile-menu-level-1 hide" : "mobile-menu-level-1"
        }
      >
        <div className="mobile-menu-header">
          <div className="mobile-menu-number">
            Call <em>01491 825522</em>
          </div>
        </div>

        <ul className="mobile-menu-links">
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/" className={click ? "active" : ""} onClick={toLevel2}>
              <p>
                Homes for sale{" "}
                <img src={arrow_right_icon} alt="arrow right icon" />
              </p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>
                Why Beechcroft?{" "}
                <img src={arrow_right_icon} alt="arrow right icon" />
              </p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>
                Moving house{" "}
                <img src={arrow_right_icon} alt="arrow right icon" />
              </p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>
                Retirement living{" "}
                <img src={arrow_right_icon} alt="arrow right icon" />
              </p>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-btn">
              <p>Blog</p>
            </Link>
          </li>
        </ul>

        <button className="mobile-search-btn">
          <img src={search_icon} alt="search icon" />
        </button>

        <div className="mobile-menu-btn-container">
          <button className="btn mobile-menu-get-in-touch">
            Get in touch
            <img src={arrow_right_icon} alt="arrow right icon" />
          </button>

          <div className="mobile-chat">
            <button className="mobile-chat-btn">
              <img src={chat_icon} alt="chat icon" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          hideLevel2 ? "mobile-menu-level-2 hide" : "mobile-menu-level-2"
        }
      >
        <div className="level-2-header">
          <button className="level-2-arrow-icon" onClick={backToLevel1}>
            <img src={arrow_left_icon} alt="arrow left icon" />
          </button>
          <div className="level-2-title">Homes for sale</div>
        </div>

        <ul className="level-2-links">
          {newAreaList.map((item, index) => {
            return (
              <li key={index}>
                <button onClick={toLevel3}>
                  <h3 className="level-2-area-name">{item}</h3>
                  <p>
                    {maybePluralize(
                      countOccurrences(areaList, item),
                      "development"
                    )}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="level-2-footer">
          <Link to="#">View all homes</Link>
          <button>Download portfolio</button>
        </div>
      </div>

      <div
        className={
          hideLevel3 ? "mobile-menu-level-3 hide" : "mobile-menu-level-3"
        }
      >
        <div className="level-3-header">
          <button className="level-3-arrow-icon" onClick={backToLevel2}>
            <img src={arrow_left_icon} alt="arrow left icon" />
          </button>
          <div className="level-3-title">
            Homes for sale in
            <br />
            <em className="area-name"></em>
          </div>
        </div>

        <div className="mobile-house-list">
          <ul>
            {houselist.map((item, index) => {
              return (
                <li key={index}>
                  <div className="mobile-house">
                    <img src={item.imgS} alt={item.title} />

                    <div className="mobile-house-subtitle">
                      <p>{item.subtitle}</p>
                    </div>
                    <div className="mobile-house-info">
                      <h3>{item.title}</h3>
                      <h4>
                        <Link to={item.location_path}>{item.location}</Link>{" "}
                        {item.postcode}
                      </h4>
                      <h5>{item.info}</h5>
                      <Link
                        to={item.house_path}
                        onClick={() => setClick(false)}
                      >
                        Explore{" "}
                        <img src={arrow_right_icon} alt="arrow right icon" />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
