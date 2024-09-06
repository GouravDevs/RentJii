import React from 'react';

export default function Banner() {
  const cardStyle = {
    background: `url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  };

  const itemImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card" style={cardStyle}>
            <div id="myCarousel1" className="carousel slide" data-ride="carousel" data-interval="0">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel1" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel1" data-slide-to="1"></li>
                {/* Add more indicators as needed */}
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                            className=""
                            alt=""
                            style={itemImageStyle}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="https://example.com/your-new-image.jpg"
                            className=""
                            alt=""
                            style={itemImageStyle}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>

              <a className="carousel-control-prev" href="#myCarousel1" data-slide="prev">
                <i className="fa fa-angle-left"></i>
              </a>
              <a className="carousel-control-next" href="#myCarousel1" data-slide="next">
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
