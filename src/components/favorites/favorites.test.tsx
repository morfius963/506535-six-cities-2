import * as React from "react";
import * as renderer from "react-test-renderer";
import Favorites from "./favorites";
import Footer from "../footer/footer";
import MainHeader from "../main-header/main-header";

jest.mock(`../main-header/main-header`, () => jest.fn().mockReturnValue(null));
jest.mock(`../footer/footer`, () => jest.fn().mockReturnValue(null));

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
