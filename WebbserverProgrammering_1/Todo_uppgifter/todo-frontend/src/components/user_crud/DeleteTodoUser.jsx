import TasksService from "../../utils/api/services/TasksService";
import {useState} from "react";
import css from "./UpdateAndDeleteUser.module.css";


const DeleteTodoUser = (props) => {
    const [data, setData] = useState('')
    const [name, setName] = useState('Oliver')

    function cancelHandler() {
        props.onCloseDelete();
    }

    function refreshPage() {
        window.location.reload();
    }

    const sendDataToApi = () => {
        TasksService.deleteDataByName(name)
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={`${css.dropdownContent} ${css.positionDelete}  ${css.show} ${css.dropdown}`}>
            {/*<h1>DeleteUser</h1>*/}

            <input className={css.inputDelete}
                data-testid='dataInput'  type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>

            <div className={css.btnFlex} >
            <button className={css.btn}  data-testid='deleteButton' onClick={ sendDataToApi }>Delete user</button>

            <button className={css.btn}  onClick={() => {
                cancelHandler()
                refreshPage()
            }}>Close</button>
            </div>
            <h4 data-testid='DbResponse'> { data } </h4>
        </div>
    );
};

export default DeleteTodoUser;