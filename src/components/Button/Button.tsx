import './Button.scss'

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <button className="v-button">{props.label}</button>;
};
