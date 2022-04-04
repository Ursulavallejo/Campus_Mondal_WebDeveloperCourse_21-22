import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TaskView from "./views/TaskView/TaskView";

import CreateAndGetTodoData from "./components/task_crud/CreateAndGetTodoData";

function App() {
    return (
        <>
            <Header/>
            <TaskView/>
            <Footer/>
        </>
    );
}

export default App;
