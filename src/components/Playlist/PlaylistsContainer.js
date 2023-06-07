import Card from "../Card/Card";
import { pics } from "../Card/CardConstants";
import "./Playlist.scss";

function PlaylistsContainer({ title, playlists }) {
  if (!!playlists) {
    return (
      <div className="Playlist">
        <h1 className="Playlist__title">{title}</h1>
        <div className="Playlist__card-container">
          {playlists.map((element, index) => {
            return <Card playlist={element} id={index + 1} key={index + 1} isUserPlaylist={true}/>;
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
          return <Card playlist={element} id={element.id} key={element.id} isUserPlaylist={false}/>;
        })}
      </div>
    </div>
  );
}

export default PlaylistsContainer;
