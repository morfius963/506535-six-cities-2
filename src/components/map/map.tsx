import * as React from "react";
import * as leaflet from "leaflet";
import {connect} from "react-redux";
import {Props} from "./interface";
import history from "../../history";
import {debounce, clearInterval} from "../../debounce";

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

    if (offers.length > 0) {
      this._addMap(offers);
    }
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
    const {offers, offersRefs} = this.props;

    if (offersRefs.length === 0) {
      return;
    }
  
    const cardsID = offers.map((offer) => offer.id);

    coordinates.forEach((offerCoord, i) => {
      const icon = leaflet.icon({
        iconUrl: `img/pin${id === cardsID[i] ? `-active` : ``}.svg`,
        iconSize: [30, 30]
      });

      const handleIconMouseMove = (evt) => {
        if (id === cardsID[i]) {
          return;
        }

        const activeOffer = offersRefs.find(({id}) => id === cardsID[i]);
        const activeOfferRef = activeOffer.ref.current;

        let offerOpacityValue = `1`;
        let iconImgUrl = `img/pin.svg`;

        if (evt.type === `mouseover`) {
          if (offers.length > 4) {
            debounce(() => activeOfferRef.scrollIntoView({behavior: `smooth`, block: `start`}))
          }

          iconImgUrl = `img/pin-active.svg`;
          offerOpacityValue = `0.6`;
        }

        icon.options.iconUrl = iconImgUrl;
        evt.target.setIcon(icon);
        activeOfferRef.style.opacity = offerOpacityValue;
      };

      const handleIconClick = () => {
        history.push(`/offer/${cardsID[i]}`);
        window.scrollTo(0, 0);
      };

      const mouseOutIconCb = (evt) => {
        handleIconMouseMove(evt);
        clearInterval();
      }

      leaflet
        .marker(offerCoord, {icon})
        .on(`mouseover`, handleIconMouseMove)
        .on(`mouseout`, mouseOutIconCb)
        .on(`click`, handleIconClick)
        .addTo(this._layerGroup);
    });
  }
}

const mapStateToProps = (state) => ({
  offersRefs: state.appData.offersRefs
});

export {Map};

export default connect(mapStateToProps, null)(Map);
