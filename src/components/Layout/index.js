import style from './style.module.css'

const Layout = ({title, descr, urlBg = false, colorBg = false, children}) => {
    let styleInline = {};
    if (urlBg) {
        styleInline.backgroundImage = `url(${urlBg})`
    };
    if (colorBg) {
        styleInline.backgroundColor = colorBg
    };
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
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;