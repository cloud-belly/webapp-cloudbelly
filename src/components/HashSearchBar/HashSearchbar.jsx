import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { changeSearch, submitSearch } from "../../store/actions/search";
import "./hashsearchbar.scss";

function HashSearchBar(props) {
  const { handleSubmit, inputVal, changeSearch } = props;
  // const [ input, setInput ] = useState("");

  // const inputChange = (e) => {
  //   setInput(e.target.value);
  // };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input type="text" onChange={changeSearch} value={inputVal} className="form-control" placeholder="#search" />
      <div className="input-group-append">
        <FaSearch />
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    inputVal: state.search.inputValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearch: (evt) => {
      dispatch(changeSearch(evt));
    },
    handleSubmit: (evt) => {
      evt.preventDefault();
      dispatch(submitSearch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HashSearchBar);
