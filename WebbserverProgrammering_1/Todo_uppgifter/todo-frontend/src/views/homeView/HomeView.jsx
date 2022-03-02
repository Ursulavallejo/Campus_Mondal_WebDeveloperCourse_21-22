import css from './HomeViewStyle.module.css'

const HomeView = () => {

    return (
        <div className={css.layoutCircle}>

            <div className={css.circles}>
                <div className={css.circle}></div>
                <div className={css.circle}></div>
                <div className={css.circle}></div>
                <div className={css.circle}></div>


            </div>

        </div>
    )
}

export default HomeView