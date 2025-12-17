import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import {OFFERS} from './mock/offers';
const isAuth = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App isAuth={isAuth} offers={OFFERS}/>
  </React.StrictMode>,
);
