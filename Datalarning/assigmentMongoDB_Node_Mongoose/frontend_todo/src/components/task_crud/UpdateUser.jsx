import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";

import Card from "../card/Card";
import css from './UpdateAndDeleteUser.module.css'

const UpdateUser = (props) => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [task, setTask] = useState('')

    function cancelHandler() {
        props.onCloseUpdate();
    }


    function refreshPage() {
        window.location.reload();
    }


    const sendDataToApi = () => {
        const changedTask = {
            "name": name,
            "task": task,
        }
        TasksService.updateTask(userId,changedTask)
            .then(response => {

                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={`${css.dropdownContent} ${css.positionUpdate}  ${css.show} ${css.dropdown}`}>
            <div className={css.gridContainer}>
                <input className={css.layoutInput} type='text'
                           placeholder={'ID user to update:'}
                           value={userId}
                           onChange={event => setUserId(event.target.value)}/>
                <input data-testid='input'
                       className={css.layoutInput} placeholder={'Name:'}
                       type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <input className={css.layoutInput} placeholder={'What to do? :'}
                       type="text"
                       value={task}
                       onChange={event => setTask(event.target.value)}/>

            </div>
            <div className={css.btnFlex}>
                <button data-testid='updateBtn' className={css.btn} onClick={sendDataToApi}>Update new user</button>
                <button className={css.btn} onClick={() => {
                    cancelHandler()
                    refreshPage()
                }}>Close
                </button>
            </div>

            {data.name ? <Card
                    name={data.name}
                    task={data.task}
                    // _id={data._id}
                />
                : <h4 data-testid='dbResponse'>{data}</h4>}
        </div>
    );
};

export default UpdateUser;