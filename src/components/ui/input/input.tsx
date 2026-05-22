interface IProps {
  className: string;
  type?: string;
  name: string;
  placeholder: string;
  required: boolean;

}

export const Input = ({className, type, name, placeholder, required}:IProps) => (
  <input className={className} type={type} name={name} placeholder={placeholder} required={required} />
);
