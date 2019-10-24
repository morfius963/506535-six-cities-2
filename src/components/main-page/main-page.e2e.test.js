import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from "./main-page.jsx";
import fixtureData from "../../mocks/offers.js";

Enzyme.configure({adapter: new Adapter()});

describe(`end to end test`, () => {
  it(`Click event correctly works on cards title`, () => {
    const clickHandler = jest.fn();
    const app = shallow(
        <MainPage
          places = {fixtureData}
          onTitleClick = {clickHandler}
        />
    );
    const cardTitle = app.find(`.place-card__name a`);

    cardTitle.forEach((card) => {
      card.simulate(`click`, card);
      expect(clickHandler).toHaveBeenCalledWith(card);
    });
  });
});
