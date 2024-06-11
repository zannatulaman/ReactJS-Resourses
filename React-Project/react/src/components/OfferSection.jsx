import React from 'react'
import "../styles/OfferSection.css"
import OfferSectionItem from './OfferSectionItem'

const sections = [
        {
            image : "images/cross-platform.png",
            title: "Cross-Platform Desktop Development",
            description: "Cross-platform development for mobile platforms is often a good way to cut development costs and bring your solution to the market faster."

        },
        {
            image : "images/windows.png",
            title: "Windows Application Development",
            description: "Windows OS supports fast and performant app. It is here to stay and it gives every software vendor the direct access to the whole 700 millions of devices running on Windows 10."

        },
        {
            image : "images/linux.png",
            title: "Linux Application Development",
            description: "Linux OS supports fast and performant app. It is here to stay and it gives every software vendor the direct access to the whole 700 millions of devices running on Windows 10."

        }

]

const OfferSection = () => {
  return (
    <div className='offerSection'>
        <h1 className='offerSection-heading'>
           We Offer a Wide <br />
           Variety of Desktop App Development
        </h1>

       {/* <div className='offerSection-list'>
          {
            sections.map((item, index) =>
               <div key={index} className='offerSection-list-item'>
                <img src={item.image} alt={item.title} loading='lazy'/>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
               </div>
            )

        
        }

       </div> */}

     <div className='offerSection-list'>
      {
       sections.map((item, index) =>
            <OfferSectionItem key={index} items={item}></OfferSectionItem>
       )

    }

   </div>

       
        
  </div>
  )
}

export default OfferSection