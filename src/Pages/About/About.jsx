import React from "react";
import WebImg from "../../Assets/img/20220930_183853.jpg";
import "../About/About.css";



export const About = ({modal, setModal}) => {
  

  return (
    <div className="About">
      <div className="Hero">
        <div className="hero-txt">
          <h1 className="hero-main-word">
            Hi, I am <br />
            Khafizov Azizbek
          </h1>
          <p className="hero-main-txt">Frontend Developer</p>
          <div className="hero-btns">
            <button className="green-btn" type="submit">
              Download CV
            </button>
            <button  className="light-btn" type="submit" onClick={  () => setModal(!modal) }>
              Learn more
            </button>
          </div>
        </div>

        <div className="hero-bg">
          <img src={WebImg} alt="" />
        </div>
      </div>

      <div className="Contact">
        <div class="about">
          <div class="about-txt">
            <h2 class="main-txt">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>

          <div class="about-icons">
            <div class="icon-name">
              <i class="fa-solid fa-circle"></i>
              <h3>Full name</h3>
              <p>Your name goes here</p>
            </div>

            <div class="icon-name">
              <i class="fa-solid fa-circle"></i>
              <h3>Email Adress</h3>
              <p>Your name goes here</p>
            </div>

            <div class="icon-name">
              <i class="fa-solid fa-circle"></i>
              <h3>Full name</h3>
              <p>Your name goes here</p>
            </div>

            <div class="icon-name">
              <i class="fa-solid fa-circle"></i>
              <h3>Full name</h3>
              <p>Your name goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
