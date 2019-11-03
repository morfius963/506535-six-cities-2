import React from "react";
import {mount} from "enzyme";
import toJson from 'enzyme-to-json';
import Map from "./map.jsx";
import fixtureData from "../../__fixtures__/offers.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const div = global.document.createElement(`div`);
    global.document.body.appendChild(div);

    const component = mount(<Map offers = {activeOffers} />, {attachTo: div});
    expect(toJson(component)).toMatchSnapshot();
  });
});
