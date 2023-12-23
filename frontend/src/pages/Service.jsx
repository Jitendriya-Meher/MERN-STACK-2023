import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {

  const {services} = useAuth();
  console.log("service", services);

  return (
    
    <section className='section-services'>

    <div className="container">
      <h1 className="main-heading">
        Services
      </h1>
    </div>

    <div className="container grid grid-three-cols">
      {
        services.map((service) => (
          <div className="card" key={service._id}>
            <div className="card-img">
              <img src="./" alt="as" />
            </div>
            <div className="card-details">
              <div className="grid grid-two-cols">
                <p>{service.rovider}</p>
                <p>{service.price}</p>
              </div>
              <h2>
                {service.service}
              </h2>
              <p>
                {service.description}
              </p>
            </div>
          </div>
        ))
      }
    </div>

    </section>
  )
}

export default Service
