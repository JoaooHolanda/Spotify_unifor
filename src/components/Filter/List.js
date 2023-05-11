import { React } from "react";
import { pics } from "../Card/CardConstants";

import { useParams } from "react-router-dom";

import './List.css';

function List(props) {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("loginUser"));

  let playlistAtual = pics.find((playlist) => playlist.id == id);

  if (user) {
    playlistAtual = user.playlists[id - 1];
  }

  const details = playlistAtual.musics?.filter((pic) => {
    if (props.input === "") {
      return pic;
    }
    //return the item which contains the user input
    else {
      return pic.title.toLowerCase().includes(props.input);
    }
  });
  //create a new array by filtering the original array

  const findFileByMusicName = (musicName) => {
    const music = pics[0].musics.find((music) => {
      return music.title === musicName;
    });
    return music?.file;
  };

  if (user) {
    return (
      <ul className="ListaMusicas">
        {details.map((item) => {
          return (
            <li key={item} className="musica">
              <p className="music-title">{item}</p>
              <div className="music-display-container">
                <audio controls="controls">
                  <source
                    id="musicshow"
                    src={findFileByMusicName(item)}
                    type="audio/mpeg"
                  />
                  <source
                    id="musicshow"
                    src={findFileByMusicName(item)}
                    type="audio/ogg"
                  />
                </audio>
                <button className="remove-btn">-</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="ListaMusicas">
      {details.map((item) => {
        return (
          <li key={item.id} className="musica">
            <p className="music-title">{item.title}</p>
            <audio controls="controls">
              <source id="musicshow" src={item.file} type="audio/mpeg" />
              <source id="musicshow" src={item.file} type="audio/ogg" />
            </audio>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
