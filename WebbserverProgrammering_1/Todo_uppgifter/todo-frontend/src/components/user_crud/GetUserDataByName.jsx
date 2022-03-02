import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import Card from "../card/Card";


const GetUserDataByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Oliver')

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

                <h1>Get User Data By Name</h1>
              What name are you looking for ? : <input type='text'
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button  onClick={sendDataToApi}>Get User Data By Name</button>
                {data.name ? <Card name={data.name}
                                   task={data.task}/>
                    : <h3>{data}</h3>}

        </>
    )
}

export default GetUserDataByName