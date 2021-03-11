import style from './style.module.css'

const Header = (props) => {
    return (
        <header className={style.root}>
            <div className={style.forest} />
            <div className={style.container}>
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
            </div>
        </header>
    )
}

export default Header;