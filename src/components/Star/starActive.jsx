import starActive from '../../assets/star-active.svg'
import '../../style/starActive.scss';

export function StarActive() {
   
    return(
        <img className='star__full' src={starActive} alt="Étoile remplie" />
    )
}