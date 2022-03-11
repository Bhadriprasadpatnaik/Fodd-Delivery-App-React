import React from "react";
import ReactDom from "react-dom";
import AudioContextProvider from "./Apis/AudioContext";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
ReactDom.render(
  <AudioContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AudioContextProvider>,
  document.getElementById("root")
);
