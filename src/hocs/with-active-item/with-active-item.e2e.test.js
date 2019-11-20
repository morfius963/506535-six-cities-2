import React from 'react';
import {mount} from 'enzyme';
import withActiveItem from "./with-active-item.jsx";
import OffersList from "../../components/offers-list/offers-list.jsx";
import Map from "../../components/map/map.jsx";
import OffersSort from "../../components/offers-sort/offers-sort.jsx";
import fixtureData from "../../__fixtures__/offers.js";

jest.mock(`../../components/map/map.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../components/offers-sort/offers-sort.jsx`, () => jest.fn().mockReturnValue(null));

const OffersListWrapped = withActiveItem(OffersList);

describe(`e2e test`, () => {
  it(`MouseEnter event should correctly change state`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const sortHandler = jest.fn();
    const props = {
      offers: activeOffers,
      activeCity: `Amsterdam`,
      sortOffers: sortHandler,
      activeSort: `Popular`,
      toggleFavoriteCard: jest.fn()
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
