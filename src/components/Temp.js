import React, { useEffect, useState } from "react";
require("dotenv").config();

const Temp = () => {
  const [isSignedIn, setSignedIn] = useState(null);
  useEffect(() => {
    const login = () => {
      window.gapi.load("client:auth2", async () => {
        const wab = await window.gapi.client.init({
          clientId: process.env.REACT_APP_API_KEY,
          scope: "email",
        });
        console.log(wab);
      });
    };
    login();
  }, []);
  return <div>signed In</div>;
};
export default Temp;
