
import css from './HeaderStyle.module.css'
import {FaHouseUser} from "react-icons/fa"
import {HiOutlineKey} from "react-icons/hi"


const Header = () => {


    return (

        <header className={css.headerWrapper}>
            <div className={css.content}>
                <div className={css.contentContainer}>
                    <p className={css.contentContainerText}>
                        TODO!
                    </p>
                    <ul className={css.contentContainerList}>
                        <li className={css.contentContainerItem}> My shopping List!</li>
                        <li className={css.contentContainerItem}> Meet friends!</li>
                        <li className={css.contentContainerItem}> My Free time!</li>
                        <li className={css.contentContainerItem}> What to do?</li>
                    </ul>
                </div>
            </div>

        </header>
    )
};

export default Header;