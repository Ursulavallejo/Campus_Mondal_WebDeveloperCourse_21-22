import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import Card from "../card/Card";
import css from './GetUserDataByName.module.css'

const GetTodoDataByID = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')

    const sendDataToApi = () => {
        TasksService.getTaskWithId(userId)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <input className={css.inputSearch}
                   placeholder={'What person ID to search? '}
                   type='text'
                   value={userId}
                   onChange={event => setUserId(event.target.value)}/>
            <button className={css.btnSearch} onClick={sendDataToApi}>Search by ID</button>
            {data.name ? <Card name={data.name}
                               task={data.task}
                               _id={data._id}/>
                : <h3 className='white-80'>{data}</h3>}
        </>
    )
}

export default GetTodoDataByID