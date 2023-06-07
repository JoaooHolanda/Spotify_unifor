import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { pics } from "../Card/CardConstants";

import { linkOptions, linkOptionsLogin } from "../../pages/Home/HomeConstants";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import "./PlaylistDetail.scss";
import SearchBar from "../Filter/SearchBar";
import HomeHeader from "../HomeHeader";

import { getUserPlaylistDetail } from "../../util/http";

const PlaylistDetail = () => {
  const [playlistDetails, setPlaylistDetails] = useState([]);
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchedUser = JSON.parse(localStorage.getItem("loginUser"));
    async function fetchPlaylist(fetchedUser) {
      getUserPlaylistDetail(fetchedUser._id, id - 1).then((res) => {
        setPlaylistDetails(res);
      });
    }
    if (!!fetchedUser) {
      setUser(fetchedUser);
      fetchPlaylist(fetchedUser);
    } else {
      const details = pics.find((pic) => {
        return pic.id === parseInt(id);
      });
      setPlaylistDetails(details);
    }
  }, []);

  let links = linkOptions;

  if (user) {
    links = linkOptionsLogin(user.name);
  }

  return (
    <div className="Home">
      <div className="HomeContainer">
        <SideBar />
        <div className="HomeMajorContent">
          <HomeHeader user={user} />
          <div className="PlaylistDetail">
            <div className="PlaylistDetail-wrapper">
              <div className="Card__faceCard">
                <img
                  src={playlistDetails.source}
                  alt="capa01"
                  className="Card__picCard"
                />
              </div>
              <p className="PlaylistDetail__title">{playlistDetails.title}</p>
            </div>
            <div className="Musicas">
              <SearchBar musics={playlistDetails}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaylistDetail;
