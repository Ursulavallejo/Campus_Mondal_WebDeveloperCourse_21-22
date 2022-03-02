import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";

import Card from "../card/Card";


const UpdateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Magnus')
    const [newName, setNewName] = useState('Oliver')
    const [task, setTask] = useState('dansar')

    const sendDataToApi = () => {
        const changedUser = {
            "name": name,
            "newName": newName,
            "task": task,
        }
        TasksService.updateDataByName(changedUser)
            .then(response => {

                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>Update Data</h1>

            Name:<input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            New Name:<input type="text"
                   value={newName}
                   onChange={event => setNewName(event.target.value)}/>
            What to do? :<input type="text"
                                value={ task }
                                onChange={event => setTask(event.target.value)}/>

            <button onClick={ sendDataToApi }>Update new user</button>

            {data.name ? <Card
                    name={ data.name }
                    task={ data.task }/>
                : <h3>{ data }</h3> }

        </>
    );
};

export default UpdateUser;