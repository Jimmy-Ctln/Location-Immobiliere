import '../../style/card.scss'

export function Card({cover, title}) {
    return(
        
        <div className='card'>
            <img className="card__img" src={cover} alt="location immobilière"></img>
                <div className='card__overlay'>
                    <span className='card__title'>{title}</span>
                </div>
        </div>
    )
}
