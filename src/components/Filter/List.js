import { React, useCallback, useEffect, useState } from "react";
import { pics } from "../Card/CardConstants";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import "./List.css";
import { editUser } from "../../util/http";

function List({ input, musics }) {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const paginacao = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loginUser"));
    if (storedUser) {
      setUser(storedUser);
      setPlaylist(() => {
        return details(musics);
      });
    } else {
      const systemMusics = pics.find((playlist) => playlist.id == id).musics;
      setPlaylist(() => {
        return details(systemMusics);
      });
    }
  }, [input, musics]);

  const details = useCallback(
    (musics) => {
      return musics?.filter((music) => {
        if (input === "") {
          return music;
        }
        //return the item which contains the user input
        else {
          return music.title.toLowerCase().includes(input);
        }
      });
    },
    [playlist, input]
  );
  //create a new array by filtering the original array

  function removeMusic(index) {
    const userPlaylist = user.playlists[id - 1].musicas;
    console.log(userPlaylist);
    // const filteredPlaylists
    // playlists[id - 1].musicas.splice(index, 1);
    // console.log(playlists);
    // const body = {
    //   playlists,
    // };

    // editUser(user._id, body).then((res) => {
    //     console.log(res);

    //     localStorage.setItem("loginUser", JSON.stringify(res.data));
    //     paginacao(0);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <ul className="ListaMusicas">
      {playlist.map((item, index) => {
        return (
          <li key={item.title} className="musica">
            <p className="music-title">{item.title}</p>
            <div className="music-display-container">
              <audio controls="controls">
                <source id="musicshow" src={item.src} type="audio/mpeg" />
                <source id="musicshow" src={item.src} type="audio/ogg" />
              </audio>
              {!!user && (
                <button
                  onClick={(e) => removeMusic(index)}
                  className="remove-btn"
                >
                  -
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
// {
//   "title": "Play1Teste",
//   "source": "https://i.pinimg.com/564x/16/36/3c/16363c2185780e00c0cbdaa927207e32.jpg",
//   "description": "descricao",
//   "musics": [
//     "Mockinbird - Eminem",
//     "Amor de Chocolate - Naldo Benny",
//     "Sing for the Moment - Eminem",
//     "Quer Voar - Matuê"
//   ]
// },
