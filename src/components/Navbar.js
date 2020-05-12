import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import Img from "../images/logo2.png";
import Img1 from "../images/h1.jpg";
import Img2 from "../images/h2.jpg";
import Img3 from "../images/h3.jpg";
import Img4 from "../images/h4.jpg";
import Img5 from "../images/h5.jpg";
import Img6 from "../images/h6.jpg";
import Img7 from "../images/h7.jpg";
import Img8 from "../images/h8.jpg";
import Img9 from "../images/h9.jpg";
import Img10 from "../images/h10.jpg";

import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <header>
          <nav>
            <div className="nav-container ">
              <img src={Img} />
              <div className="btn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <ul>
              <div className="navbar" style={{ color: "#fffaf0" }}>
                <Link to="/">
                  <li>Home</li>
                </Link>

                <Link to="About">
                  <li>About Us</li>
                </Link>

                <Link to="/Curriculum">
                  <li>Curriculum</li>
                </Link>
                <Link to="/Extra_Activities">
                  <li>Extra Activities</li>
                </Link>
                <Link to="/Fee_Policy">
                  <li>IJK Policy</li>
                </Link>
              </div>
            </ul>
          </nav>
          {/* slideshow */}
          <div className="slider">
            <figure>
              <div className="slide">
                <img src={Img1} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img2} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img3} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img4} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img5} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img6} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img7} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img8} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img9} className="img-responsive" />
              </div>
              <div className="slide">
                <img src={Img10} className="img-responsive" />
              </div>
            </figure>
          </div>
        </header>
        {/* end of header */}
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.div`


.navbar{
background: var(--mainDark)
height: 30px;

}
  nav ul {
    list-style: none;
    display : none;
    background :var(--mainDark);
  }
nav  ul li {
    display : block;
    background: var(--mainDark);
    padding: 15px;
    font-size: 20px;
    text-decoration: none !important;
    text-transform: uppercase !important;
    color: #fffaf0 !important;
    transition: color 1s ease, background 1s ease, padding 1s ease;
  }
  ul > div :hover{
    background: #474747;
    color: #e0e0ce;
    text-decoration: none !important;
    padding-left : 10px;
  }
  }
  .nav-container > img{
    width:100px;
    align-self:center;
  }
.nav-container{
  padding: 0 30px;
  background :var(--mainDark);
  border-bottom: 2px solid #fffaf0;
  display:flex;
  justify-content : space-between;
  height: 50px;
}
.bar{
  width: 30px;
  height : 2px;
  margin:7px;
  border: 1px solid #fffaf0;
}
.btn{
  padding: 2px;
  display : inline-block;
  border: 2px solid #fffaf0;
  align-self: center;
}
nav {
  position : fixed;
  width : 100%;
 
}

nav{
  flex: 0 0 auto;
  z-index:10;
}

@media screen and (min-width:776px) {
  .nav-container {
    display: none !important;
  }
  nav ul {
    display : flex !important;
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(13, 19, 23, 0.8);
  }
  
 nav ul li {
   background: transparent;
 }
 ul > div :hover{
   background : transparent;
  color : green !important;
 }
 .navbar{
   background : transparent;
 }
}
`;
