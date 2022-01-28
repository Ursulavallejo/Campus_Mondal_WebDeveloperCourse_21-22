import css from "./NavBar.module.css";
// import { Link } from 'react-router-dom'

const NavBar = () =>  {
    return (
        <nav>
            <ul className={css.navBar}>
                <li className={css.navbarItem}>
                    <a className={css.navbarLink}>New Releases</a>
                </li>
                <li className={css.navbarItem} >
                    <a className={css.navbarLink} >Best Sellers</a>
                </li>
                <li className={css.navbarItem}>
                    <a className={css.navbarLink} >News & Contests</a>
                </li>
                <li className={css.navbarItem}>
                    <a className={css.navbarLink} >Gift Cards</a>
                </li>
                <li className={css.navbarItem}>
                    <a className={css.navbarLink} >SALES</a>
                </li>
                <li className={css.navbarItem}>
                    <a className={css.navbarLink}>About Us</a>
                </li>
                <li className={css.navbarItem}>
                    <a className={css.navbarLink} >Contact Us</a>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar