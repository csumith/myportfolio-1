import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../images/profile.png";
import "../Component/css/Home.css";

const Home = () => {
  return (
    <div className="cover">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <center>
              <div className="profile-image hvr-bounce-in">
                <div className="item">
                  <img
                    src={Profile}
                    alt="Sumit "
                    className="img-fluid"
                    id="profile"
                  />
                </div>
                <div className="circle First"></div>
                <div className="circle Second"></div>
                <div className="circle Third"></div>
                <div className="circle Fourth"></div>
              </div>
              <p className="display-3  text-light">Sumit Chouhan</p>
              <h5 className="text-light">Front End Developer, MERN Stack</h5>
              <p className="text-light lead">
              An excellent academic record, ability to understand and develop , knowledge frontend, and a strong understanding of technologies. I seek to work as a frontend Engineer to further my knowledge in the IT domain and utilize my skills
              </p>
              <NavLink to={"/contact"} className="btn btn-success mx-2 my-2">
                <i className="fa-solid fa-briefcase"></i>
                Hire Me
              </NavLink>
              <NavLink to={"/resumedownload"} className="btn btn-success mx-2">
                <i className="fa-solid fa-cloud-arrow-down"></i>
                Download CV
              </NavLink>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
