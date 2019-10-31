import React from 'react';
import {shallow} from 'enzyme';
import OfferCard from "./offer-card.jsx";
import offersData from "../../__fixtures__/offers.js";

describe(`end to end test`, () => {
  it(`Callback func calls with correct data`, () => {
    const mouseEnterHandler = jest.fn();
    const app = shallow(
        <OfferCard
          offerData = {offersData[0]}
          id = {0}
          cardMouseEnterHandler = {mouseEnterHandler}
        />
    );
    const card = app.find(`.cities__place-card`).first();
    const evt = {
      currentTarget: {
        id: card.id
      }
    };

    card.simulate(`mouseenter`, evt);
    expect(mouseEnterHandler).toHaveBeenCalledWith(evt.currentTarget.id);
  });
});
