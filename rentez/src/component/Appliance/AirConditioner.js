import React from 'react';
import icon from '../../ACIcon.png';
import Footer from '../Footer';

const Product = ({ imgSrc, discount, title, price }) => (
  <div className="col-md-4">
    <div className="product py-4">
      {discount && <span className={`off bg-${discount.type}`}>{discount.label}</span>}
      <div className="text-center">
        <img src={imgSrc} width="200" alt={title} />
      </div>
      <div className="about text-center">
        <h5>{title}</h5>
        <span>{price}</span>
      </div>
      <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
        <button className="btn btn-primary text-uppercase">Buy Now</button>
        <div className="add">
          
          <span className="product_fav"><i class="fa-solid fa-cart-shopping"></i></span>

        </div>
      </div>
    </div>
  </div>
);

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

const ProductList = () => (
    <div>
  <div className="container-fluid mt-2 mb-5">
    <div className="d-flex justify-content-between align-items-center" style={{ marginLeft: '8%', marginRight: '8%', backgroundColor: 'white' }}>
      <div className="d-flex align-items-center">
        <h3><b>Air Conditioner</b></h3>
        <img src={icon} alt="AC Icon" style={{ marginLeft: '10px' }} />
      </div>
      <div className="d-flex">
        <div className="dropdown me-2" style={{ border: '1px solid #ccc',borderRadius:'12px' }}>
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"> 
            Choose Other Product
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Fridge</a></li>
            <li><a className="dropdown-item" href="#">Air Conditioner</a></li>
            <li><a className="dropdown-item" href="#">Washing Machine</a></li>
          </ul>
        </div>
        <div className="dropdown" style={{ border: '1px solid #ccc',borderRadius:'12px'  }}>
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
          {[
            { imgSrc: "https://i.imgur.com/nOFet9u.jpg", discount: { label: "-25% OFF", type: "success" }, title: "XRD Active Shoes", price: "$1,999.99" },
            { imgSrc: "https://i.imgur.com/VY0R9aV.png", discount: { label: "SALE", type: "warning" }, title: "Hygen Smart watch", price: "$123.43" },
            { imgSrc: "https://i.imgur.com/PSGrLdz.jpg", discount: null, title: "Acer surface book 2.5", price: "$1,999.99" },
            { imgSrc: "https://i.imgur.com/OdRSpXG.jpg", discount: { label: "-10% OFF", type: "success" }, title: "Dell XPS Surface", price: "$1,245.89" },
            { imgSrc: "https://i.imgur.com/X2AwTCY.jpg", discount: null, title: "Acer surface book 5.5", price: "$2,999.99" },
            { imgSrc: "https://i.imgur.com/QQwcBpF.png", discount: { label: "-5% OFF", type: "success" }, title: "Xps smart watch 5.0", price: "$999.99" },
            { imgSrc: "https://i.imgur.com/PSGrLdz.jpg", discount: { label: "SALE", type: "warning" }, title: "Acer surface book 8.5", price: "$3,999.99" },
            { imgSrc: "https://i.imgur.com/m22OQy9.jpg", discount: null, title: "Tyko Running shoes", price: "$99.99" },
            { imgSrc: "https://i.imgur.com/OdRSpXG.jpg", discount: null, title: "Dell surface book 5", price: "$1,999.99" },
          ].map(product => (
            <Product key={product.title} {...product} />
          ))}
        </div>
      </div>
    </div> 
    
  </div><Footer/>
  </div>
);

export default ProductList;
