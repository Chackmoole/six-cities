import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Main} from '../../pages/main/main';
import {Favorites} from '../../pages/favorites/favorites';
import {FavoritesEmpty} from '../../pages/favorites-empty/favorites-empty';
import {Login} from '../../pages/login/login';
import {MainEmpty} from '../../pages/main-empty/main-empty';
import {Property} from '../../pages/property/property';
import {PropertyNotLogged} from '../../pages/property-not-logged/property-not-logged';

interface IProps {
  offersCount: number;
}

export const App = ({offersCount}:IProps) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main offersCount={offersCount}/>} />
      <Route path={'/favorites'} element={<Favorites/>}/>
      <Route path={'favorites-empty'} element={<FavoritesEmpty/>}/>
      <Route path={'login'} element={<Login/>}/>
      <Route path={'main-empty'} element={<MainEmpty/>}/>
      <Route path={'property'} element={<Property/>}/>
      <Route path={'property-not-logged'} element={<PropertyNotLogged/>}/>
    </Routes>
  </BrowserRouter>
);


