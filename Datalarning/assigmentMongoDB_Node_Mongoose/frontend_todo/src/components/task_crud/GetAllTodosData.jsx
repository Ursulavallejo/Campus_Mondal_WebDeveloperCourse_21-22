import TasksService from "../../utils/api/services/TasksService";
import {useState, useEffect} from "react";
import CardList from "../cards/CardList";
import css from './CreateAndGetTodoData.module.css'

const GetAllTodosData = () => {
    const [data, setData] = useState([])

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
            <button className={css.btnAdd} data-testid='btnAddTest' onClick={fetchDataFromExternalApi}>UPDATE</button>
            <CardList users={data}/>
        </>
    );
};

export default GetAllTodosData;