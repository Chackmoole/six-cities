import { PropertyReviews } from '../../components/property-reviews/property-reviews';
import { reviews } from '../../mock/reviews';
import { PropertyMap } from '../../components/property-map/property-map';
import { CardList } from '../../components/card-list/card-list';
import { OFFERS } from '../../mock/offers';
import { useEffect } from 'react';
import {fetchComments, fetchOffer} from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getErrorMessage, getLoadingOffer, getOffer, getError } from '../../store/getters';
import { useParams } from 'react-router-dom';
import { StatusWrapper } from '../../components/status-wrapper/status-wrapper';

export const Property = () => {
  const neighbor = OFFERS.slice(0, 3);
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if(id) {
      const parseId = Number (id);
      dispatch(fetchOffer(parseId));
    }
  }, [dispatch, id]);

  const isLoading = useAppSelector(getLoadingOffer);
  const offer = useAppSelector(getOffer);
  const errorMessage = useAppSelector(getErrorMessage);
  const error = useAppSelector(getError);

  return (
    <StatusWrapper isLoading={isLoading} errorMessage={errorMessage} error={error}>
      <>
        <div style={{display: 'none'}}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-arrow-select" viewBox="0 0 7 4">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
              >
              </path>
            </symbol>
            <symbol id="icon-bookmark" viewBox="0 0 17 18">
              <path
                d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
              >
              </path>
            </symbol>
            <symbol id="icon-star" viewBox="0 0 13 12">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
              >
              </path>
            </symbol>
          </svg>
        </div>

        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link" href="main.html">
                    <img
                      className="header__logo"
                      src="img/logo.svg"
                      alt="6 cities logo"
                      width="81"
                      height="41"
                    />
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a
                        className="header__nav-link header__nav-link--profile"
                        href="/"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                        </span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="/">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main className="page__main page__main--property">
            <section className="property">

              {offer && (
                <>
                  <div className="property__gallery-container container">
                    <div className="property__gallery" style={{overflow: 'auto'}}>
                      {offer ? offer.images.map((image) => (
                        <div className="property__image-wrapper" key={image}>
                          <img
                            className="property__image"
                            src={image}
                            alt="Photo-studio"
                          />
                        </div>
                      )
                      ) : null}
                    </div>
                  </div>
                  <div className="property__container container">
                    <div className="property__wrapper">

                      <div className="property__mark">
                        <span>Premium</span>
                      </div>

                      <div className="property__name-wrapper">
                        <h1 className="property__name">
                          {offer.title}
                        </h1>
                        {offer.isFavorite ?
                          <button
                            className="property__bookmark-button property__bookmark-button--active button"
                            type="button"
                          >
                            <svg
                              className="property__bookmark-icon"
                              width="31"
                              height="33"
                            >
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">To bookmarks</span>
                          </button>
                          :
                          <button
                            className="property__bookmark-button button"
                            type="button"
                          >
                            <svg
                              className="property__bookmark-icon"
                              width="31"
                              height="33"
                            >
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">To bookmarks</span>
                          </button>}
                      </div>

                      <div className="property__rating rating">
                        <div className="property__stars rating__stars">
                          <span style={{width: `${
                            Number(offer.rating) * 20}%`}}
                          >
                          </span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                        <span className="property__rating-value rating__value">
                          {offer.rating}
                        </span>
                      </div>
                      <ul className="property__features">
                        <li className="property__feature property__feature--entire">
                          {offer.type}
                        </li>
                        <li className="property__feature property__feature--bedrooms">
                          { offer.bedrooms === 1 ?
                            '1 Bedroom' :
                            `${offer.bedrooms ?? '1'} Bedrooms`}
                        </li>
                        <li className="property__feature property__feature--adults">
                          {offer.maxAdults === 1 ?
                            'Max 1 adult' :
                            `${offer.maxAdults ?? '1'} Max adults`}

                        </li>
                      </ul>
                      <div className="property__price">
                        <b className="property__price-value">&euro;{ offer.price}</b>
                        <span className="property__price-text">&nbsp;night</span>
                      </div>
                      <div className="property__inside">
                        <h2 className="property__inside-title">What&apos;s inside</h2>
                        <ul className="property__inside-list">
                          {offer.goods ? offer.goods.map((good) => (
                            <li className="property__inside-item" key={good}>{good}</li>
                          )) : null}
                        </ul>
                      </div>
                      <div className="property__host">
                        <h2 className="property__host-title">Meet the host</h2>
                        <div className="property__host-user user">
                          <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                            <img
                              className="property__avatar user__avatar"
                              src={offer.host.avatarUrl}
                              width="74"
                              height="74"
                              alt="Host avatar"
                            />
                          </div>
                          <span className="property__user-name">{offer.host.name}</span>
                          {offer.host.isPro ? <span className="property__user-status">Pro</span> : null}
                        </div>
                        <div className="property__description">
                          <p className="property__text">
                            {offer.description}
                          </p>
                        </div>
                      </div>
                      <PropertyReviews reviews={reviews}/>
                    </div>
                  </div>
                  <PropertyMap/>
                </>
              )}

            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                <div className="near-places__list places__list">
                  <CardList offers={neighbor}/>
                </div>
              </section>
            </div>
          </main>
        </div>
      </>
    </StatusWrapper>);
};
