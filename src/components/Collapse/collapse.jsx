import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import '../../style/collapse.scss'

export function Collapse({title, content}) {

     
    const [isOpen, setIsOpen] = useState(false)

    
    return isOpen ? (

            <div className='collapse'>
                <div className="collapse__title">{title}
                    <img src={arrow} className='collapse__img collapse__img__animateOn' onClick={() => setIsOpen(false)} alt="flèche animation" />
                </div>
                <div className='collapse__container collapse__container__open'>
                        <div className='collapse__content collapse__container__open'>{content}</div>
                </div>
        </div>
    ) : (
            <div className='collapse'>
                    <div className="collapse__title">{title}
                        <img src={arrow} className='collapse__img collapse__img__animateOff ' onClick={() => setIsOpen(true)} alt="flèche animation" />
                    </div>
                    <div className='collapse__container'>
                        <div className='collapse__content'>{content}</div>
                    </div>
            </div>
        )




}