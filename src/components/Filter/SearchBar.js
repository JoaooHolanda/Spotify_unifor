import { React, useEffect, useState } from "react";
import { MDBInputGroup, MDBInput } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import List from "./List";
import "./filter.css";
import AddMusicModal from "./AddMusicModal/AddMusicModal";
import { useNavigate } from "react-router-dom";

function SearchBar({ musics }) {
  const [inputText, setInputText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchedUser = JSON.parse(localStorage.getItem("loginUser"));
    if (!!fetchedUser) {
      setUser(fetchedUser);
    }
  }, []);

  const paginacao = useNavigate();

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const onClickHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
    paginacao(0);
  };

  if (!!openModal) {
    return <AddMusicModal functionToClose={closeModalHandler} />;
  }

  return (
    <div className="main">
      <div className="search">
        <MDBInputGroup>
          <MDBInput label="Search" onChange={inputHandler} />
        </MDBInputGroup>
      </div>
      <List input={inputText} musics={musics} />
      {user && (
        <button id="add-music-btn" onClick={onClickHandler}>
          Adicionar músicas
        </button>
      )}
    </div>
  );
}

export default SearchBar;
