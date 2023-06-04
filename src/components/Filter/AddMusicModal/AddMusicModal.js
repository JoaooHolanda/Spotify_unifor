import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../../Input";
import { insertMusicIntoPlaylist } from "../../../util/http";
import { useParams } from "react-router-dom";
import "./AddMusicModal.css";

const AddMusicModal = ({ functionToClose }) => {
  const [fetchedMusics, setFetchedMusics] = useState([]);
  const [musics, setMusics] = useState([]);
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loginUser"));
    if (storedUser) {
      setUser(storedUser);
    }
    axios.get("http://localhost:3000/musicas").then((res) => {
      setFetchedMusics(res.data.data);
    });
  }, []);

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

    insertMusicIntoPlaylist(user._id, id - 1, musics);

    document.getElementById("add-music-form").reset();
    functionToClose();
  }

  return (
    <div className="content">
      <form onSubmit={handleSubmit} id="add-music-form">
        <Input
          name="musics"
          onChange={handleMusicSelect}
          type="checkbox"
          options={fetchedMusics.map((music, index) => {
            return { value: index, label: music.title };
          })}
          label="Quais músicas você deseja adicionar?"
        />
        <div id="buttons-container">
          <button className="button-cancel" onClick={functionToClose}>
            Cancelar
          </button>
          <button type="submit" className="button-submit">
            Adicionar Músicas
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMusicModal;
