import React, { useState } from "react";
import { useHistory } from "react-router";
import Layout from "./Layout";

const LayoutContainer = (props) => {
  const history = useHistory();
  const [ searchValue, setSearchValue ] = useState("");
  const [ postValue, setPostValue ] = useState("");

  const handleClickSetting = () => {
    history.push("/settings");
  };
  const handleClickCart = () => {
    history.push("/cart");
  };

  const handleClickLive = () => {
    // TODO: add live action
  };

  const handleClickPhoto = () => {
    // TODO: add photo action
  };

  const handleClickBook = () => {
    // TODO: add action here
  };

  const handleClickMap = () => {
    // TODO: add action here
  };

  const handlePost = () => {
    // TODO: add action here
  };
  const handleSearch = () => {
    // TODO: add action here
  };
  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const changePost = (e) => {
    setPostValue(e.target.value);
  };
  return (
    <Layout
      handleClickSetting={handleClickSetting}
      handleClickCart={handleClickCart}
      handleClickLive={handleClickLive}
      handleClickPhoto={handleClickPhoto}
      handleClickBook={handleClickBook}
      handleClickMap={handleClickMap}
      handlePost={handlePost}
      handleSearch={handleSearch}
      searchValue={searchValue}
      changeSearch={changeSearch}
      postValue={postValue}
      changePost={changePost}
    >
      {props.children}
    </Layout>
  );
};

export default LayoutContainer;
