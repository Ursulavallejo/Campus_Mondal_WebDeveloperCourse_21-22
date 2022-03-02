import Alive from "../../components/Alive";
import GetAllUsers from "../../components/user_crud/GetAllUsers";
import CreateTodoData from "../../components/user_crud/CreateTodoData";
import UpdateUser from "../../components/user_crud/UpdateUser";
import DeleteTodoUser from "../../components/user_crud/DeleteTodoUser";
import GetUserDataByName from "../../components/user_crud/GetUserDataByName";

const ContactView = () => {

    return (
        <div className='tc'>
            <h1 className='tracked'>Contact View</h1>
            <Alive/>
            <GetAllUsers/>
            <CreateTodoData/>
            <UpdateUser/>
            <GetUserDataByName/>
            <DeleteTodoUser/>

        </div>
    )
}

export default ContactView