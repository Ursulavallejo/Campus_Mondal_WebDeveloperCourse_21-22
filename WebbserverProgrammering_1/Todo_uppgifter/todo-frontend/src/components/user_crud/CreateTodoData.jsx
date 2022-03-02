
import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import CardList from "../card/CardList";

const CreateTodoData = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Magnus')
    const [task, setTask] = useState('go shopping')

    const sendDataToApi = () => {
        const newUser = {
            "name": name,
            "task": task,
        }

        TasksService.createTodoData(newUser)
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>CreateTodo</h1>
            What is need to do? :
            <input type="text"
                   value={ task }
                   onChange={event => setTask(event.target.value)}/>
            Person in charge? :
            <input type="text"
                   value={ name }
                   onChange={event => setName(event.target.value)}/>


            <button onClick={ sendDataToApi }>Create new TodoData</button>
            <CardList users={data}/>
        </>
    );
};

export default CreateTodoData;