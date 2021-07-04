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
import oneIcon from "../../../static/img/icons/1.svg";
import twoIcon from "../../../static/img/icons/2.svg";
import treeIcon from "../../../static/img/icons/3.svg";
import fourIcon from "../../../static/img/icons/4.svg";

import { useState } from "react";
const GlobalForum = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      icon: oneIcon,
      title: "Քայլ 1 ",
      name: "Հայտադիմումի լրացում ",
      description:
        "Մասնակից դառնալու առաջին նախապայմանը հայտադիմումի լրացումն է։ Շատ կարևոր է հայտադիմումը լրացնել լիարժեք, տալ հարցերին ամբողջական և հստակ պատասխաններ, քանի որ հայտադիմումը պետք է անբողջովին արտացոլի դիմող թիմի գաղափարը, դրա կարևորությունը և իրագործելիությունը։ ",
    },
    {
      icon: twoIcon,
      title: "Քայլ 2 ",
      name: "Հարցազրույց BuissUp Community թիմի հետ",
      description:
        "Հայտադիմուների հավաքագրումից հետո, BuissUp Community-ի թիմը կանցկացնի նախնական մշակում, որից հետո նախապատվություն ստացած թիմերը կհրավիրվեն հարցազրույցի։ Հարցազրույցի ընթացքում թիմերը պետք է 7 րոպեի ընթացքում ներկայացնեն իրենց բիզնես-նախագիծը, այնուհետև պատասխանեն BuissUp Community-ի թիմի հարցերին։ Հարցազրույցների արդյունքների հիման վրա կընտրվեն այն 200 հաջողակ երիտասարդները, ովքեր հնարավորություն կստանան մասնակցել BuissUp Global Forum-ին։",
    },
    {
      icon: treeIcon,
      title: "Քայլ 3 ",
      name: "BuissUp Global Forum-ի մասնակիցների  պաշտոնական հրապարակում ",
      description:
        "Օգոստոսի 7-ին Elit Plaza բիզնես կենտրոնում տեղի կունենա BuissUp Conferance մեկօրյա միջոցառումը, որին կհրավիրվեն BuissUp Global Forum-ի մասնակիցության հայտ ներկայացրած բոլոր թիմերը։ Միջոցառման առաջին հատվածում սպասվում են հետաքրքիր բիզնես-դասախոսություններ և որքշոփեր, իսկ միջոցառման ավարտին կհրապարակվեն հաղթող թիմերի անունները և կտրվի BuissUp Global Forum-ի սկզբի հետհաշվարկը։",
    },
    {
      icon: fourIcon,
      title: "Քայլ 4 ",
      name: "Ռուսաստանի Հայ Գործարարների Ասոցիացիայի պաշտոնական բացման արարողության մասնակցություն",
      description:
        "Սեպտեմբերի 20-ին Dvin Music Hall-ում կկայանա Ռուսաստանի Հայ Գործարարների Ասոցիացիայի պաշտոնական բացումը, որին ներկա կլինեն հայազգի աշխարհի ավելի քան 100 խոշոր և հաջողակ գործարարներ։ Տվյալ միջացառման ընթացքում BuissUp Global Forum-ի առավելագույն միավորներ հավաքած 7 թիմերը հնարավորություն կունենան ներկայացնել իրենց բիզնես-ծրագրերը և դառնալ մինչև 500 000$ ներդրումային ֆոնդի շահառուներից մեկը։Նշենք, որ Ռուսաստանի Հայ Գործարարների Ասոցիացիայի պաշտոնական բացման արարողությանը հրավիրված են լինելու BuissUp Global Forum-ի բոլոր մասնակիցները։",
    },
  ];

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
            className={active === 3 ? "activeDotEnd" : "dotEnd"}
            onClick={() => setActive(3)}
          >
            <div>4</div>
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
