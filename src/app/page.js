import "./globals.css";
import RecentlyViewed from "./component/Home/RecentlyViewed";
import Reviews from "./component/Home/Reviews";

export default function Home() {
  return (
    <>
      <Reviews />
      <RecentlyViewed />
    </>

    // <>
    //   <section className="hero-section bg-img" id="home">
    //     <div className="container">
    //       <div className="row align-items-center justify-content-between g-3 g-lg-5">
    //         <div className="col-lg-5 align-self-start">
    //           <div className="hero-content">
    //             <div className="title-sm my-4">
    //               <h4 className="text-success">Certificated Doctors</h4>
    //             </div>
    //             <div className="hero-header">
    //               <h1 className="display-6 lh-base fw-medium">
    //                 Search and find
    //                 <span className="text-primary"> our clinic </span>for better
    //                 solution
    //               </h1>
    //               <p>
    //                 Expands Access To Care For Patients And Supports Community
    //                 Health Staff And Junior Doctors. Consult With Online Doctors
    //                 In Worldwide - Book Appointment With Doctors.
    //               </p>
    //             </div>
    //             <div className="hero-btn mt-4">
    //               <a href="login.html" className="btn btn-primary"><i
    //                 className="mdi mdi-file-document-edit-outline me-2"></i>Make
    //                 an Appointment</a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-7 align-self-end">
    //           <div className="img-part ms-auto">
    //             <img src="./static/images/doctor-team.png" alt="doctor" className="img-fluid img-width" />
    //             <div className="img-text text-center p-3 pb-1 rounded-3 z-n1">
    //               <i className="mdi mdi-ambulance"></i>
    //               <p className="my-2 fw-semibold">24 Hour Doctor</p>
    //               <div className="mb-3">
    //                 <span>We Provide 24/7 Medical Services</span>
    //               </div>
    //             </div>
    //             <div className="img-text-1 text-start rounded-3 px-3 p-2">
    //               <i className="mdi mdi-doctor"></i>
    //               <div className="text">
    //                 <p className="pt-2 pb-2 ms-4 fw-semibold mb-0">
    //                   Best Doctor In Our Hospital
    //                 </p>
    //                 <div className="ms-4">
    //                   <span>All Department</span>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="img-text-2 text-center p-2 px-3 rounded-3">
    //               <i className="mdi mdi-cast-education"></i>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="section about-section bg-light" id="services">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-12">
    //           <div className="about-header text-center">
    //             <h1>Health services for you</h1>
    //             <p>We are always here to listening and understanding</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="about-content mt-5">
    //         <div className="row align-items-center justify-content-center g-4">
    //           <div className="col-lg-2 col-md-6">
    //             <div className="icon-text p-4 pb-3 text-center shadow">
    //               <i className="mdi mdi-virus"></i>
    //               <p className="mt-4 fw-semibold">Covid-19 Test</p>
    //             </div>
    //           </div>
    //           <div className="col-lg-2 col-md-6">
    //             <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
    //               <i className="mdi mdi-tooth"></i>
    //               <p className="mt-4 fw-semibold text-light">Dental Care</p>
    //             </div>
    //           </div>
    //           <div className="col-lg-2 col-md-6">
    //             <div className="icon-text p-4 pb-3 text-center shadow">
    //               <i className="mdi mdi-heart-pulse"></i>
    //               <p className="mt-4 fw-semibold">Heart Caring</p>
    //             </div>
    //           </div>
    //           <div className="col-lg-2 col-md-6">
    //             <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
    //               <i className="mdi mdi-bone"></i>
    //               <p className="mt-4 fw-semibold text-light">Orthopadic</p>
    //             </div>
    //           </div>
    //           <div className="col-lg-2 col-md-6">
    //             <div className="icon-text p-4 pb-3 text-center shadow">
    //               <i className="mdi mdi-clipboard-search-outline"></i>
    //               <p className="mt-4 fw-semibold">Research</p>
    //             </div>
    //           </div>
    //           <div className="col-lg-2 col-md-6">
    //             <div className="icon-text p-4 pb-3 bg-primary text-center shadow">
    //               <i className="mdi mdi-lungs"></i>
    //               <p className="mt-4 fw-semibold text-light">Lungs</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="section services-section">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-8">
    //           <div className="about-header text-center">
    //             <h1 className="lh-base">
    //               Why Choose
    //               <span className="text-primary">CareWave Plus </span>Home care ?
    //             </h1>
    //             <p>
    //               The medical profession is the most respected profession in the
    //               world. No matter where you work, you as a doctor
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="services-content mt-5">
    //         <div className="row align-items-center justify-content-center g-4">
    //           <div className="col-lg-3 col-md-6">
    //             <div className="content-main bg-light p-4 rounded-3 shadow-sm">
    //               <i className="mdi mdi-medical-bag"></i>
    //               <h4 className="my-4 lh-base">Medical Advices &amp; Check Ups</h4>
    //               <a href="#!" className="text-primary fw-medium">Learn More</a>
    //             </div>
    //           </div>
    //           <div className="col-lg-3 col-md-6">
    //             <div className="content-main bg-light p-4 rounded-3 shadow-sm">
    //               <i className="mdi mdi-needle"></i>
    //               <h4 className="my-4 lh-base">Trusted Medical Treatment</h4>
    //               <a href="#!" className="text-primary fw-medium">Learn More</a>
    //             </div>
    //           </div>
    //           <div className="col-lg-3 col-md-6">
    //             <div className="content-main bg-light p-4 rounded-3 shadow-sm">
    //               <i className="mdi mdi-store-24-hour"></i>
    //               <h4 className="my-4 lh-base">Emergency Help Aveilable 24/7</h4>
    //               <a href="#!" className="text-primary fw-medium">Learn More</a>
    //             </div>
    //           </div>
    //           <div className="col-lg-3 col-md-6">
    //             <div className="content-main bg-light p-4 rounded-3 shadow-sm">
    //               <i className="mdi mdi-doctor"></i>
    //               <h4 className="my-4 lh-base">Research Professional</h4>
    //               <a href="#!" className="text-primary fw-medium">Learn More</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="features-section bg-light" id="features">
    //     <div className="container">
    //       <div className="row align-items-center justify-content-between">
    //         <div className="col-lg-5">
    //           <div className="features-img">
    //             <img src="./static/images/doctor-2.png" alt="doctor" className="img-fluid" />
    //             <div className="img-text-2 text-center bg-white p-3 pb-3 rounded-3">
    //               <i className="mdi mdi-doctor"></i>
    //               <p className="mt-2 mb-0 fw-semibold">Dr. Aenna backer</p>
    //               <span>New York, United states</span>
    //               <div className="hero-btn mt-3">
    //                 <a href="#!" className="btn btn-primary"><i
    //                   className="mdi mdi-file-document-edit-outline me-2 p-0 bg-primary fs-5 text-light"></i>Appointment</a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-5 align-self-start">
    //           <div className="features-header pt-3">
    //             <div className="title-sm">
    //               <h4 className="text-success">Our Features</h4>
    //             </div>
    //             <h1 className="lh-base mt-3">
    //               We are always ensure best
    //               <span className="text-primary">Medical treatment</span> for Your
    //               Health
    //             </h1>
    //             <p>
    //               Pain Management Treatment Options Pain and symptom management
    //               is one of the primary goals of palliative and hospice care
    //             </p>
    //           </div>
    //           <div className="features-list d-flex mt-2">
    //             <i className="mdi mdi-check-circle"></i>
    //             <p className="pt-2 ms-4">Top Specialist Doctor</p>
    //           </div>
    //           <div className="features-list d-flex mt-2">
    //             <i className="mdi mdi-check-circle"></i>
    //             <p className="pt-2 ms-4">State of the art Doctor services</p>
    //           </div>
    //           <div className="features-list d-flex mt-2">
    //             <i className="mdi mdi-check-circle"></i>
    //             <p className="pt-2 ms-4">Discount for all medical treatment</p>
    //           </div>
    //           <div className="features-list d-flex mt-2">
    //             <i className="mdi mdi-check-circle"></i>
    //             <p className="pt-2 ms-4">Enrollment is Quick and easy</p>
    //           </div>
    //           <div className="feature-btn mt-3 mb-5">
    //             <a href="#!" className="btn btn-primary"><i
    //               className="mdi mdi-file-document-edit-outline me-2"></i>Make
    //               an Appointment</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="section department-section pb-4" id="departments">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-7">
    //           <div className="department-header text-center">
    //             <div className="title-sm">
    //               <h4 className="text-success">Our Department</h4>
    //             </div>
    //             <h1 className="lh-base mt-3">
    //               We have all <span className="text-primary">Department</span>
    //             </h1>
    //             <p>
    //               Dermatologists Have problems with your skin, hair, nails? ·
    //               Endocrinologists These are experts on hormones and metabolism.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mt-5 g-3">
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-human-wheelchair"></i>
    //               <h5 className="mt-1">Crutches</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-radiology-box"></i>
    //               <h5 className="mt-1">X-ray</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-heart-pulse"></i>
    //               <h5 className="mt-1">Pulmonary</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-lungs"></i>
    //               <h5 className="mt-1">Cardiology</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-tooth"></i>
    //               <h5 className="mt-1">Dental Care</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-brain"></i>
    //               <h5 className="mt-1">Neurology</h5>
    //             </div>
    //           </a>
    //         </div>

    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-needle"></i>
    //               <h5 className="mt-1">Medical</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-bone"></i>
    //               <h5 className="mt-1">Orthopadic</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-water"></i>
    //               <h5 className="mt-1">Blood Bank</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-wheelchair-accessibility"></i>
    //               <h5 className="mt-1">Surgical</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-mother-nurse"></i>
    //               <h5 className="mt-1">Nursing</h5>
    //             </div>
    //           </a>
    //         </div>
    //         <div className="col-lg-2 col-md-6">
    //           <a href="#!">
    //             <div className="department-content text-center p-3 bg-light rounded-3 shadow-sm">
    //               <i className="mdi mdi-head-snowflake"></i>
    //               <h5 className="mt-1">Psychiarty</h5>
    //             </div>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="section team-section" id="team">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-7">
    //           <div className="department-header text-center">
    //             <div className="title-sm">
    //               <h4 className="text-success">Our Doctor</h4>
    //             </div>
    //             <h1 className="lh-base mt-3">
    //               We Have Best <span className="text-primary">Doctor</span>
    //             </h1>
    //             <p>
    //               TeamDoctor provides organisations with an essential
    //               video-based online training course for all employees which
    //               gives a baseline of knowledge.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mt-5 align-items-center">
    //         <div className="col-lg-12">
    //           <div className="swiper mySwiper swiper-btn">
    //             <div className="swiper-wrapper mb-5">
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3">
    //                   <img src="./static/images/doctor-4.png" alt="doctor" className="img-fluid" />
    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Morak jhon</h4>
    //                     <p>Anesthesiologists</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3">
    //                   <img src="./static/images/doctor-3.png" alt="doctor" className="img-fluid" />

    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Aenna backer</h4>
    //                     <p>Cardiologist</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3">
    //                   <img src="./static/images/doctor-5.png" alt="doctor" className="img-fluid" />

    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Morish Jemsh</h4>
    //                     <p>Dermatologists</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3">
    //                   <img src="./static/images/doctor-6.png" alt="doctor" className="img-fluid" />

    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Olivia Nebar</h4>
    //                     <p>Endocrinologists</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3">
    //                   <img src="./static/images/doctor-7.jpg" alt="doctor" className="img-fluid" />

    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Hory Mant</h4>
    //                     <p>Anesthesiologists</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3">
    //                   <img src="./static/images/doctor-8.jpg" alt="doctor" className="img-fluid" />

    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Vrutki vahut</h4>
    //                     <p>Cardiologist</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3">
    //                   <img src="./static/images/doctor-9.jpg" alt="doctor" className="img-fluid" />

    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Krish Bardan</h4>
    //                     <p>Dermatologists</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide">
    //                 <div className="doctor-img shadow-sm p-3 mb-2">
    //                   <img src="./static/images/doctor-10.jpg" alt="doctor" className="img-fluid" />

    //                   <div className="doctor-detail mt-3 text-center">
    //                     <h4>Dr. Teri Hrio</h4>
    //                     <p>Endocrinologists</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-pagination"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="section testimonial-section bg-light overflow-hidden" id="reviews">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-7">
    //           <div className="testimonial-header text-center">
    //             <div className="title-sm">
    //               <h4 className="text-success">Testimonial</h4>
    //             </div>
    //             <h1 className="lh-base mt-3">
    //               Patient's <span className="text-primary"> Feedback</span>
    //             </h1>
    //             <p>
    //               This review shows that incorporating patient feedback of their
    //               experience into research on quality patient-centred care
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row align-items-center justify-content-center mt-5">
    //         <div className="col-lg-12">
    //           <div className="swiper-container testi-slider pb-5 overflow-hidden">
    //             <div className="swiper-wrapper">
    //               <div className="swiper-slide bg-light">
    //                 <div className="testi-box p-3 position-relative">
    //                   <div className="user-img shadow-sm p-3 bg-white rounded-3">
    //                     <img src="./static/images/img-1.jpg" alt="doctor"
    //                       className="img-fluid rounded-circle w-25 mx-auto" />
    //                     <div className="user-detail mt-3 text-center">
    //                       <h4 className="mb-3 text-primary">Nesri Mratin</h4>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <p>
    //                         Lorem ipsum dolor sit, amet consectetur adipisicing
    //                         elit. Suscipit, error!
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>

    //               </div>
    //               <div className="swiper-slide bg-light">
    //                 <div className="testi-box p-3 position-relative">
    //                   <div className="user-img shadow-sm p-3 bg-white rounded-3">
    //                     <img src="./static/images/img-2.jpg" alt="doctor"
    //                       className="img-fluid rounded-circle w-25 mx-auto" />
    //                     <div className="user-detail mt-3 text-center">
    //                       <h4 className="mb-3 text-primary">Jhon Gaurg</h4>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <p>
    //                         Lorem ipsum dolor sit, amet consectetur adipisicing
    //                         elit. Suscipit, error!
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide bg-light">
    //                 <div className="testi-box p-3 position-relative">
    //                   <div className="user-img shadow-sm p-3 bg-white rounded-3">
    //                     <img src="./static/images/img-4.jpg" alt="doctor"
    //                       className="img-fluid rounded-circle w-25 mx-auto" />
    //                     <div className="user-detail mt-3 text-center">
    //                       <h4 className="mb-3 text-primary">Wiky Moty</h4>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <p>
    //                         Lorem ipsum dolor sit, amet consectetur adipisicing
    //                         elit. Suscipit, error!
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="swiper-slide bg-light">
    //                 <div className="testi-box p-3 position-relative">
    //                   <div className="user-img shadow-sm p-3 bg-white rounded-3">
    //                     <img src="./static/images/img-3.png" alt="doctor"
    //                       className="img-fluid rounded-circle w-25 mx-auto" />
    //                     <div className="user-detail mt-3 text-center">
    //                       <h4 className="my-3 text-primary">Jeky Jodh</h4>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <i className="mdi mdi-star"></i>
    //                       <p>
    //                         Lorem ipsum dolor sit, amet consectetur adipisicing
    //                         elit. Suscipit, error!
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-pagination"></div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </section>

    //   <footer className="section footer-section bg-dark">
    //     <div className="container">
    //       <div className="row justify-content-between g-2">
    //         <div className="col-lg-4">
    //           <a className="brand-logo" href="#!">
    //             <img src="./static/images/logo-light.png" alt="" height="22" />
    //           </a>
    //           <p className="mt-4 text-white-50">
    //             CareWave Plus is our country's health insurance program for
    //             people age 65 or older.
    //           </p>
    //           <div className="footer-btn mt-4">
    //             <h5>Subscribe :</h5>
    //             <a href="#!" className="btn btn-light">Subscribe to more</a>
    //           </div>
    //         </div>

    //         <div className="col-lg-2">
    //           <h5>Department :</h5>
    //           <ul>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Anesthesiologists</a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Cardiologists
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Dermatologists</a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Ophthalmology</a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Neurology</a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Hematology</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="col-lg-2">
    //           <h5>Quick Links :</h5>
    //           <ul>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> About Us</a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Contact</a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Support</a>
    //             </li>
    //             <li>
    //               <a href="#!"><i className="mdi mdi-chevron-right"></i> Latest Blogs</a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="col-lg-4">
    //           <h5>Contact Us :</h5>
    //           <ul>
    //             <li>
    //               <span className="text-white"><span className="mdi mdi-map-marker font-size-18"></span>
    //               </span>
    //               <a href="#!">New York , Unaited States</a>
    //             </li>
    //             <li>
    //               <span className="text-white"><span className="mdi mdi-email-outline font-size-18"></span>
    //               </span>
    //               <a href="#!">jsjahidmini@gmail.com</a>
    //             </li>
    //             <li>
    //               <span className="text-white"><span className="mdi mdi-phone-outline font-size-18"></span>
    //               </span>
    //               <a href="#!">+125 202 2536</a>
    //             </li>
    //           </ul>
    //           <div className="media-icon">
    //             <ul className="list-inline d-flex flex-wrap social m-0">
    //               <li className="me-1">
    //                 <a href="#!" className="social-icon"><i className="mdi mdi-facebook"></i></a>
    //               </li>
    //               <li className="mx-1">
    //                 <a href="#!" className="social-icon"><i className="mdi mdi-twitter"></i></a>
    //               </li>
    //               <li className="mx-1">
    //                 <a href="#!" className="social-icon"><i className="mdi mdi-linkedin"></i></a>
    //               </li>
    //               <li className="mx-1">
    //                 <a href="#!" className="social-icon"><i className="mdi mdi-google-plus"></i></a>
    //               </li>
    //               <li className="mx-1">
    //                 <a href="#!" className="social-icon"><i className="mdi mdi-microsoft-xbox"></i></a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>

    //   <div className="footer-copyright p-4">
    //     <div className="container">
    //       <div className="text-center">
    //         <p className="text-white m-0">© 2024 . Crafted with by DreamersDesire</p>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
