import { React, useState } from "react";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import List from "./List";
import './filter.css'


function SearchBar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <div className="search">
      <MDBInputGroup>
      <MDBInput label='Search' onChange={inputHandler}/>
    </MDBInputGroup>



      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchBar;
