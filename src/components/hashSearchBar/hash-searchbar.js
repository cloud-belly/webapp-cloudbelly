import React, { useState } from "react";
import "./hash-searchbar.scss";
import { getRecord } from "../../store/server/index";
import HashTagSearchData from "./hashTagSearchData";
function HashSearchBar() {
  const [ input, setInput ] = useState("");

  const [ data, setData ] = useState([]);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const endPoint = "";

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await getRecord(`${endPoint}`, { params: { q: input } });
    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data);
    setData(data);
  };

  return (
    <form className="input-group" onSubmit={fetchData}>
      <input type="text" onChange={inputChange} value={input} className="form-control" placeholder="#search" />
      <div className="input-group-append">
        <i className="fa fa-search"></i>
      </div>
      {/* <HashTagSearchData data={data}/>     */}
    </form>
  );
}

export default HashSearchBar;
