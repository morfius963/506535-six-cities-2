import Operation from "../../actions/async-actions.js";
import createAPI from "../../../api.js";
import MockAdapter from "axios-mock-adapter";

describe(`load data test group`, () => {
  const onError = jest.fn();
  const api = createAPI(onError);
  const apiMock = new MockAdapter(api);

  it(`Should make a correct call to /questions`, () => {
    const questionLoader = Operation.loadHotels();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{city: {name: `Me`}}]);

    return questionLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_HOTELS`,
          payload: {
            hotels: [{city: {name: `Me`}}],
            isOffersLoading: false
          }
        });
      });
  });

  it(`Should make a correct call to /favorite`, () => {
    const favoriteLoader = Operation.loadFavoriteOffers();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{favorites: [123]}]);

    return favoriteLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `GET_FAVORITE_OFFERS`,
          payload: [{favorites: [123]}]
        });
      });
  });

  it(`Should make a correct call to /comments`, () => {
    const id = 0;
    const commentsLoader = Operation.loadComments(id);
    const dispatch = jest.fn();

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, [{comments: [123]}]);

    return commentsLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `GET_COMMENTS`,
          payload: [{comments: [123]}]
        });
      });
  });

  it(`Should call onError func with 401 status`, () => {
    const id = 0;
    const commentsLoader = Operation.loadComments(id);
    const dispatch = jest.fn();

    apiMock
      .onGet(`/comments/${id}`)
      .reply(401, [{comments: [123]}]);

    return commentsLoader(dispatch, null, api)
      .then(() => {
        expect(onError).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should correctly post data to /comments`, () => {
    const id = 0;
    const formResetCb = jest.fn();
    const commentsData = {
      rating: 4,
      comment: `2oijfiwerjiuwejr`
    };
    const commentsLoader = Operation.postComment(id, commentsData, formResetCb);
    const dispatch = jest.fn();

    apiMock
      .onPost(`/comments/${id}`, commentsData)
      .reply(200, [{comments: [123]}]);

    return commentsLoader(dispatch, null, api)
      .then(() => {
        expect(formResetCb).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `GET_COMMENTS`,
          payload: [{comments: [123]}]
        });
      });
  });

  it(`Should correctly post data to /login`, () => {
    const userData = {
      login: `morf@gmail.com`,
      password: `2oijfiwerjiuwejr`
    };
    const serverReply = {
      name: `morf`,
      avatarUrl: ``,
      isPro: true,
      email: `morf@gmail.com`
    };
    const onLogin = Operation.postUserLogin(userData, jest.fn());
    const dispatch = jest.fn();

    apiMock
      .onPost(`/login`, userData)
      .reply(200, serverReply);

    return onLogin(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `SING_IN`,
          payload: {
            name: serverReply.name,
            isPro: serverReply.isPro,
            email: serverReply.email,
            avatar: serverReply.avatarUrl,
            isAuthorizationRequired: false
          }
        });
      });
  });
});
