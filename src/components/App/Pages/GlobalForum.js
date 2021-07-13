import React from "react";

import star from "../../../static/img/starSmall.svg";
import businessItsYou from "../../../static/img/businessItsYou.svg";
import borderStar from "../../../static/img/starWithBorder.svg";
import redStar from "../../../static/img/redStar.svg";
import satelite from "../../../static/img/path.svg";
import one from "../../../static/img/Сгруппировать 303.svg";
import two from "../../../static/img/Сгруппировать 304.svg";
import tree from "../../../static/img/Сгруппировать 305.svg";
import four from "../../../static/img/Сгруппировать 306.svg";
import five from "../../../static/img/Сгруппировать 307.svg";
import oneIcon from "../../../static/img/icons/1.svg";
import twoIcon from "../../../static/img/icons/2.svg";
import treeIcon from "../../../static/img/icons/3.svg";
import fourIcon from "../../../static/img/icons/4.svg";
import buisap from "../../../static/img/Ի՞նչ_է_պետք_անելմասնակից_դառնալու_համար (2).svg";
import text from "../../../static/img/biz.svg";
import icon_6 from "../../../static/img/iconhgy.svg";
import { useState } from "react";
const GlobalForum = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      icon: oneIcon,
      title: "Քայլ 1 ",
      name: "Լրացնել հայտադիմում ",
      description:
        "Մասնակից դառնալու առաջին նախապայմանը հայտադիմումի լրացումն է։ Շատ կարևոր է հայտադիմումը լրացնել լիարժեք, տալ հարցերին ամբողջական և հստակ պատասխաններ, քանի որ հայտադիմումը պետք է ամբողջովին արտացոլի դիմորդի գաղափարը, դրա կարևորությունը և իրագործելիությունը։ ",
    },
    {
      icon: twoIcon,
      title: "Քայլ 2 ",
      name: "Մասնակցել հարցազրույցի Buissup Global Forum-ի հայտադումների գնահատման հանձնաժողովի հետ",
      description:
        "Հայտադիմուների հավաքագրումից հետո, Buissup Global Forum-ի թիմը կանցկացնի նախնական մշակում, որից հետո նախապատվություն ստացած ծրագրերը կհրավիրվեն հարցազրույցի։ Հարցազրույցի ընթացքում մասնակիցները պետք է 7 րոպեի ընթացքում ներկայացնեն իրենց բիզնես-նախագծերը, այնուհետև պատասխանեն հանձնաժողովի հարցերին։ Հարցազրույցների արդյունքների հիման վրա կընտրվեն այն 200 հաջողակ երիտասարդները, ովքեր հնարավորություն կստանան մասնակցել Buissup Global Forum-ին։ ",
    },
    {
      icon: treeIcon,
      title: "Քայլ 3 ",
      name: "Buissup Global Forum-ի մասնակիցների պաշտոնական հրապարակում",
      description:
        "Օգոստոսի 7-ին Elit Plaza բիզնես կենտրոնում տեղի կունենա առաջին Buissup Conference-ը, որին կհրավիրվեն Buissup Global Forum-ի մասնակիցության հայտ ներկայացրած բոլոր հայտ ներկայացրած անձիք։ Միջոցառման առաջին հատվածում սպասվում են հետաքրքիր բիզնես-դասախոսություններ և թրեյնինգներ, իսկ միջոցառման ավարտին կհրապարակվեն հաղթող նախագծերի անունները։",
    },
    {
      icon: icon_6,
      title: "Քայլ 4 ",
      name: "Մասնակցել Buissup Global Forum-ին",
      description:
        "Սեպտեմբերի 7-13 Best Western Plus Dilijan հյուրանոցում կանցկացվի Buissup Global Forum-ը, որին կմասնակցեն անցած քայլի ընթացքում հրապարակված նախագծերի հեղինակները/թիմերը։ ",
    },
    {
      icon: fourIcon,
      title: "Քայլ 5 ",
      name: "Մասնակցել Dvin Music Hall-ում կայացող մեծ միջոցառմանը",
      description:
        "Սեպտեմբերի 20-ին Dvin Music Hall-ում Buissup Global Forum-ի առավելագույն միավորներ հավաքած թիմերը հնարավորություն կունենան ներկայացնել իրենց բիզնես-ծրագրերը հայ աշխարհի մի շարք խոշոր գործարարների և դառնալ մեծ ներդրումային ֆոնդի շահառուներից մեկը։ ",
    },
  ];

  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="intro-item">
            <img src={star} className="intro-item-img mobileNone" alt="*" />
            <img
              src={borderStar}
              className="border-star mobileNone"
              alt="borderStar"
            />
            <div className="intro-item-title">
              <div
                className="intro-item-title-text"
                style={{
                  width: "70%",
                  paddingBottom: "100px",
                  paddingTop: "70px",
                }}
              >
                <img src={text} style={{ width: "100%", height: "100%" }} />
              </div>
              <img
                src={satelite}
                alt="satelite"
                style={{
                  top: '58px',
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
                  top: "calc(58px + 5%)",
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
              <button>
                <a
                  className="liknkAdd"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeLjECvU04U5ImMBvsobLA221l_woRPUn6CPTdWlteTr-hPiA/viewform"
                >
                  Իմանալ ավելին
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about_page2">
        <img src={redStar} alt="redStar" className="redStar" />
        <div className="about-item page2">
          <h1>Ծրագրի մասին</h1>
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
        {/* <h2>Ի՞նչ է պետք անել </h2>
        <div>
          <img src={buisap} />
        </div>
        <h3>մասնակից դառնալու համար</h3> */}
        <div>
          <img src={buisap} />
        </div>
      </section>
      <section id="stepsSection" className="stepsSection-mb">
        <div className="stepsDots stepsDots-mb">
          <div
            className={active === 0 ? "activeDot" : "dot1"}
            onClick={() => setActive(0)}
          >
            <div>1</div>
          </div>
          <div
            className={active === 1 ? "activeDotDouble" : "dot"}
            onClick={() => setActive(1)}
          >
            <div>2</div>
          </div>
          <div
            className={active === 2 ? "activeDotDouble" : "dot"}
            onClick={() => setActive(2)}
          >
            <div>3</div>
          </div>
          <div
            className={active === 3 ? "activeDotDouble" : "dot"}
            onClick={() => setActive(3)}
          >
            <div>4</div>
          </div>

          <div
            className={active === 4 ? "activeDotEnd" : "dotEnd"}
            onClick={() => setActive(4)}
          >
            <div>5</div>
          </div>
        </div>
        <div className="content">
          <h2>{data[active].title}</h2>
          <h3>{data[active].name}</h3>
          <p>{data[active].description}</p>
        </div>
        <div className="iconBlock">
          <img src={data[active].icon} className="dataIcon" />
        </div>
      </section>
    </>
  );
};

export default GlobalForum;
