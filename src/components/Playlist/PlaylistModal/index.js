import { useEffect, useState } from "react";
import Input from "../../Input";
import "./styles.scss";
import axios from "axios";
import { insertPlaylist } from "../../../util/http";

const PlaylistModal = ({ functionToCloseModal, user }) => {
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [musics, setMusics] = useState([]);
  const [fetchedMusics, setFetchedMusics] = useState([]);
  // const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    // setUserPlaylists(user.playlists);
    axios.get("http://localhost:3000/musicas").then((res) => {
      setFetchedMusics(res.data.data);
    });
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setPlaylistInfo((info) => ({ ...info, [name]: value }));
  }

  function handleMusicSelect(e) {
    if (e.target.checked === true) {
      setMusics((prevState) => [
        ...prevState,
        {
          title: fetchedMusics[e.target.value].title,
          src: fetchedMusics[e.target.value].src,
        },
      ]);
    } else {
      setMusics(
        musics.filter((music) => {
          return music.title !== fetchedMusics[e.target.value].title;
        })
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault(false);
    console.log(musics);
    // const playlists = [...userPlaylists, { ...playlistInfo, musicas: musics }];
    const playlist = { ...playlistInfo, musicas: musics };

    // let body = {
    //   ...user,
    //   playlists,
    // };

    console.log(playlist);

    const response = insertPlaylist(user._id, playlist);
    // axios
    //   .put(`http://localhost:3000/users/${user.id}/`, body)
    //   .then((res) => {
    //     console.log(res); 
    //     localStorage.removeItem("loginUser");
    //     localStorage.setItem("loginUser", JSON.stringify(body));
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    document.getElementById("create-playlist-form").reset();
    functionToCloseModal();
  }

  //   useEffect(() => {
  //     const handleClickInside = () => {
  //       functionToCloseModal();
  //     };

  //     document.addEventListener("click", handleClickInside);

  //     return () => {
  //       document.removeEventListener("click", handleClickInside);
  //     };
  //   }, [functionToCloseModal]);

  return (
    <div className="PlaylistModal__main">
      <div className="PlaylistModal__content">
        <form onSubmit={handleSubmit} id="create-playlist-form">
          <Input
            name="title"
            onChange={handleChange}
            label="Qual é o nome da Playlist?"
            placeholder="Insira o nome da Playlist."
            required
          />
          <Input
            name="musics"
            onChange={handleMusicSelect}
            type="checkbox"
            options={
              fetchedMusics.map((music, index) => {
                return { value: index, label: music.title };
              })
              // [
              //   { value: "Mockinbird - Eminem", label: "Mockinbird" },
              //   {
              //     value: "Amor de Chocolate - Naldo Benny",
              //     label: "Amor de Chocolate",
              //     src: "mp3",
              //   },
              //   {
              //     value: "Sing for the Moment - Eminem",
              //     label: "Sing for the Moment",
              //     src: "mp3",
              //   },
              //   {
              //     value: 2,
              //     label: "Monster",
              //   },
              //   { value: "Vampiro - Matuê", label: "Vampiro", src: "mp4" },
              //   { value: "Quer Voar - Matuê", label: "Quer Voar", src: "mp3" },
              // ]
            }
            label="Quais músicas você deseja adicionar?"
          />
          <button type="submit" className="PlaylistModal__button-submit">
            Criar Playlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaylistModal;
