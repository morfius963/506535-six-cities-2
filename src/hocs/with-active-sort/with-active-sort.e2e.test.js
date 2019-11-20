import React from 'react';
import {mount} from 'enzyme';
import withActiveSort from "./with-active-sort.jsx";
import OffersSort from "../../components/offers-sort/offers-sort.jsx";

const OffersSortWrapped = withActiveSort(OffersSort);

describe(`e2e test`, () => {
  it(`Component should correctly switch sort value after click`, () => {
    const sortHandler = jest.fn();
    const props = {
      activeCity: `Amsterdam`,
      sortOffers: sortHandler,
      activeSort: `Popular`
    };
    const evt = {
      target: {
        textContent: `Top rated first`
      }
    };

    const component = mount(<OffersSortWrapped {...props} />);

    const form = component.find(`.places__options`);

    form.simulate(`click`, evt);
    expect(component.props().sortOffers).toHaveBeenCalledWith(`Top rated first`);
    expect(component.state().isOpen).toEqual(false);
  });
});
