import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RentItNow() {
    const [products, setProducts] = useState([]);
	const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://localhost:44300/api/MainPage/GetMainPage_RentItNow')
            .then(response => {
                console.log("Response data:", response.data);
                setProducts(JSON.parse(response.data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

	const goToViewDetail = (ProductID) => {
		console.log("productID=", ProductID);

		// Sending the ProductID in the request body
		axios.post('https://localhost:44300/api/MainPage/AddDetailPage/', ProductID, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => {
			console.log("Data saved:", response.data);
			navigate('/acDetailPage'); // Navigate to the details page
		})
		.catch(error => {
			console.error("Error saving data:", error);
		});
	};
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const productChunks = chunkArray(products, 4);

    return (
        <div className="card" style={{ margin: '24px' }}>
            <div className="row">
                <div className="col-md-12">
                    <h2>RentIt <b>Now</b></h2>
                    <div id="myCarousel1" className="carousel slide" data-ride="carousel" data-interval="0">

                        <ol className="carousel-indicators">
                            {productChunks.map((_, index) => (
                                <li key={index} data-target="#myCarousel1" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                            ))}
                        </ol>

                        <div className="carousel-inner">
                            {productChunks.map((chunk, chunkIndex) => (
                                <div key={chunkIndex} className={`carousel-item ${chunkIndex === 0 ? 'active' : ''}`}>
                                    <div className="row">
                                        {chunk.map((product, productIndex) => (
                                            <div key={productIndex} className="col-sm-3">
                                                <div className="thumb-wrapper">
                                                    <div className="img-box">
                                                        <img src={product.ImgSrc} className="img-fluid" alt={product.ProductName} />
                                                    </div>
                                                    <div className="thumb-content">
                                                        <h4>{product.ProductName}</h4>
                                                        <p className="item-price">
                                                            <strike>Rs {product.OriginalPrice}</strike> 
                                                            <span>Rs {product.DiscountedPrice}</span>
                                                        </p>
                                                        <div className="star-rating">
                                                            <ul className="list-inline">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <li key={i} className="list-inline-item">
                                                                        <i className={`fa ${i < product.Rating ? 'fa-star' : 'fa-star-o'}`}></i>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <a href="#" className="btn btn-primary"  onClick={() => goToViewDetail(product.ProductID)}>View Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
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
    );
}
