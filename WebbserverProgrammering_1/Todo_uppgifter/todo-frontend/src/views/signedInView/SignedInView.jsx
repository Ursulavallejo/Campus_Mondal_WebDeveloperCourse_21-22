import css from './SignedInView.module.css'


const SignedInView = () => {


    return (
        <div className={css.test}>
            <h1 className='tc'>Hi Ursula! Welcome back to your TODO List!</h1>
            <input type="text" id="todoInput" placeholder="What it is need to do?"/>
            <input type="text" id="nameInput" placeholder="Who needs to do it?"/>
            <button id="addTodo">Add</button>

        </div>
)
};

export default SignedInView