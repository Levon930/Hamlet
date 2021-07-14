import React, {useContext, useState} from "react";
import { Context } from "../../../context";
import localizeFilter from '../../../locale/localize.filter'
import star from "../../../static/img/starSmall.svg";
import businessItsYou from "../../../static/img/businessItsYou.svg";
import borderStar from "../../../static/img/starWithBorder.svg";
import redStar from "../../../static/img/redStar.svg";
import satelite from "../../../static/img/path.svg";
import one from "../../../static/img/Сгруппировать 303.svg";
import two from "../../../static/img/Сгруппировать 304.svg";
import three from "../../../static/img/Сгруппировать 305.svg";
import four from "../../../static/img/Сгруппировать 306.svg";
import five from "../../../static/img/Сгруппировать 307.svg";
import RUone from "../../../static/img/Ru1.svg"
import RUtwo from "../../../static/img/Ru2.svg";
import RUthree from "../../../static/img/Ru3.svg";
import RUfour from "../../../static/img/Ru4.svg";
import RUfive from "../../../static/img/Ru5.svg";
import ENone from "../../../static/img/En1.svg";
import ENtwo from "../../../static/img/En2.svg";
import ENthree from "../../../static/img/En3.svg";
import ENfour from "../../../static/img/En4.svg";
import ENfive from "../../../static/img/En5.svg";
import oneIcon from "../../../static/img/icons/1.svg";
import twoIcon from "../../../static/img/icons/2.svg";
import treeIcon from "../../../static/img/icons/3.svg";
import fourIcon from "../../../static/img/icons/4.svg";
import buisap from "../../../static/img/Ի՞նչ_է_պետք_անելմասնակից_դառնալու_համար (2).svg";
import icon_6 from "../../../static/img/iconhgy.svg";
import ArmGaxaparic from "../../../static/img/biz.svg";
import RuGaxaparic from "../../../static/img/RuGaxaparic.svg";
import RuInchpesDarnas from "../../../static/img/RuInchpesdarnal.svg";
import RuBusinessCircle from "../../../static/img/RusBusinesCircle.svg";
import USBusinessCircle from "../../../static/img/UsBusinessCircle.svg";

const GlobalForum = () => {
  const { lang } = useContext(Context);
  const [active, setActive] = useState(0);
  const data = [
    {
      icon: oneIcon,
      title: localizeFilter(lang, 'step one'),
      name: localizeFilter(lang, 'step one name'),
      description: localizeFilter(lang, 'step one description')
    },
    {
      icon: twoIcon,
      title: localizeFilter(lang, 'step two'),
      name: localizeFilter(lang, 'step two name'),
      description: localizeFilter(lang, 'step two description'),
    },
    {
      icon: treeIcon,
      title: localizeFilter(lang, 'step three'),
      name: localizeFilter(lang, 'step three name'),
      description: localizeFilter(lang, 'step three description')
    },
    {
      icon: icon_6,
      title: localizeFilter(lang, 'step four'),
      name: localizeFilter(lang, 'step four name'),
      description: localizeFilter(lang, 'step four description')
    },
    {
      icon: fourIcon,
      title: localizeFilter(lang, 'step five'),
      name: localizeFilter(lang, 'step five name'),
      description: localizeFilter(lang, 'step five description'),
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
                <img style={{ width: "100%", height: "100%" }} src={lang === 'am-AM' ? ArmGaxaparic : lang === 'ru-RU' ? RuGaxaparic : ''} />
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
              <img className="businessItsYou" alt="businessItsYou" src={lang === 'am-AM' ? businessItsYou : lang === 'ru-RU' ? RuBusinessCircle : USBusinessCircle} />
            </div>
            <div className="buttons">
              <button>
                <a
                  className="liknkAdd"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeLjECvU04U5ImMBvsobLA221l_woRPUn6CPTdWlteTr-hPiA/viewform"
                >
                  {localizeFilter(lang, 'know more')}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about_page2">
        <img src={redStar} alt="redStar" className="redStar" />
        <div className="about-item page2">
          <h1>{localizeFilter(lang, 'about the project')}</h1>
          <p>
            {localizeFilter(lang, 'about the project content')}
          </p>
        </div>
      </section>
      <section id="iconsWithImage">
        <div className="iconsWithImageContainer">
          <div>
            <img src={lang === 'am-AM' ? one : lang === 'ru-RU' ? RUone : ENone} />
          </div>
          <div>
            <img src={lang === 'am-AM' ? two : lang === 'ru-RU' ? RUtwo : ENtwo} />
          </div>
          <div>
            <img src={lang === 'am-AM' ? three : lang === 'ru-RU' ? RUthree : ENthree} />
          </div>
          <div>
            <img src={lang === 'am-AM' ? four : lang === 'ru-RU' ? RUfour : ENfour} />
          </div>
          <div>
            <img src={lang === 'am-AM' ? five : lang === 'ru-RU' ? RUfive : ENfive} />
          </div>
        </div>
      </section>
      <section id="buissUpHeading" style={{ alignItems: lang === 'ru-RU' && 'flex-end' }}>
        <div>
          <img src={lang === 'am-AM' ? buisap : lang === 'ru-RU' ? RuInchpesDarnas : ''} />
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
