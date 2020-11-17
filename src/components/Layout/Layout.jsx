import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCart, BiCalendar, BiLaugh } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { RiCameraLensLine } from "react-icons/ri";
import "./layout.scss";

const Layout = (props) => {
  const {
    handleClickSetting,
    handleClickCart,
    handleClickLive,
    handleClickPhoto,
    handleClickBook,
    handleClickMap,
    handlePost,
    handleSearch,
    searchValue,
    changeSearch,
    postValue,
    changePost
  } = props;

  return (
    <div id="layout-wrapper">
      <div id="layout-header">
        <div id="post-bar">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="What's on your mind"
            onChange={changePost}
            value={postValue}
          />
          <BiLaugh />
        </div>
        <div className="row p-b-10">
          <div className="col-sm-2 col-2 text-center">
            <AiOutlineSetting onClick={handleClickSetting} />
          </div>
          <div className="col-sm-4 col-4" onClick={handleClickLive}>
            <BsCameraVideo className="live-icon" /> <span className="action-title">LIVE VIDEO</span>
          </div>
          <div className="col-sm-4 col-4" onClick={handleClickPhoto}>
            <RiCameraLensLine className="photo-icon" /> <span className="action-title">PHOTO VIDEO</span>
          </div>
          <div className="col-sm-2 col-2">
            <BiCart onClick={handleClickCart} />
          </div>
        </div>
        <div className="row p-b-10">
          <div className="col-sm-2 col-2 text-center">
            <BiCalendar onClick={handleClickBook} />
          </div>
          <div className="col-sm-8 col-8">
            <input
              className="form-control shadow-none"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={changeSearch}
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="col-sm-2 col-2">
            <GrMapLocation onClick={handleClickMap} />
          </div>
        </div>
      </div>
      <div id="content-wrapper">{props.children}</div>
    </div>
  );
};

export default Layout;
