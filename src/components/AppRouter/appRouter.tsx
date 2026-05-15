import {Route, Routes} from 'react-router-dom';
import {Main} from '../../pages/main/main';
import {Login} from '../../pages/login/login';
import {Favorites} from '../../pages/favorites/favorites';
import {Property} from '../../pages/property/property';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getAuthorizationStatus} from '../../store/getters';
import {useEffect} from 'react';
import {fetchAuth} from '../../store/actions';

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);
  const isAuth = useAppSelector(getAuthorizationStatus);

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/favorites'} element={isAuth === 'auth' ? <Favorites/> : <Login/>}/>
      <Route path={'/offer/:id'} element={<Property/>}/>
      <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  );
};
