import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Main} from '../../pages/main/main';
import {Favorites} from '../../pages/favorites/favorites';
import {Login} from '../../pages/login/login';
import {Property} from '../../pages/property/property';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {IOffer} from './../../types/types';

interface IProps {
  offersCount: number;
  isAuth: boolean;
  hotels: IOffer[];
}

export const App = ({offersCount, isAuth, hotels}:IProps) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main offersCount={offersCount}/>} />
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/favorites'} element={isAuth ? <Favorites/> : <Login/> }/>
      <Route path={'/offer:id'} element={<Property/>}/>
      <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);
