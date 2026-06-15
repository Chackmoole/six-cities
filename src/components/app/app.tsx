import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { AppRouter } from '../AppRouter/appRouter';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
);
