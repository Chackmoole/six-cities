import {getAuthorizationStatus, getUser} from '../../store/getters';
import {useAppSelector} from '../../store/hooks';
import {Link, useLocation} from 'react-router-dom';

export const Header = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const location = useLocation();
  const user = useAppSelector(getUser);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === 'auth' && (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={'/favorites'}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img src={user?.avatarUrl} alt={'аватарка пользователя'}></img>
                    </div>
                    <span className="header__user-name user__name">
                      {user?.name}
                    </span>
                    {/*<span className="header__favorite-count">3</span>  TODO уточнить применяется ли данный эелемент*/}
                  </Link>
                </li>)}
              <li className="header__nav-item">
                <Link className="header__nav-link" to={'login'} state={{ from: location.pathname }} >
                  <span className="header__signout">{authorizationStatus === 'auth' ? 'Sign out' : 'Sign in'}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
