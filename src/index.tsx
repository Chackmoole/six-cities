import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import {OFFERS} from './mock/offers';
const OFFERS_COUNT = 5;
const isAuth = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={OFFERS_COUNT} isAuth={isAuth} hotels={OFFERS}/>
  </React.StrictMode>,
);
