import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='container-fluid'>


            <div className='row ml-4 '>

                <div className='row'>
                    <div className='col-12'>
                        <Link className='' href={`/login`} >
                            <div class="d-flex mt-3 justify-content-between align-items-center" >
                                <div className='' >
                                    <i class="mdi mdi-arrow-left fs-2" size={2}></i>
                                </div>

                              

                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row mt-2 justify-content-center'>
                    <div className='col-12 col-md-6'>
                        <div class="card rounded-3 ">
                            <div class="card-body">

                                <p class="card-text">Account Setup</p>
                                <h1>What's your business name?</h1>
                                <p >This is the brand name your client will see. Your billing and legal name can be added later</p>

                                <div class="card rounded-3 shadow">
                                    <div class="card-body">

                                        <div class="mb-3">
                                            <label for="business_name">
                                                Business name <span class="text-danger">*</span></label>
                                            <input name="business_name" type="text" id="business_name" class="form-control "
                                                placeholder="Enter business name" autocomplete="business_name" autofocus />
                                        </div>

                                        <div class="mb-3">
                                            <label for="website">Website <span class="text-info">(Optional)</span></label>
                                            <input name="website" type="text" id="website" class="form-control "
                                                placeholder="Enter website" autocomplete="website" autofocus />
                                        </div>



                                    </div>
                                </div>
                            </div>

                            <div className='' >
                            <button class="btn btn-primary  w-100 btn-padding waves-effect waves-light"
                                type="submit">Cotinue</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page