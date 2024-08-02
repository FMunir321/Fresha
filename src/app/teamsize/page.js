import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='container-fluid'>


            <div className='row ml-4 '>

                <div className='row'>
                    <div className='col-12'>
                        <Link className='' href={`/login`} >
                            <div className="d-flex mt-3 justify-content-between align-items-center" >
                                <div className='' >
                                    <i className="mdi mdi-arrow-left fs-2" size={2}></i>
                                </div>



                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row mt-2 justify-content-center'>
                    <div className='col-12 col-md-6'>
                        <div className="card rounded-3 ">
                            <div className="card-body">


                                <h1>What's your team size?</h1>
                                <p>This will help us set up your calendar correclty. Don't worry,this doesn't change the price - you have unlimited team for free
                                </p>

                                <div className="card rounded-3 shadow">
                                    <div className="card-body">
                                        it's just me
                                    </div>
                                </div>

                                <div className="card rounded-3 shadow">
                                    <div className="card-body">
                                        2-5 people
                                    </div>
                                </div>

                                <div className="card rounded-3 shadow">
                                    <div className="card-body">
                                        6-10 people
                                    </div>
                                </div>

                                <div className="card rounded-3 shadow">
                                    <div className="card-body">
                                        11+ people
                                    </div>
                                </div>

                            </div>

                            <div className='' >
                                <button className="btn btn-primary  w-100 btn-padding waves-effect waves-light"
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