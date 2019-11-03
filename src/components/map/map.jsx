import React from "react";
import leaflet from "leaflet";
import propTypes from "./prop-types.js";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.DEFAULT_ZOOM = 12;
    this._map = null;
  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const {offers} = this.props;

    this._addMap(offers);
  }

  componentDidUpdate() {
    const {offers} = this.props;

    this._map.remove();
    this._addMap(offers);
  }

  _addMap(offers) {
    const allOffersCoords = offers.map(({location}) => location.coords);
    const cityCoords = offers[0].city.location;

    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });

    this._map = leaflet.map(`map`, {
      center: cityCoords,
      zoom: this.DEFAULT_ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(cityCoords, this.DEFAULT_ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    allOffersCoords.forEach((offerCoord) => {
      leaflet
        .marker(offerCoord, {icon})
        .addTo(this._map);
    });
  }
}

Map.propTypes = propTypes;

export default Map;
