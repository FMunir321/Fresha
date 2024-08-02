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
                <div class="d-flex mt-3 justify-content-between align-items-center" >
                  <div className='' >
                    <i class="mdi mdi-arrow-left fs-2" size={2}></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-center'>
                <h1>
                  Fresha for business</h1>


              </div>

              <div className='d-flex justify-content-center'>
                <p>
                  Create an account or log in to manage your Fresha business.</p>
              </div>
              <div className='row mt-4 d-flex justify-content-center '>

                <div className='col-8'>
                  <div class="mb-3">
                    <label for="username">Username <span class="text-danger">*</span></label>
                    <input name="email" type="email" id="email" class="form-control "
                      placeholder="Enter email" autocomplete="email" autofocus />
                  </div>

                  <div class="mt-3">
                  
                    <button class="btn btn-primary  w-100 btn-padding waves-effect waves-light"
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