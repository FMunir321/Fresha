import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <Link className='' href={`/login`} >
                <div class="d-flex mt-3 mx-3 justify-content-between align-items-center" >

                    <div className='' >
                        <i class="mdi mdi-arrow-left fs-2" size={2}></i>
                    </div>
                </div>
            </Link>
            <div class="account-pages my-5 pt-5">
                <div class="container">
                    <div className='row'>
                        <div className='col-12'>

                        </div>
                    </div>
                    <div class="row justify-content-center pt-3">
                        <div class="col-md-12 col-lg-12 col-xl-12">
                            <div class="card overflow-hidden shadow">
                                <div class="bg-primary-subtle">
                                    <div class="row">
                                        <div class="col-7">
                                            <div class="text-primary p-4">
                                                <h5 class="text-primary">Sign up/log in</h5>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="card-body pt-2">
                                    <Link href={`/login`} >
                                        <div class="content-main px-3  d-flex justify-content-between align-items-center rounded-3 shadow" style={{ border: "1px solid black" }}>
                                            <div>
                                                <h4 class="my-4 lh-base">For Everyone</h4>
                                                <p>Book salons and spas near you
                                                </p>
                                            </div>

                                            <div className='' >
                                                <i class="mdi mdi-arrow-right fs-2" size={2}></i>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={`/login`} >
                                        <div class="content-main px-3 mt-2 d-flex justify-content-between align-items-center rounded-3 shadow" style={{ border: "1px solid black" }}>
                                            <div>
                                                <h4 class="my-4 lh-base">For Business</h4>
                                                <p>Manage and grow your business
                                                </p>
                                            </div>

                                            <div className='' >
                                                <i class="mdi mdi-arrow-right fs-2" size={2}></i>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page