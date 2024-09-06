import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ icon, title, description, onClick }) => (
  <div className="col-md-2">
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-body text-center" style={{ height: '150px' }}>
        <i className={`fas fa-${icon} fa-3x mb-3`} style={{ color: '#249bee' }}></i>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const MainPageDemo = () => {
  const navigate = useNavigate();

  const handleApplianceClick = () => {
    navigate('/appliancePage'); 
  };

  const handleElectronicsClick = () => {
    navigate('/electronicsPage'); 
  };

  return (
    <div className="container">
      <div className='d-flex justify-content-center'>
        <Card icon="snowflake" title="Appliance" onClick={handleApplianceClick} />
        <Card icon="camera" title="Electronics" onClick={handleElectronicsClick}/>
        <Card icon="couch" title="Furniture" />
        <Card icon="chair" title="WFH Essentials" />
      </div>
    </div>
  );
};

export default MainPageDemo;
