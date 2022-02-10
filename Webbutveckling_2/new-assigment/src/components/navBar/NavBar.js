import {Link} from 'react-router-dom'
import RoutingPath from '../../routing/RoutingPath'

import css from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav>
            <ul className={css.navBar}>
                <li className={`${css.navbarItem} ${css.active} `}>
                    <Link className={`${css.navbarLink} ${css.blackFont}`} to={RoutingPath.homeView}>Home</Link>
                </li>
                <li className={css.navbarItem}>
                    <Link className={css.navbarLink} to={RoutingPath.newReleasesView}>New Releases</Link>
                </li>
                <li className={css.navbarItem}>
                    <Link className={css.navbarLink} to={RoutingPath.bestSellersView}>Best Sellers</Link>
                </li>
                <li className={css.navbarItem}>
                    <Link className={css.navbarLink} to={RoutingPath.newReleasesView}>News & Contests</Link>
                </li>
                <li className={css.navbarItem}>
                    <Link className={css.navbarLink} to={RoutingPath.salesView}>SALES</Link>
                </li>
                <li className={css.navbarItem}>
                    <Link className={css.navbarLink} to={RoutingPath.contactView}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar