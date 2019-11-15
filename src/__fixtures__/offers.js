const offers = [
  {
    city: `Amsterdam`,
    location: [52.38333, 4.9],
    offersCoords: [
      [52.3909553943508, 4.85309666406198],
      [52.369553943508, 4.85309666406198],
      [52.3909553943508, 4.929309666406198],
      [52.3809553943508, 4.939309666406198]
    ]
  },
  {
    city: `Paris`,
    location: [48.864716, 2.349014],
    offersCoords: [
      [48.854716, 2.339014],
      [48.874716, 2.399014],
      [48.844716, 2.319014]
    ]
  },
  {
    city: `Brussels`,
    location: [50.85045, 4.34878],
    offersCoords: [
      [50.81045, 4.30878],
      [50.83045, 4.39878],
      [50.87045, 4.32878],
    ]
  },
  {
    city: `Hamburg`,
    location: [53.551086, 9.993682],
    offersCoords: [
      [53.541086, 9.983682],
      [53.531086, 9.973682],
      [53.521086, 9.963682],
      [53.561086, 9.953682],
      [53.571086, 9.943682],
    ]
  },
  {
    city: `Dusseldorf`,
    location: [51.233334, 6.783333],
    offersCoords: [
      [51.243334, 6.773333],
      [51.253334, 6.763333],
      [51.263334, 6.753333],
      [51.273334, 6.743333]
    ]
  }
];

const makeMockOffer = (city, cityCoords, offersCoords, i) => ({
  id: i,
  city: {
    name: city,
    location: {
      latitude: cityCoords[0],
      longitude: cityCoords[1],
      zoom: 10
    }
  },
  title: `Beautiful &amp; luxurious apartment at great location`,
  isPremium: true,
  price: i * 1000 + 100,
  rating: i / 2,
  type: `apartment`,
  previewImage: `img/apartment-02.jpg`,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
  isFavorite: false,
  bedrooms: 1,
  maxAdults: 3,
  goods: [`1`, `2`, `3`],
  description: `Beautiful &amp; luxurious apartment at great location`,
  host: {
    id: i,
    isPro: true,
    name: `Me`,
    avatar: `img/apartment-02.jpg`
  },
  location: {
    latitude: offersCoords[0],
    longitude: offersCoords[1],
    zoom: 10
  }
});

export const sortValues = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

export default offers.reduce((acc, {city, location, offersCoords}) => {
  const newOffers = offersCoords.map((coord, i) => makeMockOffer(city, location, coord, i));

  return [...acc, ...newOffers];
}, []);
