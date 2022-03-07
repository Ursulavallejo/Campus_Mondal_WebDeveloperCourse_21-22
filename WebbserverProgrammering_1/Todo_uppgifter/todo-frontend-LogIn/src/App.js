import {useState} from 'react'
import Routing from "./routing/Routing";
import { LoginContext } from './context/LoginProvider';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";


function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <>
            <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
                <Routing>
                    <Header/>
                    <NavBar/>
                </Routing>
            </LoginContext.Provider>
            <Footer/>
        </>
    );
}

export default App;
