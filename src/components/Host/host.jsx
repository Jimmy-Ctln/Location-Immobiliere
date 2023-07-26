import '../../style/host.scss'


export function Host({hostName, hostPicture}) {
    return(
        <div className="host">
            <span className="host__name">{hostName}</span>
            <img className="host__picture"src={hostPicture} alt="propriétaire" />
        </div>
    )
}