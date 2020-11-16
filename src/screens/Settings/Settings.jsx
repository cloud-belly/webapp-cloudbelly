import React from "react";
import { FaUser } from "react-icons/fa";
import { BsSlash, BsGearWide } from "react-icons/bs";
import { IoMdHelp, IoMdStats, IoMdShare } from "react-icons/io";
import "./settings.scss";

const Settings = ({
  handleEditProfile,
  handleHelp,
  handleSwitchBusiness,
  handleAbout,
  handleInviteFriend,
  handleLogout
}) => {
  return (
    <div id="settings-container">
      <div className="d-flex" onClick={handleEditProfile}>
        <div className="icon-wrapper">
          <FaUser />
        </div>
        <span className="title">Edit profile</span>
      </div>
      <div className="d-flex" onClick={handleHelp}>
        <div className="icon-wrapper">
          <IoMdHelp />
        </div>
        <span className="title">Help</span>
      </div>
      <div className="d-flex" onClick={handleSwitchBusiness}>
        <div className="icon-wrapper">
          <IoMdStats />
        </div>
        <span className="title">Switch to business</span>
      </div>
      <div className="d-flex" onClick={handleAbout}>
        <div className="icon-wrapper">
          <BsSlash />
        </div>
        <span className="title">About</span>
      </div>
      <div className="d-flex" onClick={handleInviteFriend}>
        <div className="icon-wrapper">
          <IoMdShare />
        </div>
        <span className="title">Invite a friend</span>
      </div>
      <div className="d-flex" onClick={handleLogout}>
        <div className="icon-wrapper">
          <BsGearWide />
        </div>
        <span className="title">Log out</span>
      </div>
    </div>
  );
};

export default Settings;
