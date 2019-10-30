const coordinates = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

const makeMockOffer = (coords) => ({
  title: `Beautiful &amp; luxurious apartment at great location`,
  isPremium: true,
  price: 250,
  rating: 4.5,
  type: `apartment`,
  previewImage: `img/apartment-02.jpg`,
  location: {
    coords,
    zoom: 12
  }
});

export default coordinates.map((coord) => makeMockOffer(coord));
