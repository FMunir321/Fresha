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
                                <h1 > Sign up/log in</h1>


                            </div>
                            <div className='row mt-4 d-flex justify-content-center '>

                                <div className='col-8'>
                                    <Link href={`login`}>
                                        <div className=' shadow p-4 d-flex justify-content-between align-items-center w-100 bordery-primary'>
                                            <div>
                                                <h3 class="mt-4 fw-semibold">For Everyone</h3>
                                                <p>Book salons and spas near you</p>
                                            </div>
                                            <div className='black' >
                                                <i class="mdi mdi-arrow-right fs-2" size={2}></i>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                                <div className='col-8'>
                                    <Link href={`login`}>
                                        <div className=' shadow p-4 mt-2 d-flex justify-content-between align-items-center w-100 bordery-primary'>
                                            <div>
                                                <h3 class="mt-4 fw-semibold">For Business</h3>
                                                <p>Manage and grow your business</p>
                                            </div>
                                            <div className='black' >
                                                <i class="mdi mdi-arrow-right fs-2" size={2}></i>
                                            </div>
                                        </div>
                                    </Link>
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