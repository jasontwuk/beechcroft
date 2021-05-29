import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem2 } from "./MenuItem2";

const Submenu2 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "submenu2 clicked" : "submenu2"}
      >
        {MenuItem2.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Submenu2;
