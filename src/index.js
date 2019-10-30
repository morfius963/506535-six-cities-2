import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import fixtureData from "./__fixtures__/offers.js";

const init = () => {
  ReactDOM.render(
      <App
        places = {fixtureData}
      />,
      document.querySelector(`#root`)
  );
};

init();
