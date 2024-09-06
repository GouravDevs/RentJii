import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Fade, CircularProgress } from "@mui/material";
import Rating from '@mui/material/Rating';
import axios from 'axios';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const DetailsPage = () => {
    const [mainImage, setMainImage] = useState("https://imgur.com/0rzvV7p.png");
    const [activeTenure, setActiveTenure] = useState(12);
    const [activeTabs, setActiveTabs] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Step 1: Create a loading state

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount

        // Fetch data when the component mounts
        axios.get('https://localhost:44300/api/MainPage/GetDetailPage')
            .then(response => {
                const productData = JSON.parse(response.data);
                setProducts(productData);
                setLoading(false);  // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);  // Also set loading to false in case of error
            });

        // Cleanup function to be executed when the component unmounts
        return () => {
            axios.post('https://localhost:44300/api/MainPage/ResetDetailPage')
                .then(() => {
                    console.log("Detail page reset successfully.");
                })
                .catch(error => {
                    console.error("Error resetting detail page:", error);
                });
        };
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
    };

    const goto = (value) => {
        
        setMainImage(value);
    };

    const gotoTenure = (value) => {
        setActiveTenure(value);
    };

    if (loading) {
        // Step 2: Render the loading screen while data is being fetched
        return (
            <div className="loading-screen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <>

            <div className="container-fluid mt-3" style={{ width: '92%' }}>
                <div className=" card row">
                    <div className="col-md-12 part1">
                        <div className="row mt-3 mb-3">

                            {/* productZoom code starts from here */}

                            <div className="col-md-1">
                                <Slider {...settings} className="zoomSlider" >
                                    {/* <div className="item">
                                        <img
                                            src="https://imgur.com/0rzvV7p.png"
                                            className={`w-100 ${mainImage === "https://imgur.com/0rzvV7p.png" ? "abc" : ""}`}
                                            onClick={() => goto("https://imgur.com/0rzvV7p.png")}
                                           
                                        />
                                        { console.log("1")}
                                    </div> */}
                                    <div className="item">
                                        <img src="https://imgur.com/0rzvV7p.png"
                                            className={`w-100 ${mainImage === "https://imgur.com/0rzvV7p.png" ? "abc" : ""}`}

                                            onClick={() => goto("https://imgur.com/0rzvV7p.png")}></img>
                                        {console.log("2")}
                                    </div>

                                    <div className="item">
                                        <img src="https://imgur.com/LoTekX3.png"
                                            className={`w-100 ${mainImage === "https://imgur.com/LoTekX3.png" ? "abc" : ""}`}
                                            onClick={() => goto("https://imgur.com/LoTekX3.png")}></img>
                                        {console.log("3")}
                                    </div>
                                    <div className="item">
                                        <img src="https://i.imgur.com/zy5T84Z.png"
                                            className={`w-100 ${mainImage === "https://i.imgur.com/zy5T84Z.png" ? "abc" : ""}`}
                                            onClick={() => goto("https://i.imgur.com/zy5T84Z.png")}></img>
                                        {console.log("3")}
                                    </div>
                                    <div className="item">
                                        <img src="https://i.imgur.com/zy5T84Z.png"
                                            className={`w-100 ${mainImage === "https://i.imgur.com/zy5T84Z.png" ? "abc" : ""}`}
                                            onClick={() => goto("https://i.imgur.com/zy5T84Z.png")}></img>
                                        {console.log("3")}
                                    </div>
                                    <div className="item">
                                        <img src="https://imgur.com/OxXHLtf.png"
                                            className={`w-100 ${mainImage === "https://imgur.com/OxXHLtf.png" ? "abc" : ""}`}
                                            onClick={() => goto("https://imgur.com/OxXHLtf.png")}></img>
                                        {console.log("3")}
                                    </div>
                                    <div className="item">
                                        <img src="https://imgur.com/T1FjlT3.png"
                                            className={`w-100 ${mainImage === "https://imgur.com/T1FjlT3.png" ? "abc" : ""}`}
                                            onClick={() => goto("https://imgur.com/T1FjlT3.png")}></img>
                                        {console.log("3")}
                                    </div>






                                </Slider>
                            </div>
                            <div className="col-md-7">
                                <div className="productZoom">
                                    <InnerImageZoom zoomType="hover" zoomScale={2} src={mainImage} />
                                </div>

                            </div>
                            {/* productZoom code ends here */}



                            {/* productInfo code starts from here */}
                            <div className="col-md-4 productInfo">
                            <h5>{products.length ? products[0].ProductName : ''}</h5>
                                <div className="d-flex align-items-center">
                                    <div class="star-rating">
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                                        </ul>
                                    </div>
                                    <span>({products.length ? products[0].Rating : ''} Review)</span>


                                </div>

                                <div className="priceSec d-flex align-items-center">
                                    <div className="d-flex flex-column">
                                        <span className="text-g priceLarge">Rs {products.length ? products[0].DiscountedPrice : ''}</span>
                                        <span style={{fontSize:'13px',fontWeight:'800',color:'grey'}}>Monthly Rent</span>
                                    </div>


                                    <div className="ml-2 d-flex flex-column">
                                        <span className="text-org">26% off</span>
                                        <span className="text-light"><strike>Rs {products.length ? products[0].OriginalPrice : ''}</strike></span>
                                    </div>

                                </div>

                                <div className="mt-3">
                                    <span className="text-org">Refundable Deposit: Rs 1200</span>
                                    


                                    <p style={{ marginTop: "32px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                               
                            </p> </div>

                            <div className="productSize flex-wrap" >
                                <span >Tenure:</span>
                                <div>
                                <ul className="list list-inline flex-wrap">
                                    <li className="list-inline-item"><a className={`tag ${activeTenure === 3 ? "active" : ""}`} onClick={() => gotoTenure(3)}>3 Month</a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeTenure === 6 ? "active" : ""}`} onClick={() => gotoTenure(6)}>6 Month</a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeTenure === 12 ? "active" : ""}`} onClick={() => gotoTenure(12)}>12 Month</a></li>
                                </ul></div>
                            </div>

                            <div className="addCartSection pt-2 pb-4 mt-4 d-flex align-items-center">
                                <div className="counterSec mr-2">

                                </div>
                                <button className="btn-g btn-lg addToCartBtn">
                                    <ShoppingCartIcon />
                                    Add To Cart
                                </button>
                                <button className="btn-g btn-lg ">
                                    <FavoriteBorderIcon />

                                </button>
                                <button className="btn-g btn-lg ">
                                    <ShareIcon />

                                </button>
                            </div>

                        </div>
                        {/* productInfo code ends here */}
                    </div>

                </div>


            </div>


            <div className="card mt-5 p-5 detailsPageTabs">
                <div className="customTabs">
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <Button onClick={() => setActiveTabs(0)}>Description</Button>
                        </li>
                        <li className="list-inline-item">
                            <Button onClick={() => setActiveTabs(1)}>Additional Info</Button>
                        </li>
                        <li className="list-inline-item">
                            <Button onClick={() => setActiveTabs(2)}> Reviews</Button>

                        </li>
                    </ul>
                    {activeTabs === 0 && (
                        <div className="tabContent">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            </p>
                            <br />
                            <h2>Packing & Delivery</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            </p>
                            <br />

                            <h2>Suggested Uses</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            </p>
                            <br />

                        </div>
                    )}
                    {activeTabs === 1 && (
                        <div className="tabContent">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr class="stand-up">
                                            <th>Stand Up</th>
                                            <td>
                                                <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                            </td>
                                        </tr>
                                        <tr class="folded-wo-wheels">
                                            <th>Folded (w/o wheels)</th>
                                            <td>
                                                <p>32.5″L x 18.5″W x 16.5″H</p>
                                            </td>
                                        </tr>
                                        <tr class="folded-w-wheels">
                                            <th>Folded (w/ wheels)</th>
                                            <td>
                                                <p>32.5″L x 24″W x 18.5″H</p>
                                            </td>
                                        </tr>
                                        <tr class="door-pass-through">
                                            <th>Door Pass Through</th>
                                            <td>
                                                <p>24</p>
                                            </td>
                                        </tr>
                                        <tr class="frame">
                                            <th>Frame</th>
                                            <td>
                                                <p>Aluminum</p>
                                            </td>
                                        </tr>
                                        <tr class="weight-wo-wheels">
                                            <th>Weight (w/o wheels)</th>
                                            <td>
                                                <p>20 LBS</p>
                                            </td>
                                        </tr>
                                        <tr class="weight-capacity">
                                            <th>Weight Capacity</th>
                                            <td>
                                                <p>60 LBS</p>
                                            </td>
                                        </tr>
                                        <tr class="width">
                                            <th>Width</th>
                                            <td>
                                                <p>24″</p>
                                            </td>
                                        </tr>
                                        <tr class="handle-height-ground-to-handle">
                                            <th>Handle height (ground to handle)</th>
                                            <td>
                                                <p>37-45″</p>
                                            </td>
                                        </tr>
                                        <tr class="wheels">
                                            <th>Wheels</th>
                                            <td>
                                                <p>12″ air / wide track slick tread</p>
                                            </td>
                                        </tr>
                                        <tr class="seat-back-height">
                                            <th>Seat back height</th>
                                            <td>
                                                <p>21.5″</p>
                                            </td>
                                        </tr>
                                        <tr class="head-room-inside-canopy">
                                            <th>Head room (inside canopy)</th>
                                            <td>
                                                <p>25″</p>
                                            </td>
                                        </tr>
                                        <tr class="pa_color">
                                            <th>Color</th>
                                            <td>
                                                <p>Black, Blue, Red, White</p>
                                            </td>
                                        </tr>
                                        <tr class="pa_size">
                                            <th>Size</th>
                                            <td>
                                                <p>M, S</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>)}

                    {activeTabs === 2 && (
                        <div className="tabContent">
                            <div className="row">
                                <div className="col-md-9">

                                    <h3>Customer Review</h3>
                                    <br />
                                    <div className="card p-3 reviewsCard flex-row">
                                        <div className="image" style={{ width: '100px' }}>
                                            <div className="rounded-circle">
                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                            </div>
                                            <span className="text-g d-flex justify-content-center font-weight-bold">Sienna</span>
                                        </div>

                                        <div className="info pl-5">
                                            <div className="d-flex align-item-center">
                                                <h5 className="text-light">December 4,2022 at 3:12</h5>


                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <Rating name="half-rating" defaultValue={3} precision={0.5} />
                                        </div>


                                    </div>
                                    <div className="card p-3 reviewsCard flex-row">
                                        <div className="image" style={{ width: '100px' }}>
                                            <div className="rounded-circle">
                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                            </div>
                                            <span className="text-g d-flex justify-content-center font-weight-bold">Sienna</span>
                                        </div>

                                        <div className="info pl-5">
                                            <div className="d-flex align-item-center">
                                                <h5 className="text-light">December 4,2022 at 3:12</h5>


                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <Rating name="half-rating" defaultValue={3} precision={0.5} />
                                        </div>


                                    </div>
                                    <div className="card p-3 reviewsCard flex-row">
                                        <div className="image" style={{ width: '100px' }}>
                                            <div className="rounded-circle">
                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                            </div>
                                            <span className="text-g d-flex justify-content-center font-weight-bold">Sienna</span>
                                        </div>

                                        <div className="info pl-5">
                                            <div className="d-flex align-item-center">
                                                <h5 className="text-light">December 4,2022 at 3:12</h5>


                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <Rating name="half-rating" defaultValue={3} precision={0.5} />
                                        </div>


                                    </div>
                                    <div className="card p-3 reviewsCard flex-row">
                                        <div className="image" style={{ width: '100px' }}>
                                            <div className="rounded-circle">
                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                            </div>
                                            <span className="text-g d-flex justify-content-center font-weight-bold">Sienna</span>
                                        </div>

                                        <div className="info pl-5">
                                            <div className="d-flex align-item-center">
                                                <h5 className="text-light">December 4,2022 at 3:12</h5>


                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                            </p>
                                        </div>
                                        <div className="ml-auto">
                                            <Rating name="half-rating" defaultValue={3} precision={0.5} />
                                        </div>


                                    </div>
                                    <br />
                                    <form className="reviewForm">
                                        <h4>Add a review</h4>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Write a review"></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Name"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Email"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Website"></input>
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <Button className="btn-g btn-lg">Submit Review</Button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    )}



                </div>

            </div>

        </div >


        </>

    )
}
export default DetailsPage;