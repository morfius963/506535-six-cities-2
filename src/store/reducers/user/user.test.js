import user from "./user.js";

describe(`Reducer test group`, () => {
  const initialAppState = {
    isAuthorizationRequired: true,
    email: ``,
    name: ``,
    avatar: ``,
    isPro: false
  };

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
