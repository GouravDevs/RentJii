import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Footer from './Footer.js';
import { useLocation } from 'react-router-dom';

export default function ShoppingCart() {
  const [showPriceBreakout, setShowPriceBreakout] = useState(false);
  const [totalDeposit, setTotalDeposit] = useState();
  const [products, setProducts] = useState([]);
  const [selectedTenures, setSelectedTenures] = useState({}); // State to store selected tenures for each product

  const location = useLocation();
  const product = location.state;

  useEffect(() => {
    axios.get('https://localhost:44300/api/MainPage/GetShoppingCart')
      .then(response => {
        console.log("Response data:", response);
        setProducts(response.data.data); // Access the Data property in the response
        setTotalDeposit(response.data.totalDeposit);
        // Initialize selected tenures to 12 months (default)
        const initialTenures = response.data.data.reduce((acc, product) => {
          acc[product.CartID] = 'twelve_month';
          return acc;
        }, {});
        setSelectedTenures(initialTenures);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleTenureChange = (cartID, tenure) => {
    setSelectedTenures({
      ...selectedTenures,
      [cartID]: tenure
    });
  };
  console.log("selectedTenures=", selectedTenures);


  const getRentForTenure = (product, tenure) => {
    let rent;
    switch (tenure) {
      case 'three_month':
        rent = product.ThreeMonths;
        break;
      case 'six_month':
        rent = product.SixMonths;
        break;
      case 'twelve_month':
      default:
        rent = product.TwelveMonths;
    }
    return rent * product.Quantity;
  };

  


  const handleQuantityChange = (cartID, newQuantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.CartID === cartID ? { ...product, Quantity: newQuantity } : product
      )
    );

    // Update the total deposit based on the new quantity
    const product = products.find(product => product.CartID === cartID);
    const updatedDeposit = products.reduce((total, item) =>
      item.CartID === cartID ? total + item.Deposit * newQuantity : total + item.Deposit * item.Quantity, 0);

    setTotalDeposit(updatedDeposit);
  };


  const DeleteItems = (id, Deposit) => {
    console.log("deposit=" + Deposit);
    setTotalDeposit(totalDeposit - Deposit);
    axios.delete(`https://localhost:44300/api/MainPage/${id}`)
      .then(response => {
        const updatedCart = products.filter(product => product.CartID !== id);
        setProducts(updatedCart);
      })
      .catch(error => {
        console.error("Error deleting department:", error);
      });
  };

  const togglePriceBreakout = () => {
    setShowPriceBreakout(!showPriceBreakout);
  };

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {products.length} items</h5>
                </div>
                {products.map(product => (
                  <div className="card-body" key={product.CartID}>
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded">
                          <img
                            src={product.ImageSrc}
                            className="w-100"
                            alt="Product"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 mb-4 mb-lg-0">
                        <strong>{product.ProductName}</strong>
                        <div className="d-flex mt-1">
                          <div className="mr-auto">
                            <div>
                              <p className="mb-1"><strong>Delivery:</strong> 3-5 Days</p>
                              <p className="mb-1">
                                <strong>Rent:</strong> Rs {getRentForTenure(product, selectedTenures[product.CartID])}/mo
                              </p>
                              <p className="mb-1">
                                <strong>Deposit:</strong> Rs {product.Deposit * product.Quantity}
                              </p>

                            </div>
                          </div>
                          <div className="mb-4 mb-lg-0">
                            <div
                              style={{
                                border: '1px solid #ccc',
                                borderRadius: '12px',
                                height: '37px',
                                marginTop: '3px',
                              }}
                            >
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                              >
                                {selectedTenures[product.CartID] === 'three_month' ? '3 month' :
                                  selectedTenures[product.CartID] === 'six_month' ? '6 month' :
                                    selectedTenures[product.CartID] === 'twelve_month' ? '12 month' :
                                      'Tenure'}
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleTenureChange(product.CartID, 'three_month')}
                                  >
                                    3 month
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleTenureChange(product.CartID, 'six_month')}
                                  >
                                    6 month
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleTenureChange(product.CartID, 'twelve_month')}
                                  >
                                    12 month
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="qtyContainer">
                            <button
                              className="btn btn-primary px-2 qtyBtn"
                              onClick={() => handleQuantityChange(product.CartID, product.Quantity - 1)}
                              disabled={product.Quantity <= 1}  // Prevent the quantity from going below 1
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id={`quantity-${product.CartID}`}
                              min="1"
                              name="quantity"
                              value={product.Quantity}
                              type="number"
                              onChange={(e) => handleQuantityChange(product.CartID, parseInt(e.target.value, 10))}
                              className="qtyInput"
                            />

                            <button
                              className="btn btn-primary px-2 qtyBtn"
                              onClick={() => handleQuantityChange(product.CartID, product.Quantity + 1)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                        </div>

                        <div className="position-absolute bottom-0 start-1">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            title="Remove item"
                            onClick={() => DeleteItems(product.CartID, product.Deposit)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>
                      </div>



                    </div>



                  </div>
                ))}
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Expected shipping delivery</strong></p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p><strong>We accept</strong></p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-1">
                  <h5 className="mb-0">Payable Now</h5>
                </div>
                <div className="card-body pt-0 pb-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Refundable Deposit
                      <span>Rs {totalDeposit}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping Charges
                      <span>Rs 300</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        {/* <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong> */}
                      </div>
                      <span><strong>Rs {totalDeposit+300}</strong></span>
                    </li>
                  </ul>

                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>


              {/* Monthy Payable */}

              <div className="card mb-4">
                <div className="card-header py-1">
                  <h5 className="mb-0">Monthly Payable</h5>
                </div>
                <div className="card-body pt-0 pb-0">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Product Rent
                      <span>Rs 636/mo</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      GST
                      <span>Rs 50/mo</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        {/* <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong> */}

                      </div>

                      <span><strong>$53.98</strong></span>

                    </li>
                    <li className="list-group-item d-flex justify-content-between  border-0 px-0 mb-3">
                      <div>
                        <strong>First month rent</strong>
                        <strong>
                          <p className="mb-0">(Payable at time of delivery)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>Rs 44/mo</strong>
                        <strong>
                          <p className="mb-0">(tentative)</p>
                        </strong>
                        <strong>
                          <a href="#" onClick={togglePriceBreakout} style={{ color: '#007bff', fontSize: 'small' }}>
                            (View Detail)
                          </a>
                        </strong>

                      </span>

                    </li>
                  </ul>



                </div>
              </div>

            </div>
          </div>
          <div className={`sliding-card ${showPriceBreakout ? 'open' : ''}`}>
            <div className="card-body">
              <h6>Price Breakout Details:</h6>
              <p>Base Rent: Rs 600/mo</p>
              <p>GST: Rs 44/mo</p>
              {/* Add more details here as needed */}
              <button onClick={togglePriceBreakout} className="btn btn-primary mt-3">Close</button>
            </div>
          </div>
        </div>

      </section>


      <Footer style={{ marginTop: '10vh' }} />
    </div>

  );
}
