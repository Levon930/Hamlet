import React, { useContext } from "react";
import { Context } from "../../../context";
import localizeFilter from '../../../locale/localize.filter'
import aboutImg from "../../../static/img/aboutImg.svg";
import star from "../../../static/img/starSmall.svg";
import businessItsYou from "../../../static/img/businessItsYou.svg";
import borderStar from "../../../static/img/starWithBorder.svg";
import redStar from "../../../static/img/redStar.svg";
import person1 from "../../../static/img/preson1.png";
import person2 from "../../../static/img/preson2.png";
import person3 from "../../../static/img/preson3.png";
import person4 from "../../../static/img/preson4.png";
import person5 from "../../../static/img/preson5.png";
import person6 from "../../../static/img/preson6.png";
import person7 from "../../../static/img/preson7.png";
import member1 from "../../../static/img/member1.png";
import member2 from "../../../static/img/member2.png";
import member3 from "../../../static/img/member3.png";
import member4 from "../../../static/img/Anna.png";
import member5 from "../../../static/img/Image@2x.png";
import satelite from "../../../static/img/path.svg";
import icon_1 from "../../../static/img/icons2/Group 155.svg";
import icon_2 from "../../../static/img/icons2/Group 161.svg";
import icon_3 from "../../../static/img/icons2/Group 162.svg";
import icon_4 from "../../../static/img/icons2/Group 163.svg";
import icon_5 from "../../../static/img/icons2/brain.svg";
import text from "../../../static/img/biznesDues.svg";

