import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuItem1 } from "./MenuItem1";
import Submenu1 from "./Submenu1";
import Submenu2 from "./Submenu2";
import MobileMenu from "./MobileMenu";

// *** image
import logo from "../img/img/logo.svg";
import arrow_right_icon from "../img/img/icon-arrow-right.svg";
import search_icon from "../img/img/icon-search.svg";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const menuRef1 = useRef();
  const menuRef2 = useRef();

  const handleClick = () => {
    setClick(!click);
    setOpen(!open);
  };

  const onMouseEnter1 = () => {
    // console.log(menuRef1.current);
    menuRef1.current.classList.add("active");

    if (window.innerWidth < 900) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    menuRef1.current.classList.remove("active");

    if (window.innerWidth < 900) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const onMouseEnter2 = () => {
    // console.log(menuRef2.current);
    menuRef2.current.classList.add("active");

    if (window.innerWidth < 900) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave2 = () => {
    menuRef2.current.classList.remove("active");

    if (window.innerWidth < 900) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
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

  return (
    <>
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="nav-logo">
              <img src={logo} alt="Beechcroft logo" />
            </Link>
          </div>

          <ul className="nav-links">
            <li
              onMouseEnter={onMouseEnter1}
              onMouseLeave={onMouseLeave1}
              ref={menuRef1}
            >
              <Link to="/" className="link-btn">
                <p>Homes for sale</p>
              </Link>
              {dropdown1 && (
                <Submenu1
                  areaList={areaList}
                  newAreaList={newAreaList}
                  countOccurrences={countOccurrences}
                />
              )}
            </li>
            <li
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
              ref={menuRef2}
              className="pos-relative"
            >
              <Link to="/" className="link-btn">
                <p>Why Beechcroft?</p>
              </Link>
              {dropdown && <Submenu2 />}
            </li>
            <li>
              <Link to="/" className="link-btn">
                <p>Moving house</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="link-btn">
                <p>Retirement living</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="link-btn">
                <p>Blog</p>
              </Link>
            </li>
          </ul>

          <button className="search-btn">
            <img src={search_icon} alt="search icon" />
          </button>

          <div className="phone-number">01491 825522</div>

          <button className="btn get-in-touch-btn">
            Get in touch
            <img src={arrow_right_icon} alt="arrow right icon" />
          </button>
        </div>

        <div
          className={click ? "toggle-btn active" : "toggle-btn"}
          onClick={handleClick}
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {open && (
          <MobileMenu
            areaList={areaList}
            newAreaList={newAreaList}
            countOccurrences={countOccurrences}
          />
        )}
        {/* <MobileMenu /> */}
      </nav>
    </>
  );
};

export default Nav;
