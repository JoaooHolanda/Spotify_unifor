import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";

import "./Home.scss";
import HomeMajorContent from "./MajorContent/HomeMajorContent";
import PlaylistModal from "../../components/Playlist/PlaylistModal";

const Home = () => {
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchedUser = JSON.parse(localStorage.getItem("loginUser"));

    if (!!fetchedUser) {
      setUser(fetchedUser);
    }
  }, []);

  if (openPlaylistModal) {
    if (!!user) {
      return (
        <PlaylistModal
          functionToCloseModal={() => setOpenPlaylistModal(false)}
          user={user}
        />
      );
    }
    // alert("O usuário preisa estar logado!");
  }

  return (
    <div className="Home">
      <div className="HomeContainer">
        <SideBar functionToOpenModal={() => setOpenPlaylistModal(true)} />
        <HomeMajorContent />
      </div>
      <Footer />
    </div>
  );
};

Home.defaultPropTypes = {};

export default Home;
