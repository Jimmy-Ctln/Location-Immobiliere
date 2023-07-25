import '../../style/tags.scss'



export function Tags({tags}) {
    

    const tagsElement = tags.map((tag, index) => (
        <span className='tags' key={index}>{tag}</span>
    ))


    return(
        <div>
            {tagsElement}
        </div>
    )
}