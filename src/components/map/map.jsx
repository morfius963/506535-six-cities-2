import React from "react";
import leaflet from "leaflet";
import propTypes from "./prop-types.js";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.DEFAULT_ZOOM = 12;
    this.CITY_COORDS = [52.38333, 4.9];
  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const {offers} = this.props;

    const allOffersCoords = offers.map(({location}) => location.coords);

    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });
    const map = leaflet.map(`map`, {
      center: this.CITY_COORDS,
      zoom: this.DEFAULT_ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(this.CITY_COORDS, this.DEFAULT_ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    allOffersCoords.forEach((offerCoord) => {
      leaflet
        .marker(offerCoord, {icon})
        .addTo(map);
    });
  }
}

Map.propTypes = propTypes;

export default Map;
