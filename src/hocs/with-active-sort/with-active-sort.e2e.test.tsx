import * as React from 'react';
import {mount} from 'enzyme';
import withActiveSort from "./with-active-sort";
import OffersSort from "../../components/offers-sort/offers-sort";

const OffersSortWrapped = withActiveSort(OffersSort);

describe(`e2e test`, () => {
  it(`Component should correctly switch sort value after click`, () => {
    const sortHandler = jest.fn();
    const props = {
      activeCity: `Amsterdam`,
      activeSort: `Popular`,
      onOffersSort: sortHandler
    };
    const evt = {
      target: {
        textContent: `Top rated first`
      }
    };

    const component = mount(<OffersSortWrapped {...props} />);

    const form = component.find(`.places__options`);

    form.simulate(`click`, evt);
    expect(sortHandler).toHaveBeenCalledWith(`Top rated first`);
    expect(component.state().isOpen).toEqual(false);
  });
});
