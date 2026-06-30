import { CardList } from '../../components/card-list/card-list';
import { MainTabs } from '../../components/main-tabs/main-tabs';
import { MapBox } from '../../components/map-box/map-box';
import { useSelector } from 'react-redux';
import {
  getActiveTown, getCityCenter,
  getCurrentOffers,
  getOfferLocations, getOffersByTown,
  getStatusOffersLoaded,
} from '../../store/getters';
import { Sort } from '../../components/sort/sort';
import { useEffect } from 'react';
import { fetchOffers} from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Header } from '../../components/header/header';
import {StatusWrapper} from '../../components/status-wrapper/status-wrapper';

export const Main = () => {
  const offersCount = useSelector(getOfferLocations).length;
  const activeTown = useSelector(getActiveTown);
  const isOneOffer = () => offersCount === 1;
  const offers = useSelector(getCurrentOffers);
  const statusOffersLoaded = useAppSelector(getStatusOffersLoaded);
  const dispatch = useAppDispatch();
  const isDataLoading =
    statusOffersLoaded === 'idle' || statusOffersLoaded === 'pending';
  const isDataRejected = statusOffersLoaded === 'rejected';
  const offersForMarkers = useSelector(getOffersByTown);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const cityCentre = useSelector(getCityCenter);

  return (
    <>
      <div style={{ display: 'none' }}>
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
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
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

      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <MainTabs />
            </section>
          </div>
          <StatusWrapper isLoading={isDataLoading} error={isDataRejected}>
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  {isOneOffer() ? (
                    <b className="places__found">
                      {offersCount} place to stay in {activeTown}
                    </b>
                  ) : (
                    <b className="places__found">
                      {offersCount} places to stay in {activeTown}
                    </b>
                  )}
                  <Sort />
                  <CardList offers={offers} />
                </section>
                {cityCentre ? <MapBox cityCentre={cityCentre} offers={offersForMarkers}/> : null}

              </div>
            </div>
          </StatusWrapper>
        </main>
      </div>
    </>
  );
};
