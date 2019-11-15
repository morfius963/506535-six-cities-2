import user from "./user.js";

describe(`Reducer test group`, () => {
  it(`Reducer should correctly switch city`, () => {
    expect(user(
        {
          city: `Amsterdam`,
          activeSort: `Popular`
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
      activeSort: `Top rated`
    });
  });

  it(`Reducer should correctly switch sort offers type`, () => {
    expect(user(
        {
          city: `Amsterdam`,
          activeSort: `Popular`
        },
        {
          type: `SORT_OFFERS`,
          payload: `Top rated first`
        }
    )).toEqual({
      city: `Amsterdam`,
      activeSort: `Top rated first`
    });
  });

  it(`Reducer should correctly works with incorrect data`, () => {
    expect(user(
        undefined,
        {
          type: `qweqweqw`,
          payload: `eqwe`
        }
    )).toEqual({
      city: ``,
      activeSort: `Popular`
    });
  });
});
