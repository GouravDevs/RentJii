import React from 'react';
import rentEZ from '../../RentEZ.png'
import refrigerator from '../../Refrigerator.png'
import AC from '../../AirCinditioner.jpg'
import tv from '../../TV.jpg'
import Footer from '../Footer';

import { useNavigate } from 'react-router-dom';

export default function AppliancePage() {

    const navigate = useNavigate();

    const handleOnClickAC=()=>{
       navigate('/appliancePage/acProductListing'); 
       console.log('ac added');
    }

    const handleOnClickRefrigerator=()=>{
      navigate('/appliancePage/refrigeratorProductListing'); 
      console.log('ac added');
   }


    const Card = ({ imageSrc, title, description,onClick }) => (
        <div className="col-md-2">
          <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="card-body text-center" style={{ height: '150px' }}>
              <img src={imageSrc} alt={title} className="img-fluid mb-3" style={{ maxHeight: '75px' }} /> {/* Set max height to fit the card */}
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      );
   

    return (
        <div>
            <h2>Just give it a shot buddy!</h2>
            {/* <b>Checkout our huge collection of appliances on rent</b> */}

            <h2> <b>Appliance</b></h2>

            <div className="container" style={{marginBottom:'200px'}}>
                <div className='d-flex justify-content-center'>
                    <Card imageSrc={AC} title="Air Conditioner" onClick={handleOnClickAC}/>
                    <Card imageSrc={refrigerator} title="Refrigerator" onClick={handleOnClickRefrigerator} />
                    <Card imageSrc={tv} title="Television"  />
                </div>
            </div>

<Footer/>
        </div>
    );
}
