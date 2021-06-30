import React from "react";

import star from "../../../static/img/starSmall.svg";
import businessItsYou from "../../../static/img/businessItsYou.svg";
import borderStar from "../../../static/img/starWithBorder.svg";
import redStar from "../../../static/img/redStar.svg";
import satelite from "../../../static/img/path.svg";
import one from "../../../static/img/1@2x.png";
import two from "../../../static/img/2@2x.png";
import tree from "../../../static/img/3@2x.png";
import four from "../../../static/img/4.svg";
import five from "../../../static/img/5@2x.png";
import { useState } from "react";
const GlobalForum = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="intro-item">
            <img src={star} className="intro-item-img" alt="*" />
            <img src={borderStar} className="border-star" alt="borderStar" />
            <div className="intro-item-title">
              <h1 style={{ fontSize: "80px", marginBottom: "100px" }}>
                Գաղափարից
                <br />
                դեպի իրագործում
              </h1>
              <img
                src={satelite}
                alt="satelite"
                style={{
                  position: "absolute",
                  right: "-40%",
                  width: "538px",
                  height: "516px",
                }}
              />
              <img
                src={borderStar}
                alt="*"
                style={{
                  position: "absolute",
                  right: "-40%",
                  width: "538px",
                  top: "5%",
                  height: "516px",
                }}
              />
              <img
                src={businessItsYou}
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
              <button>Իմանալ ավելին</button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about_page2">
        <img src={redStar} alt="redStar" />
        <div className="about-item page2">
          <h1>Ինչ որ ﬕ բան</h1>
          <p>
            Buissup Global Forum մեկնարկը կտրվի Սեպտեմբերի 7-ին, Best Western
            Plus Dilijan հյուրանոցում։ Այն իրենից ներկայացնում է յոթօրյա
            ինտենսիվ դասընթաց, որը միտված է մասնակից շուրջ 200 հայ
            երիտասարդներին տրամադրել բիզնես կրթություն։ BuissUp Global Forum-ի
            ընթացքում մասնակիցները կստանան բիզնես ստեղծելու, այն գրագետ վարելու
            և զարգացնելու համար բավարար ու անհրաժեշտ գիտելիքներ։
          </p>
        </div>
      </section>
      <section id="iconsWithImage">
        <div className="iconsWithImageContainer">
          <div>
            <img src={one} />
          </div>
          <div>
            <img src={two} />
          </div>
          <div>
            <img src={tree} />
          </div>
          <div>
            <img src={four} />
          </div>
          <div>
            <img src={five} />
          </div>
        </div>
      </section>
      <section id="buissUpHeading">
        <h2>Ի՞նչ է պետք անել </h2>
        <h3>BuissUp Global Forum-ի</h3>
        <h3>մասնակից դառնալու համար</h3>
      </section>
      <section id="stepsSection">
        <div className="stepsDots">
          <div
            className={active === 1 ? "activeDot" : "dot1"}
            onClick={() => setActive(1)}
          >
            <div>1</div>
          </div>
          <div
            className={active === 2 ? "activeDotDouble" : "dot"}
            onClick={() => setActive(2)}
          >
            <div>2</div>
          </div>
          <div
            className={active === 3 ? "activeDotDouble" : "dot"}
            onClick={() => setActive(3)}
          >
            <div>3</div>
          </div>
          <div
            className={active === 4 ? "activeDotDouble" : "dot"}
            onClick={() => setActive(4)}
          >
            <div>4</div>
          </div>
          <div
            className={active === 5 ? "activeDotEnd" : "dotEnd"}
            onClick={() => setActive(5)}
          >
            <div>5</div>
          </div>
        </div>
        <div className="content">
          <h2>Քայլ 1</h2>
          <h3>Հայտադիմումի լրացում</h3>
          <p>
            Մասնակից դառնալու առաջին նախապայմանը հայտադիմումի լրացումն է։ Շատ
            կարևոր է հայտադիմումը լրացնել լիարժեք, տալ հարցերին ամբողջական և
            հստակ պատասխաններ, քանի որ հայտադիմումը պետք է անբողջովին արտացոլի
            դիմող թիմի գաղափարը, դրա կարևորությունը և իրագործելիությունը։
          </p>
        </div>
        <div>
          <img src={four} />
        </div>
      </section>
    </>
  );
};

export default GlobalForum;
