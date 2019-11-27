import * as React from "react";
import * as leaflet from "leaflet";
import {Props} from "./interface";

class Map extends React.PureComponent<Props, null> {
  DEFAULT_ZOOM: number;
  _layerGroup: any;
  _map: any;

  constructor(props) {
    super(props);

    this.DEFAULT_ZOOM = 12;
    this._map = null;
    this._layerGroup = null;
  }

  render() {
    return (
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    );
  }

  componentDidMount() {
    const {offers} = this.props;

    this._addMap(offers);
  }

  componentDidUpdate() {
    const {activeCard, offers} = this.props;

    if (offers.length > 0) {
      const {latitude, longitude} = offers[0].city.location;
      const cityCoords = [latitude, longitude];
      const allOffersCoords = offers.map(({location}) => [location.latitude, location.longitude]);

      this._layerGroup.clearLayers();
      this._map.setView(cityCoords, this.DEFAULT_ZOOM);
      this._createPins(allOffersCoords, activeCard);
    }
  }

  _addMap(offers) {
    const {activeCard} = this.props;
    const {latitude, longitude} = offers[0].city.location;
    const cityCoords = [latitude, longitude];
    const allOffersCoords = offers.map(({location}) => [location.latitude, location.longitude]);

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
    const {offers, isInOfferDetails} = this.props;

    const cardsID = offers.map((offer) => offer.id);
    const pinImgPath = isInOfferDetails ? `../` : `./`;

    coordinates.forEach((offerCoord, i) => {
      const icon = leaflet.icon({
        iconUrl: `${pinImgPath}img/pin${id === cardsID[i] ? `-active` : ``}.svg`,
        iconSize: [30, 30]
      });

      leaflet
        .marker(offerCoord, {icon})
        .addTo(this._layerGroup);
    });
  }
}

export default Map;
