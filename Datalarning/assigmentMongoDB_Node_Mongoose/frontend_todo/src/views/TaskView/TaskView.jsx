import css from './TaskView.module.css'
import GetUserDataByName from "../../components/task_crud/GetUserDataByName";
import UpdateUser from "../../components/task_crud/UpdateUser";
import Alive from '../../components/Alive.jsx'
import {useState} from "react";
import CreateTodoData from "../../components/task_crud/CreateTodoData";
import GetAllTodosData from "../../components/task_crud/GetAllTodosData";
import DeleteTaskData from "../../components/task_crud/DeleteTaskData";
import GetTodoDataByID from "../../components/task_crud/GetTodoDataByID";


const TaskView = () => {
    const [ShowingUpdate, setShowingUpdate] = useState(false)
    const [ShowingDelete, setShowingDelete] = useState(false)

    function showUpdate() {
        setShowingUpdate(!ShowingUpdate)
    }

    function showDelete() {
        setShowingDelete(!ShowingDelete)
    }

    function closeUpdateHandler() {
        if (ShowingUpdate === true) {
            setShowingUpdate(false);
        }
    }

    function closeDeleteHandler() {
        if (ShowingDelete === true) {
            setShowingDelete(false);
        }
    }

    return (
        <>
            <div className={css.title}>
                <h1 data-testid='titleLogenIn' className='tc'>Hi Ursula! Welcome back! TODO List!</h1>
            </div>
            <div className={css.wrapperTodo}>
                <div className='tc'>

                    <GetUserDataByName/>
                   <CreateTodoData/>
                </div>
                <div className='tc '>
                    <span className='white-80'>After create user click update to see the complete list   </span>
                    <GetAllTodosData/>
                    <GetTodoDataByID/>
                </div>
                <div className='tc'>
                    <button onClick={showUpdate} className={css.btn}>Update User/Task</button>
                    {ShowingUpdate && <UpdateUser onCloseUpdate={closeUpdateHandler}/>}
                    <button className={css.btn}
                            onClick={showDelete}>Delete Task
                    </button>
                    {ShowingDelete && <DeleteTaskData onCloseDelete={closeDeleteHandler}/>}
                </div>
            </div>
            <Alive/>
        </>
    )
};

export default TaskView