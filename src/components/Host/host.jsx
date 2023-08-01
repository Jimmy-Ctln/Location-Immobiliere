import '../../style/host.scss'


export function Host({firstName, lastName, hostPicture}) {
    return(
        <div className="host">
            <div className='host__FullName'>
                <p className="host__first__name">{firstName}</p>
                <p className="host__last__name">{lastName}</p>
            </div>
            <img className="host__picture"src={hostPicture} alt="propriétaire" />
        </div>
    )
}