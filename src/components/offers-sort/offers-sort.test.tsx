import * as React from "react";
import * as renderer from "react-test-renderer";
import OffersSort from "./offers-sort";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      activeSort: `Popular`,
      isOpen: false,
      toggleSortHandler: jest.fn(),
      clickSortHandler: jest.fn()
    };

    const tree = renderer
      .create(<OffersSort {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
