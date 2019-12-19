import * as React from "react";
import {connect} from "react-redux";
import ActionCreator from "../../store/actions/action-creator";
import {Props} from "./interface";

const MainEmpty = ({city, resetCityFilters}: Props) => {
  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              We could not find any property availbale at the moment in {city}. 
              <button onClick={resetCityFilters}>Click</button> to reset filters for this city.
            </p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  resetCityFilters: () => ActionCreator.resetCityFilters()
};

export {MainEmpty};

export default connect(null, mapDispatchToProps)(MainEmpty);
