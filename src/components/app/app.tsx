import {Main} from '../../pages/main/main';

interface IProps {
  offersCount: number;
}

export const App = ({offersCount}:IProps) => (
  <Main offersCount={offersCount}/>
);


