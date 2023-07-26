import '../../style/tags.scss'



export function Tags({tags}) {
    

    const tagsElement = tags.map((tag, index) => (
        <span className='tag' key={index}>{tag}</span>
    ))


    return(
        <div className='tags'>
            {tagsElement}
        </div>
    )
}