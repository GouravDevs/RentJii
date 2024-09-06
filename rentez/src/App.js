import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './component/MainPage.js';
import Nav from './component/Nav.js';
import MainPageDemo from './component/MainPageDemo.js';
import Banner from './component/Banner.js';
import BannerDemo from './component/BannerDemo.js';
import Categories from './component/Categories.js';
import ProductListing from './component/ProductListing.js';
import RegisterPage from './component/RegisterPage.js';
import RentItNow from './component/RentItNow.js';

import Ba from './component/Ba.js';
import Footer from './component/Footer.js';
import LoginForm from './component/Login.js';
import AppliancePage from './component/Appliance/AppliancePage.js';
import ElectronicsPage from './component/Electronics/ElectronicsPage.js';
import AirConditioner from './component/Appliance/AirConditioner.js';
import Refrigerator from './component/Appliance/Refrigerator.js'
import Breadcrumb from './component/Breadcrumb.js'
import AcDetailPage from './component/Appliance/Details/ACDetails.js'
import ShoppingCart from './component/ShoppingCart.js';
function App() {
  return (
    <Router>
   
    <Nav/>
    <Breadcrumb/>
    <Routes>
    <Route path="/register" element={<RegisterPage/>} /> 
       
    <Route path="/" element={
    <>
     <BannerDemo/>
    <Categories/>
    <RentItNow/>


    <MainPageDemo/>
    <Footer/> 
    {/* <AppliancePage/> */}
    </>
  }/>
  
        <Route path="/product" element={<ProductListing/>} />
        <Route path="/appliancePage" element={<AppliancePage/>} />
        <Route path="/electronicsPage" element={<ElectronicsPage/>} />
        <Route path="/acDetailPage" element={<AcDetailPage/>} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />

        <Route path="/appliancePage/acProductListing" element={<AirConditioner/>} />

        <Route path="/appliancePage/refrigeratorProductListing" element={<Refrigerator/>} />
        <Route path="/refrigeratorProductListing" element={<Refrigerator/>} />
        
    </Routes>
   
    </Router>
    
   
  );
}

export default App;
