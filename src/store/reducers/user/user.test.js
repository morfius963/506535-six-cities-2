import user from "./user.js";

describe(`Reducer test group`, () => {
  const initialAppState = {
    city: ``,
    activeSort: `Popular`,
    isAuthorizationRequired: true,
    email: ``,
    name: ``,
    avatar: ``,
    isPro: false
  };

  it(`Reducer should correctly switch city`, () => {
    expect(user(
        initialAppState,
        {
          type: `SWITCH_CITY`,
          payload: {
            city: `Hamburg`,
            defaultSort: `Top rated`
          }
        }
    )).toEqual({
      city: `Hamburg`,
      activeSort: `Top rated`,
      isAuthorizationRequired: true,
      email: ``,
      name: ``,
      avatar: ``,
      isPro: false
    });
  });

  it(`Reducer should correctly switch sort offers type`, () => {
    expect(user(
        initialAppState,
        {
          type: `SORT_OFFERS`,
          payload: `Top rated first`
        }
    )).toEqual({
      city: ``,
      activeSort: `Top rated first`,
      isAuthorizationRequired: true,
      email: ``,
      name: ``,
      avatar: ``,
      isPro: false
    });
  });

  it(`Reducer should correctly set user email and password`, () => {
    expect(user(
        initialAppState,
        {
          type: `SING_IN`,
          payload: {
            email: `morf@gmail.com`,
            name: `Vitalii`,
            isPro: true,
            avatar: `/img/1.png`,
            isAuthorizationRequired: false
          }
        }
    )).toEqual({
      city: ``,
      activeSort: `Popular`,
      email: `morf@gmail.com`,
      name: `Vitalii`,
      isPro: true,
      avatar: `/img/1.png`,
      isAuthorizationRequired: false,
    });
  });

  it(`Reducer should correctly works with incorrect data`, () => {
    expect(user(
        undefined,
        {
          type: `qweqweqw`,
          payload: `eqwe`
        }
    )).toEqual(initialAppState);
  });
});
