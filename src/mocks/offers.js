const makeMockOffer = () => ({
  title: [`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`][Math.floor(Math.random() * 4)],
  isPremium: Boolean(Math.round(Math.random())),
  price: 250,
  rating: Number((Math.random() * 5).toFixed(1)),
  type: [`apartment`, `private room`][Math.floor(Math.random() * 2)],
  previewImage: `img/apartment-0${Math.ceil(Math.random() * 3)}.jpg`
});

export default new Array(4).fill(``).map(makeMockOffer);
