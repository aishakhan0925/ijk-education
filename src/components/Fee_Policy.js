import React, { Component } from "react";
import styled from "styled-components";
import Img from "../images/f.jpg";
class Fee_Policy extends Component {
  render() {
    return (
      <FeeWrapper>
        <div className="row fee">
          <div className="col-lg-8 col-sm-12">
            <h1>Tution and Fee Policy</h1>
            <p>
              All Students, Parent and Guardian must observe the following rules
              and regulations as outlined in this Policy Note regarding Tuition
              Fee; Tuition fee is payable in Pak Rupees, Admission fee
              (non-refundable) will be paid by all new students at the time of
              admission. Annual Resource charge for the academic year will be
              paid in full prior to admission irrespective of joining date.
              -Parent/Guardian defaulting on fees payment run the risk of making
              their children/wards liable to being struck off the school roll.
              -The IJK SCHOOLING SYSTEM reserves the right to hold student’s
              progress reports, transcripts, examination entries, school leaving
              and other certificates if the dues have not been cleared. -If the
              school is closed due to emergency (uncertain condition of the
              city, strike, transport unavailability, rain) or for any other
              reason on National, Provisional, District or AJK State Government
              order for any length of time, parent / guardians shall pay the
              fees with regularity by 10th of each month. The salaries to the
              teaching staff, faculty, administrative and support staff etc,have
              to be paid during the closed period. - No separate examination fee
              is taken and the expenses of test papers and answer sheers are
              included in the annual charges. - Additional payments have to be
              made for some extracurricular activities like picnic, sports day,
              annual dinner and excursions.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 feebg "></div>
        </div>
        <div className="row tablebg">
          <div className="col-lg-6 col-sm-12 mx-5 p-5 ">
            <table border="3px" style={{ width: "100%" }}>
              <tr>
                <th>Monhtly Fee</th>
                <th>RS.3500</th>
              </tr>
              <tr>
                <th colSpan="2">Annual Charger</th>
              </tr>
              <tr>
                <th>Class 6th , 7th and 8th </th>
                <th>Rs.3500</th>
              </tr>
              <tr>
                <th>Class 9th </th>
                <th>Rs.5000</th>
              </tr>
            </table>
          </div>
        </div>
        {/* addmission policy */}
        <div className="row addmission ">
          <div className="col-lg-6 col-sm-6 add">
            <img src={Img} width="100%" />
          </div>
          <div className="col-lg-6 col-sm-6 add-text">
            <h1>
              <i class="fas fa-user-plus"></i>
            </h1>
            <h1>IJK Addmission Policy</h1>
            <p>
              To be considered for admission, the candidate must submit a
              completed admission form accompanied with a school leaving
              certificate (if any) and other documents as detailed in the
              admission form. An initial assessment for placement will be made
              based on documentation provided. A written test is then conducted
              which tests the student’s prior knowledge and standing. This will
              be followed by an interview of the student along with the parent.
              The school reserves the right to deny admission to any student
              based on his/her performance in the test and interview.
            </p>
          </div>
        </div>
        {/* attandance */}
        <div className="row att">
          <div className="col-lg-6 col-sm-6">
            <h1>
              <i class="fas fa-draw-polygon"></i>
            </h1>
            <h1>IJK Attandance & Absenteeism Policy</h1>
            <p>
              If for any reason your child is unwell, please contact the school
              to let us know as soon as possible. If we do not hear from you, we
              will telephone/text you that morning to find out why your child is
              absent. On their return, please write a brief note explaining the
              reason for their absence, and any details the class teacher may
              need to know. -A student’s attendance must be 80% by the end of
              the term to make him/her eligible for appearing in the exams. -If
              a child needs to be absent for part of a school day (e.g: doctor’s
              appointment), parents should inform the school and arrange to
              collect the child from the school office.
            </p>
          </div>
          <div className="col-lg-6 col-sm-6"></div>
        </div>
        {/* discipline and behaviour policy  */}
        <div className="row behaviour ">
          <div className="col-lg-6 col-sm-6 beh"></div>
          <div className="col-lg-6 col-sm-6 beh-text">
            <h1>
              <i class="fab fa-dyalog"></i>
            </h1>
            <h1>IJK Discipline & Behaviour Policy </h1>
            <p>
              Each student within IJK will be responsible for personal conduct
              and for maintaining good order, self- discipline and consideration
              for the rights and property of others, including but not limited
              to the following guidelines: Neatness and cleanliness in personal
              attire and hygiene. As in all schools, outbreaks of head lice are
              all too frequent. Please check your child’s hair regularly. If we
              discover a child has head lice, we naturally contact the parents
              and inform them. Respect for the property of others including
              keeping all books, facilities and materials used in school in good
              condition Refrain from fighting and , creating disturbances ,
              denying others the use of school facilities , intentionally
              injuring other person , behaving in such a manner to risk harm or
              injury or using threats or intimidation against any other person
              Concern for the health and safety of others by refraining from
              using, possessing or transmitting cigerrate, pan, gutka of any
              type or by engaging in excessive noise, theft or any unlawful
              activity. Respect for the educational process and learning
              environment of others by refraining from intentional or habitual
              lateness, unexcused absences or other activities such as
              inappropriate classroom behavior. For security mobile phones are
              not permitted in school, however in an emergency, if you wish to
              contact your child you may do this via school office. Children
              should not wear jewelry to school, except for plain wristwatches.
              Any misbehavior from students or parents with teachers and school
              staff will result in immediate termination of your child from the
              school.
            </p>
          </div>
        </div>
        <div className="row pl">
          <div className="col-lg-4 col-sm-12">
            <h1>
              <i class="fas fa-heartbeat"></i>
            </h1>
            <h1>IJK Health And Safety Policy</h1>
            <p>
              We ask parents to keep their child at home if he or she is feeling
              unwell. This is particularly important in the case of contagious
              and infectious diseases (such as chicken pox). Staff look after
              children who become unwell during the school day, but we ask all
              parents to provide us with emergency contact numbers so that they
              can be notified if their child is ill and needs to be sent home
              during the school day.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12">
            <h1>
              <i class="fab fa-creative-commons-nd"></i>
            </h1>
            <h1>IJK Home Work Policy</h1>
            <p>
              Children are given homework appropriate to their needs on a daily
              basis. This may include reading, literacy or numeracy tasks,
              research for a topic or completing unfinished class work. Homework
              should be regarded as a positive experience and an extension of
              their school work. Students are given no written homework and the
              focus is mainly on understanding and learning. However, the
              students are instructed to write once at home whatever they are
              given to learn.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12">
            <h1>
              <i class="fas fa-comments"></i>
            </h1>
            <h1>IJK Conversation Policy</h1>
            <p>
              English being the language of the world, is a necessity in the
              professional world. At IJK we encourage students to converse in
              English during the premises and outside school. The students will
              be encouraged to speak on various topics in the class which will
              serve the dual purpose of improving fluency and increasing the
              confidence of students.
            </p>
          </div>
        </div>
        <div className="row ex">
          <div className="col-lg-12 col-sm-12">
            <h1>
              <i class="fas fa-diagnoses"></i>
            </h1>
            <h1>IJK Examination Policy</h1>
            <h3>Grade 1 To 8</h3>
            <p>
              The study year is divided into two terms comprising of six months
              each. At the end of each term, examinations are conducted which
              cover the material taught during that term. Apart from the term
              exams, bi-monthly tests ( once every two months ) are administered
              enabling continuous monitoring of a student’s performance. The
              teachers also conduct quizzes and viva to foster a competitive
              learning environment. A student’s score on bi-monthly tests
              contributes towards his final score. At the end of the year, the
              final grade and percentage of the student is calculated as the
              average of his performance in both terms. The breakdown of the
              cumulative marks for one subject is given below. This regular
              assessment system ensures that weakness of the student are readily
              identified and rectified so that the student performs well in the
              final exams. However, any student who fails in Science,
              Mathematics or English (passing marks: 60%), on the basis of the
              final cumulative score, will not be promoted to the next class and
              will have to repeat the same class. if a student is detained twice
              in same class, his enrolment will be cancelled.
            </p>
            <h3>
              Class 9<sup>th</sup> & 10 <sup>th</sup>{" "}
            </h3>
            <p>
              Daily tests are conducted and the marks are sent to the parents
              regularly through the SMS. There are two terms in academic
              session, each term consists of: Two assessment tests, assignments
              and projects. Half yearly Exams are conducted in September.
              Preliminary exam is taken in January which includes the entire
              coursework. Afterwards preliminary exams of each subject will be
              taken repeatedly several times on the lines of Board Examination
              so that the student gains confidence before appearing in final
              board exams. Kindly note that Passing marks for each subject is
              50% Exam retake is not allowed in any case. In case of unforeseen
              circumstances, the exam may be rescheduled.
            </p>
          </div>
        </div>
        <div className="row isl">
          <div className=" col-lg-8 col-sm-12">
            <h1>
              <i class="fas fa-mosque"></i>
            </h1>
            <h1>IJK Islamic Education And Character Building Policy</h1>
            <p>
              Group dialogues and intellectual sessions are conducted which
              inculcate moral values, ethics and civil responsibility in the
              students. Discussions on everyday affairs add to general knowledge
              of the students making them aware of the daily happenings.
              Dialogues within the classes groom student’s personality and
              enhance their self- confidence.
            </p>
          </div>
          <div className=" col-lg-4 col-sm-12 is"></div>
        </div>
      </FeeWrapper>
    );
  }
}
const FeeWrapper = styled.div`
  .fee {
    font-size: 20px;
    text-align: center;
    font-family: TimesNewRoman;
    width: 100% !important;
  }
  .tablebg {
    text-align: center;
    font-size: 20px;
    font-family: TimesNewRoman;
    margin-top: 20px;
    width: 100% !important;
  }
  .fee p {
    text-align: justify;
  }
  .add-text {
    text-align: justify;
    color: var(--mainDark);
    font-size: 24px;
    font-family: TimesNewRoman;
    width: 100% !important;
  }
  .add-text h1 {
    text-align: center;
    width: 100% !important;
  }
  .att {
    text-align: justify;
    color: var(--mainDark);
    font-size: 24px;
    font-family: TimesNewRoman;
    width: 100% !important;
  }
  .att h1 {
    text-align: center;
    width: 100% !important;
  }
  .beh-text {
    text-align: justify;
    color: var(--mainDark);
    font-size: 24px;
    font-family: TimesNewRoman;
    width: 100% !important;
  }
  .beh-text h1 {
    text-align: center;
    width: 100% !important;
  }
  .pl {
    text-align: justify;
    color: var(--mainDark);
    font-size: 24px;
    font-family: TimesNewRoman;
    margin-top: 50px;
    width: 100% !important;
  }
  .pl h1 {
    text-align: center;
    width: 100% !important;
  }
  .ex {
    text-align: justify;
    color: var(--mainDark);
    font-size: 24px;
    font-family: TimesNewRoman;
    margin-top: 50px;
    width: 100% !important;
  }
  .ex h1,
  h3 {
    text-align: center;
    width: 100% !important;
  }
  .ex h3 {
    font-weight: bold;
    color: var(--mainBlue);
    width: 100% !important;
  }
  .isl {
    text-align: justify;
    color: var(--mainDark);
    font-size: 24px;
    font-family: TimesNewRoman;
    margin-top: 50px;
    width: 100% !important;
  }
  .behaviour {
    width: 100% !important;
  }
  .isl h1 {
    text-align: center;
    width: 100% !important;
  }
  .addmission {
    width: 100% !important;
  }
`;
export default Fee_Policy;
