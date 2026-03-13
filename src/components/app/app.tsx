import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Main} from '../../pages/main/main';
import {Favorites} from '../../pages/favorites/favorites';
import {Login} from '../../pages/login/login';
import {Property} from '../../pages/property/property';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {store} from '../../store/store';
import {Provider} from 'react-redux';

interface IProps {
  isAuth: boolean;
}

export const App = ({ isAuth}:IProps) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/favorites'} element={isAuth ? <Favorites/> : <Login/> }/>
        <Route path={'/offer/:id'} element={<Property />}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);
