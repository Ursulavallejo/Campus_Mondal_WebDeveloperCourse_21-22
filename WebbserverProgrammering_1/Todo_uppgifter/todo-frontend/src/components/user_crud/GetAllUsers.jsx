import TasksService from "../../utils/api/services/TasksService";
import {useState, useEffect} from "react";
import CardList from "../card/CardList";


const GetAllUsers = () => {

    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        TasksService.getAllTodos()
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }



    return (
        <>
            <h1>GetAllTodos</h1>
            <button onClick={ fetchDataFromExternalApi }>
                Get all Todos
            </button>
            <CardList users={ data }/>

        </>
    );
}

export default GetAllUsers;