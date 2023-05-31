import React, { useEffect, useState } from "react";
import { playlistTitles } from "../../../components/Card/CardConstants";
import Playlist from "../../../components/Playlist/PlaylistsContainer";

import "./HomeMajorContent.scss";
import HomeHeader from "../../../components/HomeHeader";
import { getUserPlaylistById } from "../../../util/http";
import PlaylistsContainer from "../../../components/Playlist/PlaylistsContainer";

const HomeMajorContent = () => {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let fetchedUser = JSON.parse(localStorage.getItem("loginUser"));

    async function fetchPlaylists(userId) {
      const playlists = await getUserPlaylistById(userId);
      setUserPlaylists(playlists.data.data);
    }
    if (!!fetchedUser) {
      fetchPlaylists(fetchedUser._id);
      setUser(fetchedUser);
    }
  }, []);

  return (
    <div className="HomeMajorContent">
      <HomeHeader user={user} />
      <div className="HomeMajorContent__playlists">
        {userPlaylists?.length > 0 ? (
          <PlaylistsContainer
            title={"Playlists do Usuário"}
            key={"Playlists do Usuário"}
            playlists={userPlaylists}
          />
        ) : (
          playlistTitles.map((title) => {
            return <PlaylistsContainer title={title} key={title} />;
          })
        )}
      </div>
    </div>
  );
};

export default HomeMajorContent;
