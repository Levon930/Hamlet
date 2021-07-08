import React, { useState } from "react";
import aboutImg from "../../../static/img/aboutImg.svg";
import star from "../../../static/img/starSmall.svg";
import businessItsYou from "../../../static/img/businessItsYou.svg";
import borderStar from "../../../static/img/starWithBorder.svg";
import redStar from "../../../static/img/redStar.svg";
import infos from "../../../static/img/infos.png";
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
import member4 from "../../../static/img/member4.png";
import member5 from "../../../static/img/Image@2x.png";
import satelite from "../../../static/img/path.svg";
import icon_1 from "../../../static/img/icons2/Group 155.svg";
import icon_2 from "../../../static/img/icons2/Group 161.svg";
import icon_3 from "../../../static/img/icons2/Group 162.svg";
import icon_4 from "../../../static/img/icons2/Group 163.svg";
import icon_5 from "../../../static/img/icons2/brain.svg";
import text from "../../../static/img/biznes@duEs.svg";
import tim from "../../../static/img/tim.svg";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Community = ({ history }) => {
  const styleIcon = { fontSize: "30px", color: "#0B3488" };
  const [show, setShow] = useState(0);
  return (
    <>
      {/* <!-- INRO SECTION --> */}

      <section id="intro">
        {/* <img src={star} className="intro-star" /> */}
        {/* <img src={borderStar} className="intro-star-border" /> */}
        <div className="container">
          <div className="intro-item">
            <img src={star} className="intro-item-img" alt="*" />
            <img src={borderStar} className="border-star" alt="borderStar" />
            <div className="intro-item-title">
              <div style={{ width: "50%", marginTop: "70px" }}>
                <img src={text} style={{ width: "100%" }} />
              </div>
              <img
                src={satelite}
                alt="satelite"
                style={{
                  position: "absolute",
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
                  top: "5%",
                  height: "516px",
                }}
                className="sateliteStar"
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
              {/* <button className="moreInfo">Իմանալ ավելին</button> */}
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
                Տեսլական
              </h1>
              <p>
                BuissUp Community-ն բիզնես ակումբ է գաղափարի հիմքում ընկած է
                ՀՀ-ում առողջ բիզնես միջավայրի ստեղծումը և զարգացումը` կրթական
                ծրագրերի, խորհրդատվական ծառայությունների և ֆինանսական միջոցների
                ներգրավվման միջոցով: Կրթական ուղղությունը Ասոցիացիայի առանցքային
                հիմնասյուններից մեկն է, քանի որ յուրաքանչյուր երկրի
                բարեկեցության հիմքում ընկած է կրթված երիտասարդությունը:
              </p>
              <h1>
                <img src={redStar} alt="redStar" />
                Առաքելություն
              </h1>
              <p>
                BuissUp Community–ի հիմնական առաքելությունը ՀՀ գործարար ներուժի
                բացահայտումն է ինչպես նաև դրա իրացումն ու զարգացումը:
              </p>
            </div>
          </div>
          <div className="about-block">
            <div className="about-item-img">
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </div>
        </div>
      </section>
      <section id="infos">
        <div className="infos-block infos-block-mb">
          <div>
            <div
              className="info-circle"
              onMouseEnter={() =>
                setTimeout(() => {
                  setShow(1);
                }, 800)
              }
              onMouseLeave={() => setShow(0)}
            >
              {show === 1 ? (
                <div className="circleText">
                  <p>Առցանց բիզնես դասընթացների և սեմինարների անցկացում</p>
                </div>
              ) : (
                <img src={icon_5} style={{ width: "40%" }} />
              )}
            </div>

            <div className="info-circle-text">
              <FontAwesomeIcon icon={faChevronDown} style={styleIcon} />
              <p>Գիտելիքների տրամադրում</p>
            </div>
          </div>
          <div>
            <div className="info-circle-text-up">
              <p>Ներդրումների ներգրավվում՝</p>
              <FontAwesomeIcon icon={faChevronUp} style={styleIcon} />
            </div>
            <div
              className="info-circle"
              onMouseEnter={() =>
                setTimeout(() => {
                  setShow(2);
                }, 800)
              }
              onMouseLeave={() => setShow(0)}
            >
              {show === 2 ? (
                <div className="circleText">
                  <p>
                    Ապահովել նախագծերի իրագործման և զարգացմեն համար անհրաժեշտ
                    ներդրումներ
                  </p>
                </div>
              ) : (
                <img src={icon_2} />
              )}
            </div>
          </div>
          <div>
            <div
              className="info-circle"
              onMouseEnter={() =>
                setTimeout(() => {
                  setShow(3);
                }, 800)
              }
              onMouseLeave={() => setShow(0)}
            >
              {show === 3 ? (
                <div className="circleText">
                  <p>
                    Ակումբը ձևավորում է հայ գործարարների բիզնես փորձի փոխանակման
                    հարթակ
                  </p>
                </div>
              ) : (
                <img src={icon_1} />
              )}
            </div>

            <div className="info-circle-text">
              <FontAwesomeIcon icon={faChevronDown} style={styleIcon} />
              <p>Բիզնես ակումբի ձևվորում</p>
            </div>
          </div>
          <div>
            <div className="info-circle-text-up">
              <p>Նորարարական տեխնոլոգիաների ներդրումներ</p>
              <FontAwesomeIcon icon={faChevronUp} style={styleIcon} />
            </div>
            <div
              className="info-circle"
              onMouseEnter={() =>
                setTimeout(() => {
                  setShow(4);
                }, 800)
              }
              onMouseLeave={() => setShow(0)}
            >
              {show === 4 ? (
                <div className="circleText">
                  <p>
                    Ներդրումների շրջանակներում շեշտը կդրվի հայ երիտասարդների
                    արդիական և նորարական գաղափարների զարգացման վրա
                  </p>
                </div>
              ) : (
                <img src={icon_3} />
              )}
            </div>
          </div>
          <div>
            <div
              className="info-circle"
              onMouseEnter={() =>
                setTimeout(() => {
                  setShow(5);
                }, 800)
              }
              onMouseLeave={() => setShow(0)}
            >
              {show === 5 ? (
                <div className="circleText">
                  <p>
                    Կրթական և ներդրումային միջավայրի զարգացումը ոչ միայն կկանխի
                    արտագաղթը, այլև կհանդիսանա հայրենադարձության ուժեղ ազդակ։
                  </p>
                </div>
              ) : (
                <img src={icon_4} />
              )}
            </div>

            <div className="info-circle-text">
              <FontAwesomeIcon icon={faChevronDown} style={styleIcon} />
              <p>«Ուղեղի ներհոսք»-ի խթանում</p>
            </div>
          </div>
        </div>
      </section>
      <section id="admins">
        <div className="admins-title">
          <h1>
            BuissUp Global Forum-ը իրականացվում է Ռուսաստանում «Հայ գործարաների
            ասոցիացիա»-ի հիմնադիրների նախաձեռնությամբ։
          </h1>
          <p>
            Ռուսաստանում «Հայ գործարաների ասոցիացիա»-ն ստեղծվել է Հայաստանի և
            Ռուսաստանի հայ գործարարների միջև առողջ բիզնես մթնոլորտ և
            աշխատանքային հարաբերություններ ապահովելու նպատակով։ Ասոցիացիայի
            հիմնադիրները Սամվել Կարապետյանի ռուսաստանաբնակ խոշոր և և հաջողակ
            հայազգի գործարարներ են։
          </p>
        </div>
        <div className="card-block">
          <div className="card">
            <img src={person1} alt="preson" />
            <h3 className="card-name">Սամվել Կարապետյան</h3>
            <p className="card-description">
              «Հայ գործարաների ասոցիացիա»-ի նախագահ և հիմնադիր, «Տաշիր»
              ընկերությունների խմբի հիմնադիր և սեփականատեր
            </p>
          </div>

          <div className="card">
            <img src={person2} alt="preson" />
            <h3 className="card-name">Արթուր Ջանիբեկյան</h3>
            <p className="card-description">
              «Հայ գործարաների ասոցիացիա»-ի հիմնադիր, Comedy Club Production-ի
              հիմնադիր, «Գազպրոմ Մեդիա Հոլդինգ» ԲԸ ժամանցային հեռուստաալիքների
              սուբհոլդինգի ղեկավարի առաջին տեղակալ
            </p>
          </div>

          <div className="card">
            <img src={person3} alt="preson" />
            <h3 className="card-name">ԿԱՄՈ ԱՎԱԳՈՒՄՅԱՆ</h3>
            <p className="card-description">
              «Հայ գործարաների ասոցիացիա»-ի փոխնախագահ և հիմնադիր «Ավիլոն»
              ընկերությունների խմբի տնօրենների խորհրդի նախագահ
            </p>
          </div>

          <div className="card">
            <img src={person4} alt="preson" />
            <h3 className="card-name">Հայկ Իգնաթյան</h3>
            <p className="card-description">
              «Հայ գործարաների ասոցիացիա»-ի հիմնադիր, «Տաշիր» ընկերությունների
              խմբի առաջին փոխնախագահ, «Ֆորա-Բանկ» ԲԱԲ տնօրենների խորհրդի նախագահ
            </p>
          </div>
          <div className="card">
            <img src={person5} alt="preson" />
            <h3 className="card-name">Արմեն Շահազիզյան</h3>
            <p className="card-description">
              «Հայ գործարաների ասոցիացիա»-ի հիմնադիր, «Լուդինգ» ընկերության
              համահիմնադիր
            </p>
          </div>
          <div className="card">
            <img src={person6} alt="preson" />
            <h3 className="card-name">Կարեն Ավագումյան</h3>
            <p className="card-description">
              «Հայ գործարաների ասոցիացիա»-ի հիմնադիր, «Ռանդ-Տրանս»
              ընկերությունների խմբի տնօրենների խորհրդի նախագահ, NEBO.digital
            </p>
          </div>
          <div className="card">
            <img src={person7} alt="preson" />
            <h3 className="card-name">Վարուժան Արտենյան</h3>
            <p className="card-description">
              «Հայ գործարաների ասոցիացիա»-ի հիմնադիր, «Տաշիր» ընկերությունների
              խմբի առաջին փոխնախագահ
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
            <h3 className="card-name">Գոհար Ղումաշյան</h3>
            <p className="card-description">
              Ռուսաստանում «Հայ գործարաների ասոցիացիա»-ն գործադիր տնօրեն
            </p>
          </div>
          <div className="card">
            <img src={member2} alt="member" />
            <h3 className="card-name">Համլետ Ասատրյան</h3>
            <p className="card-description">
              ՌՈՒՍԱՍՏԱՆՈՒՄ «ՀԱՅ ԳՈՐԾԱՐԱՆԵՐԻ ԱՍՈՑԻԱՑԻԱ»-Ի ՀԱՅԱՍՏԱՆՅԱՆ ԳՐԱՍԵՆՅԱԿԻ
              ՂԵԿԱՎԱՐ
            </p>
          </div>
          <div className="card">
            <img src={member3} alt="member" />
            <h3 className="card-name">Քրիստինա Խաչատրյան</h3>
            <p className="card-description">
              Buissup Community-ի ծրագրի ղեկավար
            </p>
          </div>
          <div className="card">
            <img src={member4} alt="member" />
            <h3 className="card-name">Աննա Գրիգորյան</h3>
            <p className="card-description">
              Buissup Community-ի զարգացման գծով պատասխանատու
            </p>
          </div>
          <div className="card">
            <img src={member5} alt="member" />
            <h3 className="card-name">ՆԵԼԼԻ ՊԵՏՐՈՍՅԱՆ</h3>
            <p className="card-description">
              Buissup Global Forum-ի ծրագրային մենեջեր
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
