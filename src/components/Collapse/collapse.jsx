import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import "../../style/collapse.scss";

export function Collapse({ title, content }) {


  const isArray = Array.isArray(content);

  function CheckIsArray() {
    if (isArray) {
      return content.map((item, index) => (
        <p key={index}>{item}</p>
    ));
    } else {
      return content;
    }
  }

  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  
  return (
    <div className="collapse">
      <div className="collapse__title" onClick={handleClick}>{title}
        <img src={arrow} className={`collapse__img ${isOpen ? 'collapse__img__animateOn' : 'collapse__img__animateOff'}`} alt="flèche animation"/>
      </div>
      <div className={`collapse__content ${isOpen ? 'collapse__content__open' : ''}`}>
          {isArray ? CheckIsArray() : content}
      </div>
    </div>
  )
}


