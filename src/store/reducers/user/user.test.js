import user from "./user.js";

describe(`Reducer test group`, () => {
  const initialAppState = {
    city: ``,
    activeSort: `Popular`,
    isAuthorizationRequired: false,
    email: ``,
    password: ``,
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
      isAuthorizationRequired: false,
      email: ``,
      password: ``,
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
      isAuthorizationRequired: false,
      email: ``,
      password: ``,
      name: ``,
      avatar: ``,
      isPro: false
    });
  });

  it(`Reducer should correctly switch authorization state`, () => {
    expect(user(
        initialAppState,
        {
          type: `REQUIRE_AUTHORIZATION`,
          payload: true
        }
    )).toEqual({
      city: ``,
      activeSort: `Popular`,
      isAuthorizationRequired: true,
      email: ``,
      password: ``,
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
            password: 12323
          }
        }
    )).toEqual({
      city: ``,
      activeSort: `Popular`,
      isAuthorizationRequired: false,
      email: `morf@gmail.com`,
      password: 12323,
      name: ``,
      avatar: ``,
      isPro: false
    });
  });

  it(`Reducer should correctly set user data`, () => {
    expect(user(
        initialAppState,
        {
          type: `SET_USER_DATA`,
          payload: {
            name: `Vitalii`,
            avatar: `./img/1.png`,
            isPro: true
          }
        }
    )).toEqual({
      city: ``,
      activeSort: `Popular`,
      isAuthorizationRequired: false,
      email: ``,
      password: ``,
      name: `Vitalii`,
      avatar: `./img/1.png`,
      isPro: true
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
