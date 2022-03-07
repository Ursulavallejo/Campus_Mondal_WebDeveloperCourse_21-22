import css from "./Card.module.css";
import {useState} from "react";


const Card = ({ name, task }) => {
    const [isActive, setActive] = useState(false);


    const toggleClass = () => {
        setActive(!isActive)
    }

    return (
        <div className={css.layoutCard}>

            <ul className={css.list}>
                <li className={isActive ? css.done : null} onClick={toggleClass}>
                   <span className={css.nameFont}>{name}</span>
                    <span className={css.taskFont }>{task}</span>
                </li>
            </ul>

        </div>
    )
}

export default Card
