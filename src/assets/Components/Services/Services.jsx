import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
const ServiceData=[
   {
    id:1,
    icon:<FaCarSide className="text-4xl md:text:text-5xl
     text-primary"/>,
     title:"Free Shipping",
     description:"Free Shipping On All order",
   },
   {
    id:2,
    icon:<FaCheckCircle className="text-4xl md:text:text-5xl
     text-primary"/>,
     title:"Safe Money",
     description:"Free Shipping On All order",
   },
   {
    id:3,
    icon:<FaWallet className="text-4xl md:text:text-5xl
     text-primary"/>,
     title:"Free Shipping",
     description:"Free Shipping On All order",
   },
   {
    id:4,
    icon:<FaHeadphonesAlt className="text-4xl md:text:text-5xl
     text-primary"/>,
     title:"Free Shipping",
     description:"Free Shipping On All order",
   },

]
const Services = () => {

  return (
    <div>
      <div className="container mt-14 md:mt-20">
      <div  className="grid grid-cols-2 lg:grid-cols-4
       gap-4 gap-y-8">
        {
          ServiceData.map((data)=>(
            <div className="flex flex-col items-start 
            sm:flex-row gap-4 ">
              {data.icon}
              <div>
              <h1>{data.title}</h1>
              <h1>{data.description}</h1>
              </div>
              
            </div>

          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Services
