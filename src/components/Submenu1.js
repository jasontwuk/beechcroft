import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem1 } from "./MenuItem1";

// *** image
import arrow_right_icon from "../img/img/icon-arrow-right.svg";

const Submenu1 = ({ areaList, newAreaList, countOccurrences }) => {
  const [click, setClick] = useState(false);

  const [houselist, setHouselist] = useState(MenuItem1);

  const handleClick = () => {
    setClick(!click);
  };

  const getHouse = (e) => {
    // console.log(e.target);

    // *** get all .area-btn
    const areaBtns = document.querySelectorAll(".area-btn");
    // console.log(areaBtns);

    // *** remove .active from all .area-btn
    areaBtns.forEach((btn) => btn.classList.remove("active"));

    // *** add .active to the clicked button
    e.target.classList.add("active");

    // *** regex return an array, so use [0] to get the string
    const areaName = e.target.innerHTML.match(/^[A-Za-z]+/)[0];

    // *** get the houses in the clicked area
    const newHouselist = MenuItem1.filter((house) => house.area === areaName);
    // console.log(newHouselist);

    // *** set houselist
    setHouselist(newHouselist);
  };

  const getAllHouse = (e) => {
    // console.log(e.target);

    // *** get all .area-btn
    const areaBtns = document.querySelectorAll(".area-btn");
    // console.log(areaBtns);

    // *** remove .active from all .area-btn
    areaBtns.forEach((btn) => btn.classList.remove("active"));

    // *** add .active to the clicked button
    e.target.classList.add("active");

    // *** set houselist to MenuItem1
    setHouselist(MenuItem1);
  };

  return (
    <div
      onClick={handleClick}
      className={click ? "submenu1 clicked" : "submenu1"}
    >
      <ol>
        <li>
          <button className="area-btn active" onClick={getAllHouse}>
            All ({areaList.length})
          </button>
        </li>
        {newAreaList.map((item, index) => {
          return (
            <li key={index} onClick={getHouse}>
              <button className="area-btn">
                {item} ({countOccurrences(areaList, item)})
              </button>
            </li>
          );
        })}
      </ol>

      <ul>
        {houselist.map((item, index) => {
          return (
            <li key={index}>
              <div className="house">
                <Link to={item.house_path} onClick={() => setClick(false)}>
                  <img src={item.imgB} alt={item.title} />

                  <div className="house-subtitle">
                    <p>{item.subtitle}</p>
                  </div>
                  <div className="house-info">
                    <h3>{item.title}</h3>
                    <h4>{item.postcode}</h4>
                    <h5>{item.info}</h5>
                    <div className="explore-btn">
                      Explore{" "}
                      <img src={arrow_right_icon} alt="arrow right icon" />
                    </div>
                  </div>
                </Link>

                <div className="location-link">
                  <Link to={item.location_path}>{item.location}</Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="download">
        <button>Download magazine</button>
      </div>
    </div>
  );
};

export default Submenu1;
