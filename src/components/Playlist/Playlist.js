import Card from "../Card/Card";
import { pics } from "../Card/CardConstants";
import "./Playlist.scss";

function Playlist({ title, isUserPlaylist }) {
  if (isUserPlaylist) {
    let userPlaylists = JSON.parse(localStorage.getItem("loginUser")).playlists;
    return (
      <div className="Playlist">
        <h1 className="Playlist__title">{title}</h1>
        <div className="Playlist__card-container">
          {userPlaylists.map((element, index) => {
            return <Card playlist={element} id={index + 1} key={index} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="Playlist">
      <h1 className="Playlist__title">{title}</h1>
      <div className="Playlist__card-container">
        {pics.map((element) => {
          return <Card playlist={element} id={element.id} key={element.id} />;
        })}
      </div>
    </div>
  );
}

export default Playlist;
