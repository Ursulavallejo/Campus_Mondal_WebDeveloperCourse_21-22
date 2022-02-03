import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPath'

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
                <Route path={ RoutingPath.newReleasesView} element={ <NewReleasesView/> }/>
                <Route path={ RoutingPath.bestSellersView } element={ <BestSellersView/> }/>
                <Route path={ RoutingPath.newReleasesView } element={ <NewsView/> }/>
                <Route path={ RoutingPath.salesView } element={ <SalesView/> }/>
                <Route path={ RoutingPath.contactView } element={ <ContactView/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
