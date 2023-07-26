import '../../style/ImageBanner.scss'


export function ImageBanner({picture, title}) {
    return(
        <div className='section'>
            <div className='section__overlay'>
                <img className='section__img' src={picture} alt="Paysage" />
                <h1 className='section__title'>{title}</h1>
            </div>
        </div>
    )
}
