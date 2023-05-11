import { useEffect, useState } from "react";
import Input from "../../Input";
import "./styles.scss";
import axios from "axios";

const PlaylistModal = ({ functionToCloseModal, user }) => {
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [musics, setMusics] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    setUserPlaylists(user.playlists);
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setPlaylistInfo((info) => ({ ...info, [name]: value }));
  }

  function handleMusicSelect(e) {
    if (e.target.checked === true) {
      setMusics((prevState) => [...prevState, e.target.value]);
    } else {
      setMusics(
        musics.filter((music) => {
          return music !== e.target.value;
        })
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault(false);

    const playlists = [...userPlaylists, { ...playlistInfo, musics }];

    let body = {
      ...user,
      playlists,
    };

    console.log(body);
    axios
      .put(`http://localhost:3000/users/${user.id}/`, body)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("loginUser");
        localStorage.setItem("loginUser", JSON.stringify(body));
      })
      .catch((err) => {
        console.log("err", err);
      });

    document.getElementById("create-playlist-form").reset();
    // alert("Playlist criada com sucesso!");
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
            name="source"
            onChange={handleChange}
            label="URL da Imagem"
            placeholder="Insira a URL da imagem."
            required
          />
          <Input
            name="description"
            onChange={handleChange}
            label="Descrição"
            placeholder="Insira uma breve descrição da Playlist."
            required
          />
          <Input
            name="musics"
            onChange={handleMusicSelect}
            type="checkbox"
            options={[
              { value: "Mockinbird - Eminem", label: "Mockinbird" },
              {
                value: "Amor de Chocolate - Naldo Benny",
                label: "Amor de Chocolate",
              },
              {
                value: "Sing for the Moment - Eminem",
                label: "Sing for the Moment",
              },
              { value: "Monster - Eminem", label: "Monster" },
              { value: "Vampiro - Matuê", label: "Vampiro" },
              { value: "Quer Voar - Matuê", label: "Quer Voar" },
            ]}
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
