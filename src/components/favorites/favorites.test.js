import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";
import Footer from "../footer/footer.jsx";
import MainHeader from "../main-header/main-header.jsx";

jest.mock(`../main-header/main-header.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../footer/footer.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      favoriteOffers: [],
      userData: {
        email: `morf@gmail.com`
      },
      isAuthorizationRequired: false,
      onFavoriteCardToggle: jest.fn(),
      onFavoriteOffersLoad: jest.fn()
    };

    const tree = renderer
      .create(<Favorites {...props} />)
      .toJSON();

    expect(MainHeader).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
