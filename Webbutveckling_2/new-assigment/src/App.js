import Header from "./components/header/Header";
import Routing from "./routing/Routing";
import NavBar from "./components/navBar/NavBar";


function App() {
  return (
   <div className='pageLayout'>
       <Header/>
       <Routing>
           <NavBar/>
       </Routing>



   </div>
  );
}

export default App;
