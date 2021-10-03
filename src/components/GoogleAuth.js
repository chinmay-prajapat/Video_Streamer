import React, { Component } from "react";
require("dotenv").config();
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_API_KEY,
        scope: "email",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}
export default GoogleAuth;
