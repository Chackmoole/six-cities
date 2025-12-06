import {Main} from '../../pages/main/main';

interface iProps {
  offersCount: number;
}

function App({offersCount}:iProps): JSX.Element {

  return (
    <Main offersCount={offersCount}/>
  );
}

export default App;
