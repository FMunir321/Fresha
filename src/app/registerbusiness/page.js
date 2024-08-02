import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='container-fluid'>
            <div className='row ml-4'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6'>
                            <Link className='' href={`/login`} >
                                <div className="d-flex mt-3 justify-content-between align-items-center" >
                                    <div className='' >
                                        <i className="mdi mdi-arrow-left fs-2" size={2}></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <div className='d-flex justify-content-center'>
                                <h1>
                                    Create a business account</h1>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <p>
                                    You're almost! Create your new account for email by completing these details</p>
                            </div>
                            <div className='row mt-4 d-flex justify-content-center '>

                                <div className='col-8'>
                                    <div className="mb-3">
                                        <label for="firstname">first name <span className="text-danger">*</span></label>
                                        <input name="firstname" type="text" id="firstname" className="form-control "
                                            placeholder="Enter firstname" autocomplete="firstname" autofocus />
                                    </div>

                                    <div className="mb-3">
                                        <label for="lastname">Last name <span className="text-danger">*</span></label>
                                        <input name="lastname" type="text" id="lastname" className="form-control "
                                            placeholder="Enter lastname" autocomplete="lastname" autofocus />
                                    </div>

                                    <div className="mb-3">
                                        <label for="password">Password<span className="text-danger">*</span></label>
                                        <input name="password" type="password" id="password" className="form-control "
                                            placeholder="Enter Password" autocomplete="password" autofocus />
                                    </div>


                                    <div className="mb-3">
                                        <label for="mobile_number">Mobile Number<span className="text-danger">*</span></label>
                                        <div className="input-group mb-3">
                                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">+966</button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                        </div>
                                    </div>



                                    <div className="mb-3">
                                        <label for="country">Country <span className="text-danger">*</span></label>
                                        <select className="form-select" name='country' aria-label="Default select example">
                                            <option selected>Please Select a Country </option>
                                            <option value="1">Pakistan</option>
                                            <option value="2">India</option>
                                            <option value="3">Saudi Arab</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" required type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label px-2" for="flexCheckDefault">
                                                I agree to the Privacy Policy, Terms of Use and Terms of Service
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mt-3">

                                        <button className="btn btn-primary  w-100 btn-padding waves-effect waves-light"
                                            type="submit">Log In</button>
                                    </div>

                                </div>


                            </div>



                        </div>
                    </div>
                </div>

                <div className='col-6 '>
                    <img className='imgwh-100' src="https://www.fresha.com/assets/_next/static/images/Image2-b598cd77921dc7f9a62fb3ec31bcaa48.webp"></img>
                </div>

            </div>
        </div>
    )
}

export default page