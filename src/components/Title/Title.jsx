import '../../style/title.scss'


export function Title({title, location}) {


    return(
        <div className="title">
            <h2 className="title__h2">{title}</h2>
            <span className="title__location">{location}</span>
        </div>

    )
}