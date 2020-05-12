import React, { Component } from "react";
import styled from "styled-components";
import Sp1 from "../images/sp6.jpg";
import Sp2 from "../images/pl.jpg";

class Extra_Activities extends Component {
  render() {
    return (
      <div>
        <Extra>
          <div className="row act">
            <div className=""></div>
          </div>
          <div className="row sp ">
            <div className=" col-lg-6 col-sm-12  ">
              <h1>
                <i class="fas fa-skating"></i>
              </h1>
              <h1>Sports</h1>
              <p>
                A number of recreational events are organized each year
                including annual sports week in which students participate in
                cricket , throw-ball, ten quit ,badminton, as well as other
                indoor games like chess, ludo and scrabble .active participation
                of the faculty in these events ensures that the underlying goals
                are accomplished i.e: to instill teamwork, discipline and
                responsibility.
              </p>
              <h1>Debates & Special Days</h1>
              <p>
                The oratory skills of students are developed through regular
                debate competitions in the school and also on inter school
                level. Special national and international days are celebrated
                including Independence day, Pakistan day, Quaid day, Iqbal day,
                Defence day, Mother’s day, Father’s day, Color day, Flower day,
                Green day as well as International Medical days such as Diabetes
                day, Aids day and Cancer day.
              </p>
              <h1>Annual Picnic</h1>
              <p>
                The annual picnic is a much awaited event each year where the
                students and teachers can get up-close thereby strengthening
                their bond which eventually results in a richer classroom
                atmosphere. The annual picnic takes the students to scenic
                farmhouses and the whole experience elevates the enthusiasm and
                morale of the students.
              </p>
            </div>
            <div className=" col-lg-6 col-sm-12 sp1"></div>
          </div>
          <div className="row sp">
            <div className="col-lg-6 col-sm-12 sp2"></div>
            <div className="col-lg-6 col-sm-12">
              <h1>
                <i class="fas fa-democrat"></i>
              </h1>
              <h1>Arts and crafts</h1>
              <p>
                Students of ijk are also bred with a creative instinct through
                arts education which connects them more deeply to the world and
                opens them to new ways of seeing.
              </p>
              <h1>Liaison With Other Schools</h1>
              <p>
                The school has entered into collaborative partnerships with
                other notable institutions such as Rehbar Academy, Al-Khadija
                Public School, Prince Ali Boys School, SOS Herman Gmeiner Higher
                Secondary School. Various inter-school activities such as
                debates, sports events, quizzes and art competitions are also
                held.
              </p>
              <h1>Summer WorkShop</h1>
              <p>
                Like other schools, regular classes will remain suspended at IJK
                for the summer vacation, but we will offer some special classes
                in which we will focus on improving student’s handwriting,
                linguistics, basics of science and mathematics particularly for
                those who face difficulties in regular classes. This workshop is
                absolutely free for students of IJK. Students will also be given
                hand son training on computer software such as MS Word, Excel,
                PowerPoint and other useful programs as well as basics of
                programming. Participation in this workshop will be optional.
              </p>
            </div>
          </div>
          <div className="row sp">
            <div className="col-lg-6 col-sm-12">
              <h1>
                <i class="fas fa-eye"></i>
              </h1>
              <h1>Educational Visit</h1>
              <p>
                IJK organize outings and field trips at intervals throughout the
                year to places of interest and educational values. We are
                committed to providing out-of-school learning opportunities for
                our children. Educational visits enable us to take children’s
                learning onto a higher level and provide them with learning
                experiences
              </p>
              <h1>School Culb And Societies</h1>
              <p>
                At IJK we have planned to form different societies that will
                help polish our student’s skills. This will include
                participation in Boy Scout and Girls Guide, Urdu and English
                debating, Dramatics, Social and Sports club. These activities
                will usually take place after school hours.
              </p>
            </div>

            <div className="col-lg-6 col-sm-12 ed"></div>
          </div>
        </Extra>
      </div>
    );
  }
}
const Extra = styled.div`
.sp{
  font-size: 20px;
  text-align: justify
  margin-top: 100px;
  font-family: TimesNewRoman;
  width: 100% !important;
}
.sp h1{
  text-align: center;
  color: var(--mainBlue);
  width: 100% !important;
}
`;
export default Extra_Activities;
