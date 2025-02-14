import React from 'react';

import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onClose }) => {

  const navigate = useNavigate();

  const getRegister = () => {
    console.log("Button clicked");
    navigate('/register'); // This should navigate to the RegisterPage component
  };



  return (
    <section className="gradient-form" style={{ backgroundColor: '#eee', height: '100vh' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>
                    <form>
                      <p>Please login to your account</p>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Phone number or email address" />
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example22" className="form-control" />
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log in</button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>
                      <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-danger" onClick={getRegister}>Create new</button>
                  </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className='justify-content-end cross-btn'>
                    <button className="btn-close" onClick={onClose}></button>
                  </div>
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
