import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {LoginContext} from '../../context/LoginProvider';

import css from './HeaderStyle.module.css'
import { FaHouseUser} from "react-icons/fa"
import { HiOutlineKey } from "react-icons/hi"


const Header = () => {

    const navigation = useNavigate()

    const {loggedIn, setLoggedIn} = useContext(LoginContext);


    function logOutFunc() {
        setLoggedIn(!loggedIn)
        navigation("/")
    }

    return (

        <header className={css.header}>

            <div className={css.content}>
                <div className={css.contentContainer}>
                    <p className={css.contentContainerText}>
                        TODOLIST!
                    </p>

                    <ul className={css.contentContainerList}>
                        <li className={css.contentContainerItem}> My shopping List!</li>
                        <li className={css.contentContainerItem}> Meet friends!</li>
                        <li className={css.contentContainerItem}> My Free time!</li>
                        <li className={css.contentContainerItem}> What to do?</li>
                    </ul>
                </div>
            </div>

            <aside>
                {loggedIn ? <span className={css.fontWhite}><p><FaHouseUser/> Hi Ursula!</p><p className={css.toLogOut} onClick={logOutFunc}><HiOutlineKey/>(Log Out)</p></span> : null}
            </aside>

        </header>


    )
};

export default Header;