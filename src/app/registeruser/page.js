'use client';
import Link from 'next/link'
import React from 'react'
import axiosInstance from '@/utils/axiosInstance'
import { useState } from 'react';
function page() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        password: '',
        mobile_number: '',
        country: '',
        agreeToTerms: false,
        receiveMarketing: false,
        country_id:1
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axiosInstance.post('/register', formData);
          console.log('Response:', response.data);
          // Handle successful response
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
    
      return (
        <div className='container-fluid'>
          <div className='row ml-4'>
            <div className='col-6'>
              <div className='row'>
                <div className='col-6'>
                  <Link className='' href={`/login`}>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                      <div className=''>
                        <i className="mdi mdi-arrow-left fs-2" size={2}></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
    
              <div className='row'>
                <div className='col-12'>
                  <div className='d-flex justify-content-center'>
                    <h1>Create a business account</h1>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <p>You're almost! Create your new account for email by completing these details</p>
                  </div>
                  <form onSubmit={handleSubmit} className='row mt-4 d-flex justify-content-center'>
                    <div className='col-8'>
                      <div className="mb-3">
                        <label htmlFor="firstname">First name <span className="text-danger">*</span></label>
                        <input
                          name="firstname"
                          type="text"
                          id="firstname"
                          className="form-control"
                          placeholder="Enter firstname"
                          autoComplete="firstname"
                          autoFocus
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="mb-3">
                        <label htmlFor="lastname">Last name <span className="text-danger">*</span></label>
                        <input
                          name="lastname"
                          type="text"
                          id="lastname"
                          className="form-control"
                          placeholder="Enter lastname"
                          autoComplete="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="mb-3">
                        <label htmlFor="password">Password <span className="text-danger">*</span></label>
                        <input
                          name="password"
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter Password"
                          autoComplete="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
    
                      <div className="mb-3">
                        <label htmlFor="mobile_number">Mobile Number <span className="text-danger">*</span></label>
                        <div className="input-group mb-3">
                          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">+966</button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                          </ul>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                            name="mobile_number"
                            value={formData.mobile_number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
    
                      <div className="mb-3">
                        <label htmlFor="country">Country <span className="text-danger">*</span></label>
                        <select
                          className="form-select"
                          name='country'
                          aria-label="Default select example"
                          value={formData.country}
                          onChange={handleChange}
                        >
                          <option>Please Select a Country</option>
                          <option value="1">Pakistan</option>
                          <option value="2">India</option>
                          <option value="3">Saudi Arab</option>
                        </select>
                      </div>
    
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            required
                            type="checkbox"
                            name="agreeToTerms"
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                          />
                          <label className="form-check-label px-2" htmlFor="agreeToTerms">
                            I agree to the Privacy Policy, Terms of Use and Terms of Service
                          </label>
                        </div>
                      </div>
    
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            required
                            type="checkbox"
                            name="receiveMarketing"
                            id="receiveMarketing"
                            checked={formData.receiveMarketing}
                            onChange={handleChange}
                          />
                          <label className="form-check-label px-2" htmlFor="receiveMarketing">
                            I agree to receive marketing notifications with offers and news
                          </label>
                        </div>
                      </div>
    
                      <div className="mt-3">
                        <button className="btn btn-primary w-100 btn-padding waves-effect waves-light" type="submit">Create Account</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <img className='imgwh-100' src="https://www.fresha.com/assets/_next/static/images/Image2-b598cd77921dc7f9a62fb3ec31bcaa48.webp" alt="Business Image" />
            </div>
          </div>
        </div>
      );
    
}

export default page