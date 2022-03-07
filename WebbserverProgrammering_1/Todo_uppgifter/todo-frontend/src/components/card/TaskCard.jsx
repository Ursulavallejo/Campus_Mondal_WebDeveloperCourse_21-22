import {useState} from 'react'
import css from './TaskCart.module.css'
import DeleteTodoUser from '../user_crud/DeleteTodoUser'

const TaskCard = ({name, task}) => {

    const [isActive, setActive] = useState(false);


    const toggleClass = () => {
        setActive(!isActive)
    }
    return (
        <div className={css.layoutCard}>

            <ul className={css.list}>
                <li className={isActive ? css.done : null} onClick={toggleClass}>
                    <h2>{name}</h2>
                    <p>{task}</p>
                    <span>Done?<input type="checkbox"  checked="true"/></span>
                    <button  >Edit</button>
                    <button data-testid='btnDelete'  onClick={DeleteTodoUser}>Delete</button>
                </li>
            </ul>

        </div>
    )
}

export default TaskCard


// function checkToDo (id){
//     let textChecked = document.getElementById('done-'+ id).checked
//     for (const item of todoArray) {
//         if (item.id === id){
//             item.done = textChecked
//         }
//     }
//     updateToDoList(todoArray)
// }