import * as React from "react";
import {sortValues} from "../../__fixtures__/offers.js";
import {Props} from "./interface";

const OffersSort = ({activeSort, isOpen, toggleSortHandler, clickSortHandler}: Props) => {
  const sortItemValues = sortValues;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleSortHandler}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`} onClick={clickSortHandler}>
        {sortItemValues.map((item, i) =>
          <li
            key={`${activeSort}-${isOpen}-${i}`}
            className={`places__option ${activeSort === item ? `places__option--active` : ``}`}
            tabIndex={0}
          >
            {item}
          </li>)}
      </ul>
    </form>
  );
};

export default OffersSort;
