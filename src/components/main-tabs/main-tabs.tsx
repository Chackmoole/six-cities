interface IProps {
  onClick: (data:string) => void;
}

export const MainTabs = ({onClick}:IProps) => (
  <ul className="locations__list tabs__list">
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() =>onClick('Paris')}>
        <span>Paris</span>
      </a>
    </li>
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() =>onClick('Cologne')}>
        <span>Cologne</span>
      </a>
    </li>
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() =>onClick('Brussels')}>
        <span>Brussels</span>
      </a>
    </li>
    <li className="locations__item">
      <a className="locations__item-link tabs__item tabs__item--active" href="#" onClick={() =>onClick('Amsterdam')}>
        <span>Amsterdam</span>
      </a>
    </li>
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() =>onClick('Hamburg')}>
        <span>Hamburg</span>
      </a>
    </li>
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={() =>onClick('Dusseldorf')}>
        <span>Dusseldorf</span>
      </a>
    </li>
  </ul>
);
