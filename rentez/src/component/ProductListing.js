import React from 'react';

const ProductPage = () => {
  return (
    <div>
   
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                  <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" alt="Product" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a><a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
                <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp">
                  <img width="60" height="60" className="rounded-2" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product Thumbnail" />
                </a>
                {/* Add other thumbnails similarly */}
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">Videocon Single Door Fridge <br /> 190 Liter</h4>
                <div className="d-flex flex-row">
                 
                <span className="text-muted">
  <i className="fas fa-shipping-fast fa-sm mx-1"></i> Delivery by 15th August
</span>

                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="d-flex flex-row my-1">
                 
                <span className="text-muted">
  <i className="fas fa-shipping-fast fa-sm mx-1"></i> 100% Refundable deposit
</span>

                  <span className="text-success ms-2">₹1200</span>
                </div>


                <div className="mb-6 mt-5">
              
                <h6 className="title text-dark"> For how many months you want to rent this?</h6>
                </div>
                
                <button type="button" class="btn btn-secondary btn-circle btn-xl">3</button>
                <button type="button" class="btn btn-secondary btn-circle btn-xl">6</button>
                <button type="button" class="btn btn-secondary btn-circle btn-xl">12</button>
                
                <hr />
                
                <a href="#" className="btn btn-warning shadow-0">Buy now</a>
                <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3"> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="bg-light border-top py-4">
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-8 mb-4">
              <div className="border rounded-2 px-3 py-2 bg-white">
                {/* Pills navs */}
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                  <li className="nav-item d-flex" role="presentation">
                    <a className="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
                  </li>
                  <li className="nav-item d-flex" role="presentation">
                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
                  </li>
                  <li className="nav-item d-flex" role="presentation">
                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
                  </li>
                  <li className="nav-item d-flex" role="presentation">
                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Seller profile</a>
                  </li>
                </ul>
                {/* Pills navs */}

                {/* Pills content */}
                <div className="tab-content" id="ex1-content">
                  <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <p>
                      With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <div className="row mb-2">
                      <div className="col-12 col-md-6">
                        <ul className="list-unstyled mb-0">
                          <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                          <li><i className="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                          <li><i className="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                          <li><i className="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6 mb-0">
                        <ul className="list-unstyled">
                          <li><i className="fas fa-check text-success me-2"></i>Easy fast and ver good</li>
                          <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                          <li><i className="fas fa-check text-success me-2"></i>Modern style and design</li>
                        </ul>
                      </div>
                    </div>
                    <table className="table border mt-3 mb-2">
                      <tr>
                        <th className="py-2">Display:</th>
                        <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                      </tr>
                      <tr>
                        <th className="py-2">Processor capacity:</th>
                        <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                      </tr>
                      <tr>
                        <th className="py-2">Camera quality:</th>
                        <td className="py-2">720p FaceTime HD camera</td>
                      </tr>
                      <tr>
                        <th className="py-2">Memory</th>
                        <td className="py-2">8 GB RAM or 16 GB RAM</td>
                      </tr>
                      <tr>
                        <th className="py-2">Graphics</th>
                        <td className="py-2">Intel Iris Plus Graphics 640</td>
                      </tr>
                    </table>
                  </div>
                  <div className="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                    Tab content or sample information now <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  </div>
                  <div className="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                    Another tab content or sample information now <br />
                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </div>
                  <div className="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                    Some other tab content or sample information now <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </div>
                </div>


              </div>
            </div>
            <div class="col-lg-4">
        <div class="px-0 border rounded-2 shadow-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Similar items</h5>
              <div class="d-flex mb-3">
                <a href="#" class="me-3">
                  <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/8.webp" style={{minWidth:'96px', height:'96px'}} class="img-md img-thumbnail" />
                </a>
                <div class="info">

                  <a href="#" class="nav-link mb-1">
                    Rucksack Backpack Large <br />
                    Line Mounts
                  </a>
                  <strong class="text-dark"> $38.90</strong>
                </div>
              </div>
              <div class="d-flex mb-3">
                <a href="#" class="me-3">
                  <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/9.webp" style={{minWidth:'96px', height:'96px'}} class="img-md img-thumbnail" />
                </a>
                <div class="info">
                  <a href="#" class="nav-link mb-1">
                    Summer New Men's Denim <br />
                    Jeans Shorts
                  </a>
                  <strong class="text-dark"> $29.50</strong>
                </div>
              </div>
              <div class="d-flex mb-3">
                <a href="#" class="me-3">
                  <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/10.webp" style={{minWidth:'96px', height:'96px'}} class="img-md img-thumbnail" />
                </a>
                <div class="info">
                  <a href="#" class="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                  <strong class="text-dark"> $120.00</strong>
                </div>
              </div>
              <div class="d-flex">
                <a href="#" class="me-3">
                  <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/11.webp" style={{minWidth:'96px', height:'96px'}} class="img-md img-thumbnail" />
                </a>
                <div class="info">
                  <a href="#" class="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                  <strong class="text-dark"> $339.90</strong>
                </div>
              </div>
          </div>
        </div>
        </div></div>
              </div>
              </div>
      </section>

    </div>
  );
};

export default ProductPage;

