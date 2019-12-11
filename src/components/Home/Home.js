import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark"
        style={{
          height: "100vh",
          backgroundSize: "cover",
          backgroundImage: "url(https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
        }}>

        <div className="container-fluid">
          <div className="row  justify-content-center align-items-center d-flex text-center h-100">
            <div className="col-12 col-md-8  h-50 ">
              <h1 className="display-2  text-light mb-2 mt-5"><strong>Grow n Play</strong> </h1>
              <p className="lead  text-light mb-5">Grow, Play, Eat</p>
              <div className="btn-container-wrapper p-relative d-block  zindex-1">

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="info-section">
        <div className="container">
          <div className="head-box text-center mb-5">
            <h2>Features</h2>
            <h6 className="text-underline-primary">This is information panel</h6>
          </div>
          <div className="three-panel-block mt-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block-overlay text-center mb-5 p-lg-3">
                  <i className="fa fa-laptop box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
                  <h3>Meal Timetable</h3>
                  <p className="px-4">Teachers log breakfast, lunches, snacks, baby food, and bottles</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block-overlay text-center mb-5 p-lg-3">
                  <i className="fa fa-calendar box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
                  <h3>Share Photos & Videos</h3>
                  <p className="px-4">Teachers can capture all the learning moments for families</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block-overlay text-center mb-5 p-lg-3">
                  <i className="fa fa-bug box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
                  <h3>Bug Free Solutions</h3>
                  <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block-overlay text-center p-lg-3">
                  <i className="fa fa-cloud-upload box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
                  <h3>Cloud Storage</h3>
                  <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block-overlay text-center p-lg-3">
                  <i className="fa fa-diamond box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
                  <h3>Premium Features</h3>
                  <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block-overlay text-center p-lg-3">
                  <i className="fa fa-comments box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
                  <h3>24/7 Support</h3>
                  <p className="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="info-section bg-primary py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 content-half mt-md-0 pl-5 pt-4">
              <div className="head-box mb-5 pl-5 mt-2">
                <h2 className="text-white">Our Story</h2>
                <h6 className="text-white text-underline-rb-white">This is information panel</h6>
              </div>
              <ul className="pl-5">
                <li>
                  <i className="fa fa-laptop box-round-outline" aria-hidden="true"></i>
                  <span className="list-content">
                    <strong>Responsive Design</strong>
                    <br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </span>
                </li>

                <li>
                  <i className="fa fa-cloud-upload box-round-outline" aria-hidden="true"></i>
                  <span className="list-content">
                    <strong>Cloud Storage</strong>
                    <br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </span>
                </li>
                <li>
                  <i className="fa fa-diamond box-round-outline" aria-hidden="true"></i>
                  <span className="list-content">
                    <strong>Premium Features</strong>
                    <br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </span>
                </li>
              </ul>
            </div>
            <div className="col-md-6 p-0 m-0">
              <img src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div className="team-section py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="head-box text-center mb-5 col-md-12">
                <h2>Meet Our Team</h2>
                <h6 className="text-underline-primary mb-5">This is information panel</h6>
              </div>
              <div className="col-md-4 mb-md-0 mb-sm-4">
                <div className="member-box anim-lf t-bottom">
                  <img className="img-fluid" src="https://grafreez.com/wp-content/temp_demos/suffi/img/t-member-01.jpg" alt="" />
                  <div className="overlay-content">
                    <h3 className="text-white ml-3 my-0">Jim Gorden</h3>
                    <p className="text-white ml-3 mb-3">Developer</p>
                    <span className="socail-l ml-3 mb-3">
                      <a href="/" className="mr-2"><i className="fa fa-facebook box-circle-solid"></i></a>
                      <a href="/" className="mr-2"><i className="fa fa-twitter box-circle-solid"></i></a>
                      <a href="/"><i className="fa fa-dribbble box-circle-solid"></i></a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-md-0 mb-sm-4">
                <div className="member-box anim-lf t-bottom">
                  <img className="img-fluid" src="https://grafreez.com/wp-content/temp_demos/suffi/img/t-member-02.jpg" alt="" />
                  <div className="overlay-content">
                    <h3 className="text-white ml-3 my-0">Peyton Warren</h3>
                    <p className="text-white ml-3 mb-3">UI/UX</p>
                    <span className="socail-l ml-3 mb-3">
                      <a href="/" className="mr-2"><i className="fa fa-facebook box-circle-solid"></i></a>
                      <a href="/" className="mr-2"><i className="fa fa-twitter box-circle-solid"></i></a>
                      <a href="/"><i className="fa fa-dribbble box-circle-solid"></i></a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-md-0 mb-sm-4">
                <div className="member-box anim-lf t-bottom">
                  <img className="img-fluid" src="https://grafreez.com/wp-content/temp_demos/suffi/img/t-member-03.jpg" alt="" />
                  <div className="overlay-content">
                    <h3 className="text-white ml-3 my-0">Craig Thompson</h3>
                    <p className="text-white ml-3 mb-3">Manager</p>
                    <span className="socail-l ml-3 mb-3">
                      <a href="/" className="mr-2"><i className="fa fa-facebook box-circle-solid"></i></a>
                      <a href="/" className="mr-2"><i className="fa fa-twitter box-circle-solid"></i></a>
                      <a href="/"><i className="fa fa-dribbble box-circle-solid"></i></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;