import React from 'react'
// import $data from "$data"


function Card(props) {
  return (
    <div className='cards'>
      <div className='card'>
      
      <img src={props.link} />
      <div className='card_info'>
         <span className='card_category'>
           {props.title}
         </span>
         <h3 className='card_title'>{props.name}
         </h3>
         <a href={props.hlink} target="_blank">

         <button className='btn'>About</button>
         </a>
      </div>
            
      </div>
    </div>
  )
}

export default Card