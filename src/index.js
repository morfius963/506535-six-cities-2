import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/main-page/main-page.jsx";
import fixtureData from "./__fixtures__/data.js";

const init = () => {
  ReactDOM.render(
      <MainPage
        places = {fixtureData}
      />,
      document.querySelector(`#root`)
  );
};

init();
