import classes from './button.module.scss';

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  children: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button 
      className={classes.button} 
      type={props.type || 'button'} 
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};

export default Button;