import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./hashsearchbar.scss";

function HashSearchBar(props) {
  const { handleSubmit } = props;
  const [ input, setInput ] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input type="text" onChange={inputChange} value={input} className="form-control" placeholder="#search" />
      <div className="input-group-append">
        <FaSearch />
      </div>
    </form>
  );
}

export default HashSearchBar;
