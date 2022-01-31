import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPaht'
import HomeView from '../views/HomeView'
import NewReleasesView from '../views/NewReleasesView'
import BestSellersView from "../views/BestSellersView";
import NewsView from "../views/NewsView";
import SalesView from "../views/SalesView";
import ContactView from "../views/ContactView";




const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
                <Route path={ RoutingPath.signInView } element={ <NewReleasesView/> }/>
                <Route path={ RoutingPath.signedInView } element={ <BestSellersView/> }/>
                <Route path={ RoutingPath.signedInView } element={ <NewsView/> }/>
                <Route path={ RoutingPath.signedInView } element={ <SalesView/> }/>
                <Route path={ RoutingPath.signedInView } element={ <ContactView/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
