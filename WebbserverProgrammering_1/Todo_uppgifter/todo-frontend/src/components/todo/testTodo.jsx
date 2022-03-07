//
// import TasksService from "../../utils/api/services/TasksService";
// import {useState, useEffect} from "react";
// import CardList from "../card/CardList";
//
// const CreateAndGetTodoData = () => {
//     const [data, setData] = useState([])
//     const [name, setName] = useState('') //Magnus
//     const [task, setTask] = useState('') //go shopping
//
//     const sendDataToApi = () => {
//         const newUser = {
//             "name": name,
//             "task": task,
//         }
//
//         TasksService.createTodoData(newUser)
//             .then(response => {
//                 // console.log(response.data)
//                 setData(response.data)
//             })
//             .catch(error => console.log(error))
//     }
//
//     // to have all the users together
//     const fetchDataFromExternalApi = () => {
//         TasksService.getAllTodos()
//             .then(response => {
//                 // console.log(response.data)
//                 setData(response.data)
//             })
//             .catch(error => console.log(error))
//     }
//
//     useEffect( () => {
//         fetchDataFromExternalApi ()
//     }, [])
//
//     return (
//         <>
//             {/*<h1>CreateTodo</h1>*/}
//             <input placeholder={'Person in charge? '}
//                    type="text"
//                    value={ name }
//                    onChange={event => setName(event.target.value)}/>
//             <input data-testid='textNeedDo' placeholder={'What is need to do?'}
//                    type="text"
//                    value={ task }
//                    onChange={event => setTask(event.target.value)}/>
//
//
//             <button data-testid='btnAdd' onClick={ sendDataToApi }>ADD</button>
//             <CardList users={data}/>
//         </>
//     );
// };
//
// export default CreateAndGetTodoData;