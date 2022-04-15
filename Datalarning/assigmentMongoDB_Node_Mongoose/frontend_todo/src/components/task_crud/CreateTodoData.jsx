import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import Card from "../cards/Card";
import css from './CreateAndGetTodoData.module.css'

const CreateTodoData = () => {
    const [data, setData] = useState({})
    const [name, setName] = useState('')
    const [task, setTask] = useState('')

    const sendDataToApi = () => {
        const newTask = {
            "name": name,
            "task": task,
            "done": false,
        }
        TasksService.createTask(newTask)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }


    return (
        <div className={css.wrapper}>
            <input className={css.inputAdd} placeholder={'Person in charge?'}
                   type="text"
                   value={name}
                   onChange={(event) => setName(event.target.value)}/>
            <input className={css.inputAdd} data-testid='textNeedDo'
                   placeholder={'What is need to do?'}
                   type="text"
                   value={task}
                   onChange={(event )=> setTask(event.target.value)}/>
            <button className={css.btnAdd} data-testid='btnAddTest' onClick={sendDataToApi}>ADD</button>
            {data.name ? <Card name={data.name}
                               task={data.task}/>
                : ''}
        </div>
    );
};

export default CreateTodoData;