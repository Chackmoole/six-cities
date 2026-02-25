interface IProps {
  handleChangeTown: (data:string) => void;
  city: string;
}

export const MainTab = ({handleChangeTown, city}:IProps) => (
  <li className="locations__item">
    <div className="locations__item-link tabs__item" onClick={() => handleChangeTown(city)}>
      <span>{city}</span>
    </div>
  </li>
);
