import filters from "./filters";

describe(`Reducer test group`, () => {
  const initialAppState = {
    city: ``,
    activeSort: `Popular`,
    priceRange: [-Infinity, Infinity],
    rating: `5.0`
  };

  it(`Reducer should correctly switch city`, () => {
    expect(filters(
        initialAppState,
        {
          type: `SWITCH_CITY`,
          payload: {
            city: `Hamburg`
          }
        }
    )).toEqual({
      city: `Hamburg`,
      activeSort: `Popular`,
      priceRange: [-Infinity, Infinity],
      rating: `5.0`
    });
  });

  it(`Reducer should correctly switch sort offers type`, () => {
    expect(filters(
        initialAppState,
        {
          type: `SORT_OFFERS`,
          payload: `Top rated first`
        }
    )).toEqual({
      city: ``,
      activeSort: `Top rated first`,
      priceRange: [-Infinity, Infinity],
      rating: `5.0`
    });
  });

  it(`Reducer should correctly works with incorrect data`, () => {
    expect(filters(
        undefined,
        {
          type: `qweqweqw`,
          payload: `eqwe`
        }
    )).toEqual(initialAppState);
  });
});
