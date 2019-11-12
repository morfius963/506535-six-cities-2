import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import fixtureData from "../../__fixtures__/offers.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const props = {
      offers: activeOffers,
      activeCard: -1
    };
    const div = document.createElement(`div`);

    div.id = `map`;
    document.body.appendChild(div);

    const component = renderer
      .create(<Map {...props} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
