import './button.scss';

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  children?: string;
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
