import '../../style/banner.scss'


export function Banner({picture, ClassSection, ClassOverlay, ClassImg, ClassTitle, title}) {
    return(
        <div className={ClassSection}> 
            <div className={ClassOverlay}>
                <img className={ClassImg} src={picture} alt="Paysage" />
                <h1 className={ClassTitle}>{title}</h1>
            </div>
        </div>
    )
}
