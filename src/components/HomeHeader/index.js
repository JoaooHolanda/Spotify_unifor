import { linkOptions, linkOptionsLogin } from "../../pages/Home/HomeConstants";
import { Link } from "react-router-dom";

import "./styles.scss";
const HomeHeader = ({ user }) => {
  let links = linkOptions;

  if (user) {
    links = linkOptionsLogin(user.name);
  }

  return (
    <div className="HomeMajorContent__header">
      <ul className="HomeMajorContent__list-arrows">
        <li className="HomeMajorContent__arrow">
          <button className="HomeMajorContent__button-arrow">&larr;</button>
        </li>
        <li>
          <button className="HomeMajorContent__button-arrow">&rarr;</button>
        </li>
      </ul>
      <ul className="HomeMajorContent__list-options">
        {links.map((option) => {
          return (
            <li className="HomeMajorContent__option" key={option[0]}>
              <button
                className="HomeMajorContent__button-option"
                disabled={option[0] === "|"}
              >
                <Link
                  to={option[1]}
                  className={option[0] !== "|" ? "option" : "separator"}
                >
                  {option[0]}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeHeader;
