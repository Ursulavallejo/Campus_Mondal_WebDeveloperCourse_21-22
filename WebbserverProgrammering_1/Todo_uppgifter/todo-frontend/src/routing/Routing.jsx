import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RoutingPath from "./RoutingPath";

import HomeView from '../views/homeView/HomeView'
import SignInView from '../views/signInView/SignInView'
import SignedInView from '../views/signedInView/SignedInView'
import ContactView from '../views/contactView/ContactView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }

            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
                <Route path={ RoutingPath.signInView} element={ <SignInView/> }/>
                <Route path={ RoutingPath.signedInView } element={ <SignedInView/> }/>
                <Route path={ RoutingPath.contactView } element={ <ContactView/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing