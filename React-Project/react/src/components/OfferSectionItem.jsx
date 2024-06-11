import React from 'react'

const OfferSectionItem = (props) => {
      const {items} = props //destructuring
  return (
    <div  className='offerSection-list-item'>
    <img src={items.image} alt={items.title} loading='lazy'/>
    <h2>{items.title}</h2>
    <p>{items.description}</p>
   </div>
       )
}

export default OfferSectionItem