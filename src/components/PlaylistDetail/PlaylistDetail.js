import React from "react";
import { Link, useParams } from "react-router-dom";
import { pics } from "../Card/CardConstants";

import { linkOptions, linkOptionsLogin } from "../../pages/Home/HomeConstants";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import "./PlaylistDetail.scss";
import SearchBar from "../Filter/SearchBar";

const PlaylistDetail = () => {
  const { id } = useParams();

  let user = JSON.parse(localStorage.getItem("loginUser"));
  let links = linkOptions;

  let details = pics.find((pic) => {
    return pic.id === parseInt(id);
  });

  if (user) {
    links = linkOptionsLogin(user.name);
    details = user.playlists[id - 1];
  }

  return (
    <div className="Home">
      <div className="HomeContainer">
        <SideBar />
        <div className="HomeMajorContent">
          <div className="HomeMajorContent__header">
            <ul className="HomeMajorContent__list-arrows">
              <li className="HomeMajorContent__arrow">
                <button className="HomeMajorContent__button-arrow">
                  &larr;
                </button>
              </li>
              <li>
                <button className="HomeMajorContent__button-arrow">
                  &rarr;
                </button>
              </li>
            </ul>
            <ul className="HomeMajorContent__list-options">
              {links.map((option) => {
                console.log(option);
                return (
                  <li className="HomeMajorContent__option" key={option[0]}>
                    <button
                      className="HomeMajorContent__button-option"
                      disabled={option[0] !== "|"}
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
          <div className="PlaylistDetail">
            <div className="PlaylistDetail-wrapper">
              <div className="Card__faceCard">
                <img
                  src={details.source}
                  alt="capa01"
                  className="Card__picCard"
                />
              </div>
              <p className="PlaylistDetail__title">{details.title}</p>
            </div>
            <div className="Musicas">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaylistDetail;
