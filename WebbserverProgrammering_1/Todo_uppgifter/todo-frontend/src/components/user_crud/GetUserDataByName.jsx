import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import Card from "../card/Card";
import css from './GetUserDataByName.module.css'

const GetUserDataByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TasksService.getUserByName(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    console.log(data)
    return (
        <>

                {/*<h1>Get User Data By Name</h1>*/}
              <input className={css.inputSearch}
            placeholder={'What name to search? '}
            type='text'
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button className={css.btnSearch} onClick={sendDataToApi}>Search</button>
                {data.name ? <Card name={data.name}
                                   task={data.task}/>
                    : <h3>{data}</h3>}

        </>
    )
}

export default GetUserDataByName