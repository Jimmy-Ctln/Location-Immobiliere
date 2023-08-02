import '../../style/ImageBanner.scss'


export function ImageBanner({picture, ClassSection, ClassOverlay, ClassImg, ClassTitle, title}) {
    return(
        <div className={ClassSection}> 
            <div className={ClassOverlay}>
                <img className={ClassImg} src={picture} alt="Paysage" />
                <h1 className={ClassTitle}>{title}</h1>
            </div>
        </div>
    )
}
