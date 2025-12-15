import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Main} from '../../pages/main/main';
import {Favorites} from '../../pages/favorites/favorites';
import {Login} from '../../pages/login/login';
import {Property} from '../../pages/property/property';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {IOffer} from '../../types/types';

interface IProps {
  offersCount: number;
  isAuth: boolean;
  offers: IOffer[];
}

export const App = ({offersCount, isAuth, offers}:IProps) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main offersCount={offersCount} offers={offers} />} />
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/favorites'} element={isAuth ? <Favorites/> : <Login/> }/>
      <Route path={'/offer/:id'} element={<Property offers={offers} />}/>
      <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);
