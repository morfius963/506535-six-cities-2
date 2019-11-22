import React from 'react';
import {shallow} from 'enzyme';
import OfferCard from "./offer-card.jsx";
import offersData from "../../__fixtures__/offers.js";

describe(`end to end test`, () => {
  it(`Callback func calls with correct data`, () => {
    const mouseEnterHandler = jest.fn();
    const favoriteClickHandler = jest.fn();
    const offer = offersData[0];
    const status = offer.isFavorite ? 0 : 1;
    const props = {
      offerData: offer,
      id: 0,
      onCardMouseEnter: mouseEnterHandler,
      onFavoriteCardToggle: favoriteClickHandler
    };

    const app = shallow(<OfferCard {...props} />);
    const card = app.find(`.cities__place-card`).at(0);
    const favoriteButton = app.find(`.place-card__bookmark-button`);
    const evt = {
      currentTarget: {
        id: card.prop(`id`)
      }
    };

    card.simulate(`mouseEnter`, evt);
    expect(mouseEnterHandler).toHaveBeenCalledWith(evt.currentTarget.id);

    favoriteButton.simulate(`click`);
    expect(favoriteClickHandler).toHaveBeenCalledWith(card.prop(`id`), status);
  });
});
