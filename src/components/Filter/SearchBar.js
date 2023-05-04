import { React, useState } from "react";
import List from "./List";
import "./App.css";

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
        <input
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"></input>
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchBar;
