import { useNavigate } from 'react-router-dom'
import {useContext, useState} from "react";
import {LoginContext} from '../../context/LoginProvider';

import css from './SignInView.module.css'

const SignInView = () => {


    const {loggedIn, setLoggedIn} = useContext(LoginContext)

    const navigate = useNavigate()

    const existingUser = {
        user: 'Ursula',
        password: 'password'
    }

    const [username, setUsername] = useState('Ursula')
    const [password, setPassword] = useState('password')

    function checkUser() {
        if (username === existingUser.user && password === existingUser.password) {
            setLoggedIn(!loggedIn);
            navigate('/TaskView')

        } else {
            alert('Wrong email or password!')
        }
    }

    return (
        <div className={css.signInContainer}>
            <div className={css.signInCard}>
                <h2 className={css.signInHeadline}>Log in on your TODO List </h2>
                <form>
                    <label>User:</label>
                    <input className={css.inputField} type="text"
                           onChange={event => setUsername(event.target.value)}
                           value={username}
                    />
                </form>
                <form>
                    <label>Password: </label>
                    <input className={css.inputField} type="password"
                           onChange={event => setPassword(event.target.value)}
                           value={password}
                    />
                </form>
                <button
                    className={css.signInBtn}
                    type="button"
                    onClick={checkUser}>
                    Log In
                </button>
            </div>
        </div>
    )
};

export default SignInView