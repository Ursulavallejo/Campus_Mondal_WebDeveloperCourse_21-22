import Header from "./components/header/Header";
import Routing from "./routing/Routing";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";


function App() {
  return (
   <div className='pageLayout'>
       <Header/>
       <Routing>
           <NavBar/>
       </Routing>
       <Footer/>



   </div>
  );
}

export default App;
