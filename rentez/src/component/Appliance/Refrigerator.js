import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import iconRef from '../../Refrigerator_Icon.png';
import { useNavigate } from 'react-router-dom';
import BreadcrumbsComponent from '../Breadcrumb';

const Product = ({ imgSrc, discount_label, discount_type, title, twelve_month,six_month,three_month,deposit }) => {
  

  // This will log the imgSrc whenever the Product component renders
  const navigate = useNavigate();


  const goToCart = () => {
    axios.post('https://localhost:44300/api/MainPage/AddShoppingCart', {
      ProductName: title,        // Matches @ProductName
      Quantity: 1,               // Assuming default quantity is 1, you can adjust as needed
      ThreeMonths: three_month,  // Matches @ThreeMonths
      SixMonths: six_month,      // Matches @SixMonths
      TwelveMonths: twelve_month, // Matches @TwelveMonths
      ImageSrc: imgSrc,          // Matches @ImageSrc
      Deposit: deposit,          // Matches @Deposit
      DeliveryDays: 7        
    })
    .then(response => {
      console.log("Data saved:", response.data);
      navigate('/shoppingCart', {
        state: {
          imgSrc,
          title,
          twelve_month,
          six_month,
          three_month,
          deposit
        }
      });
    })
    .catch(error => {
      console.error("Error saving data:", error);
    });
  };

  const goToDetailsPage = () => {
    navigate('/acDetailPage');
  }




  return (
    <div className="col-md-4">
      <div className="product py-4">
        {discount_type && <span className={`off bg-${discount_type}`}>{discount_label}</span>}
        <div className="text-center">
          <img src={imgSrc} width="350" height="350" alt={title} />
        </div>
        <div className="about text-center">
          <h6>{title}</h6>
          <span>{twelve_month}/mo</span>
        </div>
        <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
          <button className="btn btn-primary text-uppercase" onClick={() => goToDetailsPage()}>View Detail</button>
          <div className="add">
            <span className="product_fav" onClick={() => goToCart()}><i className="fa-solid fa-cart-shopping"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};


const CheckboxItem = ({ id, label, count, checked }) => (
  <div className="d-flex justify-content-between mt-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id={id} checked={checked} />
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
    <span>{count}</span>
  </div>
);

const CategoryItem = ({ label, count }) => (
  <div className="d-flex justify-content-between mt-2">
    <span>{label}</span>
    <span>{count}</span>
  </div>
);

const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:44300/api/MainPage/GetRefrigeratorDetails')
      .then(response => {
        console.log("Response data:", response.data);
        setProducts(JSON.parse(response.data));
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(products[0]);

  return (

    <div>
      <div className="container-fluid mt-2 mb-5">
        <div className="d-flex justify-content-between align-items-center" style={{ marginLeft: '8%', marginRight: '8%', backgroundColor: 'white' }}>
          <div className="d-flex align-items-center">
            <h3><b>Refrigerator</b></h3>
            <img src={iconRef} alt="Refrigerator Icon" style={{ marginLeft: '10px' }} />
          </div>
          <div className="d-flex">
            <div className="dropdown me-2" style={{ border: '1px solid #ccc', borderRadius: '12px' }}>
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Choose Other Product
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Fridge</a></li>
                <li><a className="dropdown-item" href="#">Air Conditioner</a></li>
                <li><a className="dropdown-item" href="#">Washing Machine</a></li>
              </ul>
            </div>
            <div className="dropdown" style={{ border: '1px solid #ccc', borderRadius: '12px' }}>
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Choose Variant
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">nsajcj</a></li>
                <li><a className="dropdown-item" href="#">abc</a></li>
                <li><a className="dropdown-item" href="#">def</a></li>
              </ul>
            </div>
          </div>
        </div>

      
        <div className="row g-2 justify-content-center" style={{ marginTop: '2%' }}>
          <div className="col-md-10">
            <div className="row g-2">
              {products.map(product => (
                <Product
                  key={product.title}
                  imgSrc={product.imgSrc}
                  discount={product.discount}
                  discount_label={product.discount_label}
                  discount_type={product.discount_type}
                  title={product.title}
                  twelve_month={product.twelve_month}
                  six_month={product.six_month}
                  three_month={product.three_month}
                  deposit={product.deposit}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
