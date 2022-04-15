import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import CardList from "../cards/CardList";
import css from './GetUserDataByName.module.css'

const GetUserDataByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TasksService.getTaskWithUsernameQuery(name)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <input className={css.inputSearch}
                   placeholder={'What name to search? '}
                   type='text'
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <button className={css.btnSearch} onClick={sendDataToApi}>Search</button>
            {data.length > 0 && data[0].name ?
                <CardList users={data}/> :
                <p className='white-80'>{data.length > 0 ? data[0].message : ''}</p>
            }
        </>
    )
}

export default GetUserDataByName