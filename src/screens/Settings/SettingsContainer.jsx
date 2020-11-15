import React from "react";
import { Layout } from "../../components/Layout";
import Settings from "./Settings";

const SettingsContainer = (props) => {
  console.log("calling this ");

  return (
    <Layout>
      <Settings />
    </Layout>
  );
};

export default SettingsContainer;
