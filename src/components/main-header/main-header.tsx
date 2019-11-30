import * as React from "react";
import {Link} from "react-router-dom";
import {Props} from "./interface";

const MainHeader = ({email, isAuthorizationRequired}: Props) => {
  const defaultLinkValue = `Sing In`;

  const linkValue = {
    text: isAuthorizationRequired ? defaultLinkValue : email,
    path: isAuthorizationRequired ? `/login` : `/favorites`
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">

                <Link className="header__nav-link header__nav-link--profile" to={{pathname: linkValue.path}}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {linkValue.text}
                  </span>
                </Link>

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
