import * as React from 'react';
import {mount} from 'enzyme';

import withActiveItem from "./with-active-item";
import {OffersList} from "../../components/offers-list/offers-list";
import Map from "../../components/map/map";
import OffersSort from "../../components/offers-sort/offers-sort";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../../components/map/map`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../components/offers-sort/offers-sort`, () => jest.fn().mockReturnValue(null));
jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

const OffersListWrapped = withActiveItem(OffersList);

describe(`e2e test`, () => {
  it(`MouseEnter event should correctly change state`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const sortHandler = jest.fn();
    const props = {
      offers: activeOffers,
      city: `Amsterdam`,
      activeSort: `Popular`,
      onOffersSort: sortHandler,
      onFavoriteCardToggle: jest.fn()
    };

    const component = mount(<OffersListWrapped {...props} />);

    const cards = component.find(`.cities__place-card`);
    const card1 = cards.at(0);
    const card2 = cards.at(1);

    expect(Map).toHaveBeenCalled();
    expect(OffersSort).toHaveBeenCalled();

    card1.simulate(`mouseEnter`);
    expect(component.state().activeCardId).toEqual(0);

    card2.simulate(`mouseEnter`);
    expect(component.state().activeCardId).toEqual(1);
  });
});
