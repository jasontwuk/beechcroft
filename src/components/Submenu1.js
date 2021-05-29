import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem1 } from "./MenuItem1";

// *** image
import arrow_right_icon from "../img/img/icon-arrow-right.svg";

const Submenu1 = () => {
  const [click, setClick] = useState(false);

  const [houselist, setHouselist] = useState(MenuItem1);

  const handleClick = () => {
    setClick(!click);
  };

  // *** original area list (with duplicates)
  const areaList = Array.from(MenuItem1, (item) => item.area);
  // console.log(areaList);

  // *** area list (without duplicates)
  const newAreaList = [...new Set(areaList)];
  // console.log(newAreaList);

  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  // console.log(countOccurrences(areaList, areaList[5]));

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
                <img src={item.imgB} alt={item.title} />

                <div className="house-subtitle">
                  <p>{item.subtitle}</p>
                </div>
                <div className="house-info">
                  <h3>{item.title}</h3>
                  <h4>{item.address}</h4>
                  <h4>{item.postcode}</h4>
                  <h5>{item.info}</h5>
                  <Link to={item.path} onClick={() => setClick(false)}>
                    Explore{" "}
                    <img src={arrow_right_icon} alt="arrow right icon" />
                  </Link>
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
