import starInactive from '../../assets/star-inactive.svg'

export function StarInactive() {
   

    return(
        <div className='stars__empty'>
            <img src={starInactive} alt="Étoile vide" />
        </div>
    )
}