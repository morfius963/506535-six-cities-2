import * as React from "react";
import * as renderer from "react-test-renderer";
import Map from "./map";
import fixtureData from "../../__fixtures__/offers";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const props = {
      offers: activeOffers,
      activeCard: -1,
      isInOfferDetails: false
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
