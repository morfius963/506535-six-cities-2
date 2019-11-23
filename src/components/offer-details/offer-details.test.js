import React from "react";
import renderer from "react-test-renderer";

import Map from "../map/map.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import OfferDetails from "./offer-details.jsx";
import MainHeader from "../main-header/main-header.jsx";
import CommentList from "../comments-list/comments-list.jsx";
import CommentForm from "../comment-form/comment-form.jsx";
import fixtureData from "../../__fixtures__/offers.js";

jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offer-card/offer-card.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../main-header/main-header.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../comments-list/comments-list.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../comment-form/comment-form.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      offers: fixtureData,
      location: {
        state: {
          id: 0
        }
      },
      userData: {
        email: `Vitalii`
      },
      isAuthorizationRequired: true,
      onFavoriteCardToggle: jest.fn()
    };

    const tree = renderer
      .create(<OfferDetails {...props} />)
      .toJSON();

    expect(Map).toHaveBeenCalled();
    expect(OfferCard).toHaveBeenCalled();
    expect(MainHeader).toHaveBeenCalled();
    expect(CommentList).toHaveBeenCalled();
    expect(CommentForm).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
