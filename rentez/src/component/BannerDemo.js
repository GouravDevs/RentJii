import React from 'react'
import la from '../los.jpg'
import banner from '../banner1.jpg'
export default function BannerDemo() {
  return (<>
    
    <div id="carouselExampleControls" className="carousel slide refrigerator-header" data-ride="carousel" style={{width: '90%'}}>
    <div className="carousel-inner" style={{borderRadius: '15px'}} >
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1580130775562-0ef92da028de?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={banner} alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={la} alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{marginLeft:"69px"}}>
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" style={{marginRight:"78px"}}>
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </>
  )
}
