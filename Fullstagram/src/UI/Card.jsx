import Styles from './Card.module.css';

const Card = (props) => {
    return <div className={Styles + props.className} >{props.children} </div>
};

export default Card;