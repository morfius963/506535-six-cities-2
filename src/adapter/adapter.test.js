import adapter from "./adapter.js";

describe(`Addapter test group`, () => {
  const startObj = {
    id: 1,
    city: {
      [`name_a`]: `Amsterdam`,
      [`location_b`]: {
        [`latitude_c`]: 52.370216,
        [`longitude__23_3`]: 4.895168
      }
    },
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      [`is_pro`]: true,
      name: `Angelina`,
      [`avatar_url`]: `img/1.png`
    },
  };
  const expectedObj = {
    id: 1,
    city: {
      nameA: `Amsterdam`,
      locationB: {
        latitudeC: 52.370216,
        longitude233: 4.895168
      }
    },
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `img/1.png`
    },
  };

  it(`adapter should correctly change object keys`, () => {
    expect(adapter(startObj)).toEqual(expectedObj);
  });
});
