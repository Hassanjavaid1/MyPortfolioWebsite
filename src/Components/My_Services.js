import React from 'react'
import './CSS/Portfolio.css'
import { serviceData } from './CustomApi'
import { Element } from "react-scroll";

function My_Services() {
  return (
    <>
      <div className="services">
    <Element name="My_Services">
        <h4 className='my_services'>My Services!</h4>
          </Element>
        <div className="main_service" data-aos="fade-left">
        {serviceData.map(({name,description,service_icon})=>(
        <div className="sub_services">
      <span>{service_icon}</span>
<div className="service_desc">
  <h3 className="service_title">{name}</h3>
  <p className="service_detail">{description}</p>
</div>
        </div>
        ))}
        </div>
      </div>
    </>
  )

        }
export default My_Services
