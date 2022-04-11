import css from "./Card.module.css";
import {useState} from "react";
import TasksService from "../../utils/api/services/TasksService";


const Card = ({ name, task, done, _id}) => {

    const [isTaskDone, setIsTaskDone] = useState(done)

    function toggleDone() {
        TasksService.toggleTaskIsDone(_id)
            .then(response => {
                console.log(response.data)
                setIsTaskDone(response.data.done)
            }).catch(error => console.log(error))
    }

    return (
        <div className={css.layoutCard}>

            <ul className={css.list}>
                <li className={isTaskDone ? css.done : null} onClick={toggleDone}>
                    <span  data-testid='textName' className={css.nameFont}>{name}</span>
                    <span className={css.taskFont}>{task}</span>
                    <span className={css.taskFont}>{_id}</span>
                </li>
            </ul>

        </div>
    )
}

export default Card
