import React, { Component } from "react";
import styled from "styled-components";
import Img1 from "../images/smile.jpg";
import Img2 from "../images/img2h.jpg";
import Img3 from "../images/img3h.jpg";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div className="row justify-content-md-center px-5  icon ">
          <div className="col-lg-3 col-sm-12  p-5">
            <h2>
              {" "}
              <i class="fas fa-school"></i> Schooling Life
            </h2>
          </div>
          <div className="col-lg-3 col-sm-12  p-5">
            <h2>
              {" "}
              <i class="fas fa-user-graduate"></i> Qualified Staff
            </h2>
          </div>
          <div className="col-lg-3 col-sm-12  p-5">
            <h2>
              <i class="fas fa-running"></i>Sports Activities
            </h2>
          </div>
          <div className="col-lg-3 col-sm-12  p-5">
            <h2>
              {" "}
              <i class="fas fa-sms"></i> SMS Alert
            </h2>
          </div>
        </div>
        <div class="row home">
          <div className="col-lg-6 col-sm-12"></div>
          <div className="col-lg-6 col-sm-12">
            <h2>
              <b>OUR MESSAGE:</b>{" "}
            </h2>
            <p>
              Dear parents, The management and staff welcome you to the IJK
              SHOOLING SYSTEM. Thank you for choosing us as the provider of your
              child’s education. Our story of growth has been phenomenal. Our
              focus is steadfastly on raising the quality of education to bring
              it at par. We nurture a healthy and eternal perspective that will
              help your child to weather the inevitable storms of life. Together
              with our highly qualified and dedicated faculty we aim to raise
              individuals who will be the leaders of the 21st century and who
              will make positive contribution to the society. We hope that you
              will share with us, the belief that every child should have the
              opportunity to meet their potential and develop the academic,
              creative, social and spiritual skills. True development of a
              personality is a harmonious blending of the rational and
              emotional. This is when the role of parents chip in. The art of
              this amalgamation takes place only if parents are able to show
              love in right direction. Love the child but reject the specific
              wrong actions. Let him discriminate between rights and wrong. We
              try to develop each student’s maximum potential by providing not
              only the most efficient teaching methods but also individual
              guidance and assistance. This document aims to give you, the
              parent, an insight into our curriculum framework. We trust that
              you and your child will enjoy your association with our school.
              Please do not hesitate to contact/visit us for any queries,
              concerns and suggestions.
            </p>
            <p>Yours sincerely,</p>
            <p>
              <b>SOHAIB KHAN</b>
              (Administrator IJK)
            </p>
            <p>
              <b>MUMTAZ AHMED JAVED</b>
              (Director, IJK)
            </p>
          </div>
        </div>
        {/* gallery */}

        <div className="cnt">IJK Memoreis</div>
        <div className="gallery">
          <div className="col-lg-3 col-md-6 col-sm-12 im1"></div>
          <div className="col-lg-3 col-md-6 col-sm-12 im2"></div>
          <div className="col-lg-3 col-sm-12 im3"></div>
        </div>
        <div className="gallery">
          <div className="col-lg-3 col-sm-12 im4"></div>
          <div className="col-lg-3 col-sm-12 im5"></div>
          <div className="col-lg-3 col-sm-12 im6"></div>
        </div>
        <div className="gallery">
          <div className="col-lg-3 col-sm-12 im7"></div>
          <div className="col-lg-3 col-sm-12 im8"></div>
          <div className="col-lg-3 col-sm-12 im9"></div>
        </div>
      </HomeWrapper>
    );
  }
}
const HomeWrapper = styled.div`
  .cnt {
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-family: "Pacifico", cursive;
  }
`;
export default Home;
