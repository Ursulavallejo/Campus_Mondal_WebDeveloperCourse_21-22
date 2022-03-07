import css from './SignedInView.module.css'
import CreateAndGetTodoData from "../../components/user_crud/CreateAndGetTodoData";
import GetUserDataByName from "../../components/user_crud/GetUserDataByName";
import UpdateUser from "../../components/user_crud/UpdateUser";
import DeleteTodoUser from "../../components/user_crud/DeleteTodoUser";
import Alive from '../../components/Alive.jsx'
import {useState} from "react";


const SignedInView = () => {
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
                    <CreateAndGetTodoData/>
                </div>
                <div className='tc'>
                    <button onClick={showUpdate} className={css.btn}>Update User/Task</button>
                    {ShowingUpdate && <UpdateUser onCloseUpdate={closeUpdateHandler}/>}
                    <button className={css.btn}
                            onClick={showDelete}>Delete Task
                    </button>
                    {ShowingDelete && <DeleteTodoUser onCloseDelete={closeDeleteHandler}/>}
                </div>
            </div>
            <Alive/>
        </>
    )
};

export default SignedInView