import React, { useState } from "react";
import "./hash-searchbar.scss";

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
        <i className="fa fa-search"></i>
      </div>
    </form>
  );
}

export default HashSearchBar;
