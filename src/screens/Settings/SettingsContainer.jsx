import React from "react";
import { Layout } from "../../components/Layout";
import Settings from "./Settings";

const SettingsContainer = (props) => {
  console.log("calling this ");
  const handleEditProfile = () => {
    // TODO: add action here
  };
  const handleHelp = () => {
    // TODO: add action here
  };
  const handleSwitchBusiness = () => {
    // TODO: add action here
  };
  const handleAbout = () => {
    // TODO: add action here
  };
  const handleInviteFriend = () => {
    // TODO: add action here
  };
  const handleLogout = () => {
    // TODO: add action here
  };
  return (
    <Layout>
      <Settings
        handleEditProfile={handleEditProfile}
        handleHelp={handleHelp}
        handleSwitchBusiness={handleSwitchBusiness}
        handleAbout={handleAbout}
        handleInviteFriend={handleInviteFriend}
        handleLogout={handleLogout}
      />
    </Layout>
  );
};

export default SettingsContainer;
