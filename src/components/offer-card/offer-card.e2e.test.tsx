import * as React from 'react';
import {shallow} from 'enzyme';
import OfferCard from "./offer-card";
import offersData from "../../__fixtures__/offers";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

describe(`end to end test`, () => {
  it(`Callback func calls with correct data`, () => {
    const mouseEnterHandler = jest.fn();
    const favoriteClickHandler = jest.fn();
    const offer = offersData[0];
    const status = offer.isFavorite ? 0 : 1;
    const props = {
      offerData: offer,
      onCardMouseEnter: mouseEnterHandler,
      onFavoriteCardToggle: favoriteClickHandler,
      isInFavoriteList: false
    };

    const app = shallow(<OfferCard {...props} />);
    const card = app.find(`.cities__place-card`).at(0);
    const favoriteButton = app.find(`.place-card__bookmark-button`);
    const evt = {
      currentTarget: {
        id: Number(card.prop(`id`))
      }
    };

    card.simulate(`mouseEnter`, evt);
    expect(mouseEnterHandler).toHaveBeenCalledWith(evt.currentTarget.id);

    favoriteButton.simulate(`click`);
    expect(favoriteClickHandler).toHaveBeenCalledWith(evt.currentTarget.id, status);
  });
});
