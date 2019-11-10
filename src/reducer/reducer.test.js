import {reducer} from "./reducer.js";
import offersList from "../__fixtures__/offers.js";

describe(`Reducer test group`, () => {
  it(`Reducer should correctly switch city`, () => {
    expect(reducer(
        {
          city: `Amsterdam`,
          offers: [],
          activeOffers: []
        },
        {
          type: `SWITCH_CITY`,
          payload: {
            city: `Hamburg`,
            defaultSort: `Top rated`
          }
        }
    )).toEqual({
      city: `Hamburg`,
      offers: [],
      activeOffers: [],
      activeSort: `Top rated`
    });
  });

  it(`Reducer should correctly works with incorrect data`, () => {
    const expectedOffersList = offersList.filter(({city}) => city.name === `Amsterdam`);
    expect(reducer(
        undefined,
        {
          type: `qweqweqw`,
          payload: `eqwe`
        }
    )).toEqual({
      city: `Amsterdam`,
      offers: offersList,
      activeOffers: expectedOffersList,
      activeSort: `Popular`
    });
  });
});
