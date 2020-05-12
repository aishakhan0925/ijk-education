import React, { Component } from "react";
import styled from 'styled-components';
import Bhai from "../images/sohaib.jpg";
import Collage from "../images/collage.jpg";
import Img from "../images/mission.jpg";


class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <div className="row bg2">
          <div className="col-lg-6 col-sm-12 sir">
          </div>

          <div className="col-lg-6 col-sm-12 bg1 ">
            <h1>
              How we started?
            </h1>
            <h5>
              The foundation of IJK was laid down back in 2002 when the need of a good educational institute in the area was being felt persistently. Sir Iftikhar, Javed and Kamran took the initiative and started as a small group of tuitions. IJK started making progress by leaps and bounds. The opportunity of the schooling system arose by the immense support and dedication of Riaz Khan’s and Ashar Hassan Khan’s family and we broadened our horizons by opening a school in the year 2012. By the grace of Almighty, today we are home to more than 1500 students and 300 expert faculty and staff that represents us in all walks of life. 9th April 2016 will mark the 4th anniversary of the IJK SCHOOLING SYSTEM.
            </h5>
          </div>
        </div>
        <div>
          <div className="row mission">
            <div className="col-lg-4 col-sm-12" >
              <h1><i class="fas fa-people-carry"></i></h1>
              <h1>Our Mission</h1>
              <p>
                Make IJK the best school of Malir and surrounding area by raising critical thinkers, responsible global citizens and students who are prepared to achieve the highest standards, both in their subsequent education and throughout their careers
          </p>
            </div>
            {/* core */}
            <div className="col-lg-4 col-sm-12" >
             <h1> <i class="fas fa-graduation-cap"></i></h1>
              <h1>Our Core Values </h1>
              <p>
                We approach and engage other people with respect and honesty
                We manage ourselves and our learning by developing self-awareness, determination and courage
                We explore our world with open minds, consideration and compassionate perspectives
                We commit to making a difference by being creative, responsible and reflective
                We promote excellence through learning and drive a positive change in individuals.

                Our Mission Is To
                Make IJK the best school of Malir and surrounding area by raising critical thinkers, responsible global citizens and students who are prepared to achieve the highest standards, both in their
          </p>
            </div>
            {/* phil */}
            <div className="col-lg-4 col-sm-12" >
              <h1><i class="fas fa-book-reader"></i></h1>
              <h1>Our Philosophy </h1>
              <p>
                Our learning philosophy and teaching environment promote freedom of thought, expression and action. We at IJK educate all students to develop their deep learning skills so they can make informed decisions and take actions responsibly. We support our philosophy through high standards of achievement which has been proven time and again through our student’s performances.
          </p>
            </div>
          </div>
        </div>
        <div className="row campusrow " >
          <div className="col-lg-6 bg2" >
            <h1><i class="fas fa-school"></i></h1>
            <h1>Special Campus Tour</h1>
            <p>
              Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.
</p>
          </div>
          <div className="col-lg-6 campus">
          </div>
        </div>
        <div className="row campusrow">
          <div className="col-lg-6 graduationbg">
          
          </div>
          <div className="col-lg-6 bg2 ">
          <h1><i class="fas fa-user-graduate "></i></h1>
      <h1>
      Graduation
      </h1>
      <p>
      Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.


Powerful Alumni
Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.


      </p>
            </div>
        </div>
        <div className="row campusrow ">
          <div className="col-lg-6 col-sm-6 bg2">
        <h1>
        <i class="fas fa-users"></i>
        </h1>
        <h1>
        Powerful Alumni
        </h1>
        <p>
        Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.
        </p>
          </div>
          <div className="col-lg-6 col-sm-6 alumni ">
            
          </div>
        </div>

      </AboutWrapper>
    );
  }
}
const AboutWrapper = styled.div`
.bg2{
  text-align:justify;
  font-size: 20px;
  font-family: TimesNewRoman;
  width: 100% !important;
}
.bg2 h1{
  text-align: center;
}

`;
export default About;
