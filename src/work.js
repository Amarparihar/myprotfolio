import { Animated } from "react-animated-css";

export default function Work() {
  return (
    <>
      <section className="work-section">
        <div className="container-fluid ">
          <Animated
            animationInDelay={800}
            animationInDuration={500}
            animationIn="fadeInDown"
            isVisible={true}
          >
            <div className="row">
              <div className="col-lg-12 my-5" id="project">
                <p>Projects</p>
              </div>
            </div>
          </Animated>
          <Animated
            animationInDelay={1500}
            animationInDuration={700}
            animationIn="slideInLeft"
            isVisible={true}
          >
            <div className="row">
              <div className="col-lg-4 mx-my-2 ">
                <div className="card" id="card">
                  <img
                    className="card-img-top"
                    src={"/CardPics/urlshortener.png"}
                    alt="slideimg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">URL Shortening</h4>
                    <p className="card-text">
                      {" "}
                      This is a URL Shrtening project in Full-Stack.In this
                      project User will paste the Long URL and the it will
                      genrate the Short URL after clicked the Short URL
                      button.and that genrated URL wil redirects to the Long URL
                      page.
                    </p>
                    <ul className="technologyused">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>ReactJs</li>
                      <li>NodeJs</li>
                      <li>MongoDB</li>
                    </ul>
                  

                  
                    <a
                      href="https://github.com/Amarparihar/urlshortner-react"
                      class="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fas fa-code"></i>
                      </span>
                    </a>
                    <a
                      href="https://optimistic-lamarr-71a0f7.netlify.app"
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i class="fas fa-external-link-alt"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mx-my-2">
                <div className="card" id="card">
                  <img
                    className="card-img-top"
                    src={"/CardPics/Forgotpass.png"}
                    alt="slideimg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Forgot Password and Covid-19 Data
                    </h4>
                    <p className="card-text">
                      {" "}
                      This is a Reset Password Flow and Covid-19 Statewise Data
                      project in Full-Stack.In this project User will get the
                      Covid_19 statewise Data such as active cases, total cases,
                      recovered cases, total deaths,etc. and if user forgot the
                      password the on forgot password page user has to enter
                      registered email id and then after clicked the button it
                      will genrate the string and user will received an email
                      along with the random string and user has to clicked that
                      string then it will redirects to the reset-password page
                      and there user will able to reset their password
                    </p>
                    <ul className="technologyused">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>ReactJs</li>
                      <li>NodeJs</li>
                      <li>MongoDB</li>
                    </ul>
                  

                 
                    <a
                      href="https://github.com/Amarparihar/reset-password-react"
                      class="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fas fa-code"></i>
                      </span>
                    </a>
                    <a
                      href="https://modest-nobel-97ff69.netlify.app"
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i class="fas fa-external-link-alt"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mx-my-2">
                <div className="card" id="card">
                  <img
                    className="card-img-top"
                    src={"/CardPics/adminpage.png"}
                    alt="slideimg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Frontend Admin Page</h4>
                    <p className="card-text">
                      {" "}
                      This is a basic FrontEnd Admin Page. The page contains
                      dashboard, user list, product list, etc. In this we can
                      create users update users and also delete users and same
                      for Products. And I am storing the data onto Mock Api.
                    </p>
                    <ul className="technologyused">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>ReactJs</li>
                    </ul>
                 

                 
                    <a
                      href="https://github.com/Amarparihar/frontend-admin-page"
                      class="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fas fa-code"></i>
                      </span>
                    </a>
                    <a
                      href="https://sharp-murdock-d3a556.netlify.app"
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i class="fas fa-external-link-alt"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
          <Animated
            animationInDelay={1800}
            animationInDuration={1000}
            animationIn="slideInRight"
            isVisible={true}
          >
            <div className="row mt-5">
              <div className="col-lg-4 mx-my-2">
                <div className="card" id="card">
                  <img
                    className="card-img-top"
                    src={"/CardPics/weatherApi.png"}
                    alt="slideimg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Countries Weather Data</h4>
                    <p className="card-text">
                      {" "}
                      This is a basic FrontEnd project.In this project I have
                      used the weather Rest Api and display the
                      Population,Region and weather information of all the
                      countries.
                    </p>
                    <ul className="technologyused">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>Javascript</li>
                    </ul>
                  
                    <a
                      href="https://github.com/Amarparihar/WeatherAPI"
                      class="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fas fa-code"></i>
                      </span>
                    </a>
                    <a
                      href="https://tender-euclid-152318.netlify.app"
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i class="fas fa-external-link-alt"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mx-my-2">
                <div className="card" id="card">
                  <img
                    className="card-img-top"
                    src={"/CardPics/pricecard.png"}
                    alt="slideimg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">React Cards</h4>
                    <p className="card-text">
                      {" "}
                      This is a basic cards design in react for frontend used.
                    </p>
                    <ul className="technologyused">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>ReactJs</li>
                    </ul>
                  
                    <a
                      href="https://github.com/Amarparihar/reactcards"
                      class="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fas fa-code"></i>
                      </span>
                    </a>
                    <a
                      href="https://vigorous-archimedes-ebad17.netlify.app"
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i class="fas fa-external-link-alt"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mx-my-2">
                <div className="card" id="card">
                  <img
                    className="card-img-top"
                    src={"/CardPics/newspaper.png"}
                    alt="slideimg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Newspaper</h4>
                    <p className="card-text">
                      {" "}
                      I have created a simple Newspaper using Bootstrap.
                    </p>
                    <ul className="technologyused">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                  
                    <a
                      href="https://github.com/Amarparihar/Newspaper"
                      class="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fas fa-code"></i>
                      </span>
                    </a>
                    <a
                      href="https://wizardly-hoover-6e4409.netlify.app"
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i class="fas fa-external-link-alt"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Animated>
          <Animated
            animationInDelay={2000}
            animationInDuration={1000}
            animationIn="slideInLeft"
            isVisible={true}
          >
            <div className="row mt-5">
              <div className="col-lg-4 mx-my-2">
                <div className="card" id="card">
                  <img
                    className="card-img-top"
                    src={"/CardPics/resume.png"}
                    alt="slideimg"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Resume</h4>
                    <p className="card-text">
                      {" "}
                      This is a basic Resume design in Html css.
                    </p>
                    <ul className="technologyused">
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                 
                    <a
                      href="https://github.com/Amarparihar/Resume"
                      class="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fas fa-code"></i>
                      </span>
                    </a>
                    <a
                      href="https://relaxed-chandrasekhar-b40c41.netlify.app"
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i class="fas fa-external-link-alt"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </Animated>
        </div>
      </section>
    </>
  );
}