import tim from "../../../static/img/tim.svg";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Community = () => {
  const { lang } = useContext(Context);
  const styleIcon = { fontSize: "25px", color: "#0B3488" };
  return (
    <>
      {/* <!-- INRO SECTION --> */}

      <section id="intro">
        <div className="container">
          <div className="intro-item">
            <img src={star} className="intro-item-img" alt="*" />
            <img
              src={borderStar}
              className="border-star mobileNone"
              alt="borderStar"
            />
            <div className="intro-item-title">
              <div className="headerText">
                <img src={text} style={{ width: "100%" }} />
              </div>
              <img
                src={satelite}
                alt="satelite"
                style={{
                  position: "absolute",
                  top: '75px',
                  right: "-408px",
                  width: "538px",
                  height: "516px",
                }}
                className="sateliteStar"
              />
              <img
                src={borderStar}
                alt="*"
                style={{
                  position: "absolute",
                  right: "-408px",
                  width: "538px",
                  top: "calc(75px + 5%)",
                  height: "516px",
                }}
                className="sateliteStar2"
              />
              <img
                src={businessItsYou}
                className="businessItsYou"
                alt="businessItsYou"
                style={{
                  position: "absolute",
                  right: "-5%",
                  width: "304px",
                  top: "0",
                  height: "304px",
                }}
              />
            </div>
            <div className="buttons">
              <button className="moreInfo">{localizeFilter(lang, 'know more')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ABOUT SECTION --> */}

      <section id="about">
        {/* <img src={starBorderGrey} className="star-grey" /> */}
        <div className="container">
          <div className="about-block">
            <div className="about-item">
              <h1>
                <img src={redStar} alt="redStar" />
                {localizeFilter(lang, 'vision')}
              </h1>
              <p>
                {localizeFilter(lang, 'visionContent')}
              </p>
              <h1>
                <img src={redStar} alt="redStar" />
                {localizeFilter(lang, 'mission')}
              </h1>
              <p>
                {localizeFilter(lang, 'missionContent')}
              </p>
            </div>
          </div>
          <div className="about-block mobNone">
            <div className="about-item-img">
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </div>
        </div>
      </section>

      <section id="infos">
        <div className="infos-block infos-block-mb">
          <div style={{ alignSelf: 'flex-start', marginTop: '-15px' }}>
            <div style={{width: '100%'}}>
              <div className="info-circle">
                <div className="circleText">
                  <p>{localizeFilter(lang, 'providing knowledge content')}</p>
                </div>
                <img src={icon_5} style={{ width: "40%" }} />
              </div>
            </div>

            <div className="info-circle-text">
              <FontAwesomeIcon icon={faChevronDown} style={styleIcon} />
              <p>{localizeFilter(lang, 'providing knowledge')}</p>
            </div>
          </div>


          <div style={{ alignSelf: 'flex-end', marginBottom: '-15px' }}>
            <div className="info-circle-text-up">
              <p>{localizeFilter(lang, 'attraction of investments')}</p>
              <FontAwesomeIcon icon={faChevronUp} style={styleIcon} />
            </div>
            <div style={{width: '100%'}}>
              <div className="info-circle">
                <div className="circleText">
                  <p>
                    {localizeFilter(lang, 'attraction of investments content')}
                  </p>
                </div>

                <img src={icon_2} />
              </div>
            </div>
          </div>

          <div style={{ alignSelf: 'flex-start', marginTop: '-15px' }}>
            <div style={{width: '100%'}}>
              <div className="info-circle">
                <div className="circleText">
                  <p>
                    {localizeFilter(lang, 'formation of a business club content')}
                  </p>
                </div>
                <img src={icon_1} />
              </div>
            </div>

            <div className="info-circle-text">
              <FontAwesomeIcon icon={faChevronDown} style={styleIcon} />
              <p>{localizeFilter(lang, 'formation of a business club')}</p>
            </div>
          </div>


          <div style={{ alignSelf: 'flex-end', marginBottom: '-15px' }}>
            <div className="info-circle-text-up">
              <p>{localizeFilter(lang, 'investments in innovative technologies')}</p>
              <FontAwesomeIcon icon={faChevronUp} style={styleIcon} />
            </div>
            <div style={{width: '100%'}}>
              <div className="info-circle">
                <div className="circleText">
                  <p>
                    {localizeFilter(lang, 'investments in innovative technologies content')}
                  </p>
                </div>
                <img src={icon_3} />
              </div>
            </div>
          </div>

          <div style={{ alignSelf: 'flex-start', marginTop: '-15px' }}>
            <div style={{width: '100%'}}>
              <div className="info-circle">
                  <div className="circleText">
                    <p>
                      {localizeFilter(lang, 'stimulating brain gain content')}
                    </p>
                  </div>
                  <img src={icon_4} />
              </div>
            </div>

            <div className="info-circle-text">
              <FontAwesomeIcon icon={faChevronDown} style={styleIcon} />
              <p>{localizeFilter(lang, 'stimulating brain gain')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="infosMobile">

      </section>
      <section id="admins">
        <div className="admins-title">
          <h1>
            {localizeFilter(lang, 'initiators')}
          </h1>
          <p>
            {localizeFilter(lang, 'initiators content')}
          </p>
        </div>
        <div className="card-block">
          <div className="card">
            <img src={person1} alt="preson" />
            <h3 className="card-name">{localizeFilter(lang, 'Samvel Karapetyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Samvel Karapetyan position')}
            </p>
          </div>

          <div className="card">
            <img src={person2} alt="preson" />
            <h3 className="card-name">{localizeFilter(lang, 'Artur Janibekyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Artur Janibekyan position')}
            </p>
          </div>

          <div className="card">
            <img src={person3} alt="preson" />
            <h3 className="card-name">{localizeFilter(lang, 'Kamo Avagumyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Kamo Avagumyan position')}
            </p>
          </div>

          <div className="card">
            <img src={person4} alt="preson" />
            <h3 className="card-name">{localizeFilter(lang, 'Hayk Ignatyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Hayk Ignatyan position')}
            </p>
          </div>
          <div className="card">
            <img src={person5} alt="preson" />
            <h3 className="card-name">{localizeFilter(lang, 'Armen Shahazizyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Armen Shahazizyan position')}
            </p>
          </div>
          <div className="card">
            <img src={person6} alt="preson" />
            <h3 className="card-name">{localizeFilter(lang, 'Karen Avagumyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Karen Avagumyan position')}
            </p>
          </div>
          <div className="card">
            <img src={person7} alt="preson" />
            <h3 className="card-name">{localizeFilter(lang, 'Varujan Artenyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Varujan Artenyan position')}
            </p>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="team-title">
          <div>
            <img src={tim} />
          </div>
        </div>
        <div className="card-block">
          <div className="card">
            <img src={member1} alt="member" />
            <h3 className="card-name">{localizeFilter(lang, 'Gohar Gumashyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Gohar Gumashyan position')}
            </p>
          </div>
          <div className="card">
            <img src={member2} alt="member" />
            <h3 className="card-name">{localizeFilter(lang, 'Hamlet Asatryan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Hamlet Asatryan position')}
            </p>
          </div>
          <div className="card">
            <img src={member3} alt="member" />
            <h3 className="card-name">{localizeFilter(lang, 'Qristina Khachatryan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Qristina Khachatryan position')}
            </p>
          </div>
          <div className="card">
            <img src={member4} alt="member" />
            <h3 className="card-name">{localizeFilter(lang, 'Anna Grigoryan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Anna Grigoryan position')}
            </p>
          </div>
          <div className="card">
            <img src={member5} alt="member" />
            <h3 className="card-name">{localizeFilter(lang, 'Nelli Petrosyan')}</h3>
            <p className="card-description">
              {localizeFilter(lang, 'Nelli Petrosyan position')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
