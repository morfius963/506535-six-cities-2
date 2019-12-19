import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Map from "../map/map";
import OfferCard from "../offer-card/offer-card";
import OfferDetails from "./offer-details";
import MainHeader from "../main-header/main-header";
import CommentForm from "../comment-form/comment-form";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../map/map`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offer-card/offer-card`, () => jest.fn().mockReturnValue(null));
jest.mock(`../main-header/main-header`, () => jest.fn().mockReturnValue(null));
jest.mock(`../comment-form/comment-form`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  const appData = {
    offers: fixtureData,
    comments: [],
  };
  const user = {
    isAuthorizationRequired: false,
  };

  const mockStore = configureStore([]);
  const store = mockStore({
    appData,
    user
  });

  it(`Component correctly renders`, () => {
    const props = {
      location: {
        pathname: `/offer/2`
      },
      email: `Vitalii`,
      onFavoriteCardToggle: jest.fn(),
      onCommentsLoad: jest.fn(),
      onReviewSubmit: jest.fn()
    };

    const tree = renderer
      .create(
            <Provider store={store}>
              <OfferDetails {...props} />
            </Provider>
        )
      .toJSON();

    expect(Map).toHaveBeenCalled();
    expect(OfferCard).toHaveBeenCalled();
    expect(MainHeader).toHaveBeenCalled();
    expect(CommentForm).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
