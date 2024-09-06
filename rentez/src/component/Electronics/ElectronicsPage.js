import React from 'react';
import rentEZ from '../../RentEZ.png'
import speaker from '../../Speaker.jpg'
import camera from '../../Camera.jpg'
import harddisk from '../../HardDisk.jpg'
import phone from '../../Mobile.jpg'
import Footer from '../Footer';

export default function ElectronicsPage() {

    const Card = ({ imageSrc, title, description }) => (
        <div className="col-md-2">
          <div className="card">
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
                    <Card imageSrc={camera} title="Camera" />
                    <Card imageSrc={speaker} title="Speaker" />
                    <Card imageSrc={phone} title="Mobile Phone"  />
                    <Card imageSrc={harddisk} title="Hard Disk"  />
                </div>
            </div>

<Footer/>
        </div>
    );
}
