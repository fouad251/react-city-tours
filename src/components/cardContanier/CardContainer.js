import React, { useEffect, useState } from 'react'
import {tourData} from "./tourData"
import "./CardContainer.scss"
import Card from '../card/Card'
const CardContainer = () => {
    const[cities,setCities]  =useState(tourData) 
    const handleremove =(id)=>{
        console.log("clsose" + id)
         const filteredcities = cities.filter((city)=>city.id!==id)
         setCities(filteredcities)
    }
    useEffect(()=>{

    },[cities])
  return (
    <section className='city-wrapper'>
        {cities.map((city)=>{
            return(
                <Card 
                key={city.id} 
                image={city.img} 
                city={city.city} 
                landmark={city.name}
                info={city.info}
                handleremove={()=>handleremove(city.id)}
                />
            )
        })}
    </section>
  )
}

export default CardContainer