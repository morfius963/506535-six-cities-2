import * as React from "react";
import {useCallback} from "react";
import {Props} from "./interface";

const Cities = ({cities, activeCity, onCityClick}: Props) => {
  const cityClickHandler = useCallback(
      (evt) => {
        const target = evt.target;

        if (target.tagName.toLowerCase() !== `a` && target.tagName.toLowerCase() !== `span`) {
          return;
        }

        onCityClick(target.textContent);
      },
      [onCityClick]
  );

  return (
    <section className="locations container" onClick={cityClickHandler}>
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <li key={`${city}-${i}`} className="locations__item">
          <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`} href="#">
            <span>{city}</span>
          </a>
        </li>)}
      </ul>
    </section>
  );
};

export default Cities;
