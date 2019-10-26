import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./offer-card.jsx";
import offersData from "../../mocks/offers.js";

Enzyme.configure({adapter: new Adapter()});

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
