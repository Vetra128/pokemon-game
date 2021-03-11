import style from './style.module.css'

const Layout = ({title, descr, urlBg, colorBg}) => {
    const styleInline = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    console.log(urlBg);
    return (
        <section className={style.root} style={styleInline}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={style.desc + ' ' + style.full}>
                        <p>
                            {descr}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;