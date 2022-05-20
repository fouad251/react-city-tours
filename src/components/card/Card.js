import React, { useEffect, useState } from 'react'
import "./Card.scss"

const Card = ({image,city,landmark,info,handleremove}) => {
    const[active,setActive] = useState(false)
    const handleclick=()=>{
        setActive(!active)
        
    }
    let act = active ?"ppp":""
    useEffect(()=>{

    },[active])
  return (
    <article className='card'>
        <div className='image-container' >
            <img src={image} alt='card'/>
            <span className='icon' onClick={handleremove}>
                <i className="fas fa-window-close" ></i>
            </span>
        </div>
        
        <div className='card-info'>
            <h2>{city}</h2>
            <h3>{landmark}</h3>
            <h4>More info
                <span onClick={handleclick}><i className="fa-solid fa-circle-down"></i></span>
            </h4>
            <p className={act} >
            {info}
            </p> 
            
        </div>

    </article>
  )
}

export default Card