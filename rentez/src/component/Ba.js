import React from 'react'

export default function Ba() {
  return (
    <div>
      <div class="container">
  <h2>Carousel Example</h2>  
<div id="myCarouselBa" class="carousel slide" data-ride="carousel">
  
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div class="carousel-inner">
      <div class="item active">
        <img src="la.jpg" alt="Los Angeles" style={{width:100,height:50}}/>
      </div>

      <div class="item">
        <img src="chicago.jpg" alt="Chicago" style={{width:100,height:50}}/>
      </div>
    
      <div class="item">
        <img src="ny.jpg" alt="New york" style={{width:100,height:50}}/>
      </div>
    </div>

   
    <a class="left carousel-control" href="#myCarouselBa" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarouselBa" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
     </div>
     </div>


  )
}
