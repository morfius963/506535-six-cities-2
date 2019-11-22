import React from "react";
import PropTypes from "prop-types";
import MainHeader from "../main-header/main-header.jsx";

const SingIn = ({city, userInputHandler, formSubmitHandler}) => {
  return (
    <div className="page page--gray page--login">

      <MainHeader userData={{}} requireAuthorization={true} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={formSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  onChange={userInputHandler}
                  required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={userInputHandler}
                  required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SingIn.propTypes = {
  city: PropTypes.string.isRequired,
  userInputHandler: PropTypes.func.isRequired,
  formSubmitHandler: PropTypes.func.isRequired
};

export default SingIn;
