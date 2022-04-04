import TasksService from "../../utils/api/services/TasksService";
import {useState, useEffect} from "react";
import CardList from "../card/CardList";
import css from './CreateAndGetTodoData.module.css'

const CreateAndGetTodoData = (props) => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')

    const sendDataToApi = () => {
        const newUser = {
            "username": name,
            "task": task,
        }

        TasksService.createTask(newUser)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    // to have all the users together
    const fetchDataFromExternalApi = () => {
        TasksService.getAllTasks()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchDataFromExternalApi()
    }, [])

    return (
        <>
            <input className={css.inputAdd} placeholder={'Person in charge?'}
                   value={name}
                   onChange={(event) => setName(event.target.value)}/>
            <input className={css.inputAdd} data-testid='textNeedDo'
                   placeholder={'What is need to do?'}
                   type="text"
                   value={task}
                   onChange={(event )=> setTask(event.target.value)}/>
            <button className={css.btnAdd} data-testid='btnAddTest' onClick={sendDataToApi}>ADD</button>
            <CardList users={data}/>
        </>
    );
};

export default CreateAndGetTodoData;