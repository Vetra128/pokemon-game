import style from './style.module.css'
import cardBackSide from './img/card-back-side.jpg'

const PokemonCard = ({name, id, pic, type = '', values}) => {
    return (
        <div className={style.root}>
            <div className={`${style.pokemonCard} ${style[type]}`}>
                <div className={style.cardFront}>
                    <div className={`${style.wrap} ${style.front}`}>
                        <div className={style.pokemon}>
                            <div className={style.values}>
                                <div className={`${style.count} ${style.top}`}>
                                    {values?.top}
                                </div>
                                <div className={`${style.count} ${style.right}`}>
                                    {values?.right}
                                </div>
                                <div className={`${style.count} ${style.bottom}`}>
                                    {values?.bottom}
                                </div>
                                <div className={`${style.count} ${style.left}`}>
                                    {values?.left}
                                </div>
                            </div>
                            <div className={style.imgContainer}>
                                <img src={`${pic}`} alt={name} />
                            </div>
                            <div className={style.info}>
                                <span className={style.number}>#{id}</span>
                                <h3 className={style.name}>{name}</h3>
                                <small className={style.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.cardBack}>
                    <div className={`${style.wrap} ${style.back}`}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>
            </div>
       </div>
    )
}
export default PokemonCard;