import React from "react";
import leaflet from "leaflet";
import propTypes from "./prop-types.js";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.DEFAULT_ZOOM = 12;
    this._map = null;
    this._layerGroup = null;
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
    const {activeCard, offers} = this.props;
    const cityCoords = offers[0].city.location;
    const allOffersCoords = offers.map(({location}) => location.coords);

    this._layerGroup.clearLayers();
    this._map.setView(cityCoords, this.DEFAULT_ZOOM);
    this._createPins(allOffersCoords, activeCard);
  }

  _addMap(offers) {
    const {activeCard} = this.props;
    const cityCoords = offers[0].city.location;
    const allOffersCoords = offers.map(({location}) => location.coords);

    this._map = leaflet.map(`map`, {
      center: cityCoords,
      zoom: this.DEFAULT_ZOOM,
      zoomControl: false,
      marker: true
    });

    this._layerGroup = leaflet.layerGroup().addTo(this._map);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._map.setView(cityCoords, this.DEFAULT_ZOOM);
    this._createPins(allOffersCoords, activeCard);
  }

  _createPins(coordinates, id) {
    coordinates.forEach((offerCoord, i) => {
      const icon = leaflet.icon({
        iconUrl: `./img/pin${id === i ? `-active` : ``}.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker(offerCoord, {icon})
        .addTo(this._layerGroup);
    });
  }
}

Map.propTypes = propTypes;

export default Map;
