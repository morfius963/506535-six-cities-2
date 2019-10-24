const makeMockOffer = () => ({
  title: `Beautiful &amp; luxurious apartment at great location`,
  isPremium: true,
  price: 250,
  rating: 4.5,
  type: `apartment`,
  previewImage: `img/apartment-02.jpg`
});

export default new Array(4).fill(``).map(makeMockOffer);
