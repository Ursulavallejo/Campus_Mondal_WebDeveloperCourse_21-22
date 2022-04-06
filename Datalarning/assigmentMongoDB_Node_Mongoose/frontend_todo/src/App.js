import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TaskView from "./views/TaskView/TaskView";
import CreateTodoData from "./components/task_crud/CreateTodoData";
import GetAllTodosData from "./components/task_crud/GetAllTodosData";
import GetTodoDataByID from "./components/task_crud/GetTodoDataByID";
import UpdateUser from "./components/task_crud/UpdateUser";
import GetUserDataByName from "./components/task_crud/GetUserDataByName";
import DeleteTaskData from "./components/task_crud/DeleteTaskData";


function App() {
    return (
        <>
            <Header/>
            <CreateTodoData/>
            <GetAllTodosData/>
            <GetUserDataByName/>
            <GetTodoDataByID/>
            {/*<UpdateUser/>*/}
            <DeleteTaskData/>
            {/*<TaskView/>*/}
            <Footer/>
        </>
    );
}

export default App;
