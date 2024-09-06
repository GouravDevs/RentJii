import React, { useState, useEffect } from 'react';
import LoginForm from './Login'; // Import your LoginForm component here
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../RentJiiLogo.jpeg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




export default function Nav() {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  const [showElectronicsDropdown, setShowElectronicsDropdown] = useState(false); // State to control the visibility of Electronics dropdown
  const [applianceFilter, setApplianceFilter] = useState([]);
  const [electronicFilter, setElectronicFilter] = useState([]);
  const [wfhFilter, setWfhFilter] = useState([]);


  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  }

  const goToCart = () => {
    navigate('/shoppingCart');
  }

  const handleApplianceClick = (applianceName) => {
    if (applianceName === 'Refrigerator') {
      gotoRefrigeratorDetails();
    } else {
      // Handle other appliance names if needed
      console.log(`Navigating to details for ${applianceName}`);
      // Navigate to a default route or handle as needed
    }
  };
  const gotoRefrigeratorDetails = () => {
    console.log("Navigating to refrigerator details...");
    navigate('/refrigeratorProductListing');
  };

  useEffect(() => {
    // Add or remove 'no-scroll' class from body based on showLoginForm state
    if (showLoginForm) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showLoginForm]);

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };

  const onCloseLoginForm = () => {
    setShowLoginForm(false);
  };
  //console.log(user.name);

  const getApplianceFilter = () => {
    axios.get('https://localhost:44300/api/MainPage/GetApplianceFilter')
      .then(response => {
        console.log("Response data:", response.data);
        setApplianceFilter(JSON.parse(response.data));
        //setPost(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const getElectronicsFilter = () => {
    axios.get('https://localhost:44300/api/MainPage/GetElectronicsFilter')
      .then(response => {
        console.log("Response data:", response.data);
        setElectronicFilter(JSON.parse(response.data));
        //setPost(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const getWfhFilter = () => {
    axios.get('https://localhost:44300/api/MainPage/GetWfhFilter')
      .then(response => {
        console.log("Response data:", response.data);
        console.log("response dd", response);
        setWfhFilter(JSON.parse(response.data));

      }).catch(error => {
        console.log("error fetching the data", error);
      })

  }


  return (
    <div>

      <div className={`main-navbar shadow-sm fixed-top ${showLoginForm ? 'blur' : ''}`}>

        <div className="top-navbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1 my-auto d-none d-sm-none d-md-block d-lg-block">
                <h5 className="brand-name">RentJii</h5>
              </div>

              <div className="col-md-1 my-auto d-none d-sm-none d-md-block d-lg-block">
                <img style={{ height: '20px', width: '20px' }} src={logo} />
              </div>
              <div className="col-md-4 my-auto">
                <form role="search">
                  <div className="input-group">
                    <input type="search" placeholder="Search your product" className="form-control" />
                    <button className="btn bg-white" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-1 my-auto">
                <div className="dropdown">
                  <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={getApplianceFilter}>
                   City
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {electronicFilter.map(appliance => (

                      <li><a className="dropdown-item" href="#">{appliance.appliance_name}</a></li>

                    ))}
                  </ul>
                </div>
              </div>
              {isAuthenticated && (
                <div className="col-md-1 my-auto">

                  <h7>Hello,{user.name.substring(0, 9)}</h7>

                </div>
              )}
              {!isAuthenticated && (
                <div className="col-md-1 my-auto">

                  <h7>Hello,user</h7>

                </div>
              )}

              <div className="col-md-4 my-auto">
                <ul className="nav justify-content-end">
                  <li className="nav-item" onClick={() => goToCart()}>
                    <a className="nav-link" href="#">
                      <i className="fa fa-shopping-cart" ></i> Cart (0)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-heart"></i> Wishlist (0)
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-user"></i> Username
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" onClick={() => loginWithRedirect()}><i className="fa fa-user"></i> Login/SignUp</a></li>
                      <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                      <li><a className="dropdown-item" href="#"><i className="fa fa-heart"></i> My Wishlist</a></li>
                      <li><a className="dropdown-item" href="#" ><i className="fa fa-shopping-cart"></i> My Cart</a></li>
                      <li><a className="dropdown-item" href="#" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><i className="fa fa-sign-out" ></i> Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
              Funda Ecom
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleHomePage}>Home</a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={getApplianceFilter}>
                      Appliances
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {applianceFilter.map(appliance => (
                        <li key={appliance.appliance_name}>
                          <a className="dropdown-item" href="#" onClick={() => handleApplianceClick(appliance.appliance_name)}>{appliance.appliance_name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={getElectronicsFilter}>
                      Electronics
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                      {electronicFilter.map(electronic => (
                        <li key={electronic.electronic_name}><a className="dropdown-item" href="#">{electronic.electronic_name}</a></li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      Furnitures
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><a className="dropdown-item" href="#">City 1</a></li>
                      <li><a className="dropdown-item" href="#">City 2</a></li>
                      <li><a className="dropdown-item" href="#">City 3</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" onClick={getWfhFilter}>
                      WFH Essentials
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {wfhFilter.map(response => (
                        <li key={response.wfhEssential_name}><a className="dropdown-item" href="#">{response.wfhEssential_name}</a></li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {showLoginForm && <LoginForm onClose={onCloseLoginForm} />}
    </div>
  )
}
