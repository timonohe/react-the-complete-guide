import classes from './card.module.scss';

const Card = (props: any) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card;