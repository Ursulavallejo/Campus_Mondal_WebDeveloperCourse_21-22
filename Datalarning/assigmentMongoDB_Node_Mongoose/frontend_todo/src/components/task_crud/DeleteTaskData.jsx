import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import css from "./UpdateAndDeleteUser.module.css";


const DeleteTaskData= () => {
    const [data, setData] = useState('')
    const [userId, setUserId] = useState('')

    // function cancelHandler() {
    //     props.onCloseDelete();
    // }
    //
    // function refreshPage() {
    //     window.location.reload();
    // }

    const sendDataToApi = () => {
        TasksService.deleteTask(userId)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div
            className={`${css.dropdownContent} ${css.positionDelete}  ${css.show} ${css.dropdown}`}
        >

            <input placeholder={'ID to delete? '} className={css.inputDelete}
                   data-testid='dataInput' type="text"
                   value={userId}
                   onChange={event => setUserId(event.target.value)}/>
            <div className={css.btnFlex}>
                <button className={css.btn}
                        onClick={() => {
                            sendDataToApi()
                            // refreshPage()
                        }}
                >Delete user</button>
                {/*<button className={css.btn} onClick={() => {*/}
                {/*    cancelHandler()*/}
                {/*    refreshPage()*/}
                {/*}}>Close*/}
                {/*</button>*/}
            </div>
            <h4 > {data} </h4>
        </div>
    );
};

export default DeleteTaskData;