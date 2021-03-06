import React, { useState, useContext } from "react";
import { Context } from "../../../context";
import localizeFilter from '../../../locale/localize.filter'
import { useLocation } from 'react-router-dom'
import { Select } from "antd";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import logo1 from "../../../static/img/logo1.svg";
import logo2 from "../../../static/img/forum.svg";
import logo3 from "../../../static/img/Group 2qqw.svg";
import "./header.css";
import logo from "../../../static/img/comunity.svg";
import 'antd/dist/antd.css'

const { Option } = Select;

const Header = () => {
  const location = useLocation();
  const { lang, setLang } = useContext(Context);
  const [activeCommunity, setActiveCommunity] = useState(false);
  const [activeForum, setActiveForum] = useState(true);
  const [activeLogo, setActiveLogo] = useState(false);
  const styleIcon = { fontSize: "22px" };
    const styleMobileIcon = { fontSize: "14px" };
    window.addEventListener("scroll", (e) => {
        if (window.scrollY >= 80) {
            setActiveLogo(true);
        } else if (window.scrollY < 80) {
            setActiveLogo(false);
        }
    });

  const handleChange = (value) => {
      setLang(value);
  }

  return (
    <header className="header">
      <div className="logo-wrap">
        <img src={location.pathname === '/' ? logo3 : logo1} alt="buissup logo" />
      </div>

      <div className="navbar mobileNone">
        <div className="subnav">
          <NavLink to="/" activeClassName="active" >
            <button
              className="subnavbtn"
              onClick={() => {
                setActiveCommunity(false);
                setActiveForum(true);
                console.log(activeCommunity);
              }}
            >
              {localizeFilter(lang, 'global forum') || "Global Forum"}
            </button>
          </NavLink>
          <div
            className="subnav-content mobileNone"
            style={{
              display: location.pathname === '/' ? "flex" : "none",
              justifyContent: "center",

              position: activeLogo ? "fixed" : "absolute",
              top: activeLogo ? 0 : "80px",
            }}
          >
            {activeLogo ? (
              <div
                className="logo-wrap"
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <img src={logo2} alt="buissup logo" />
              </div>
            ) : null}
            <div className="subMenu">
              <a href="#intro" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'home')}</a>
              <a href="#about" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'about the project')}</a>
              <a href="#iconsWithImage" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'directions')}</a>
              <a href="#stepsSection" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'participation guide')}</a>
              <a href="#contacts" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'feedback')}</a>
            </div>
          </div>
        </div>
          <div className="subnav">
              <NavLink to="/community">
                  <button
                      className="subnavbtn"
                      onClick={() => {
                          setActiveForum(false);
                          setActiveCommunity(true);
                      }}
                  >
                      {localizeFilter(lang, 'community') || "Community"}
                  </button>
              </NavLink>
              <div
                  className="subnav-content mobileNone"
                  style={{
                      justifyContent: "space-around",
                      display: location.pathname === '/community' ? "flex" : "none",
                      position: activeLogo ? "fixed" : "absolute",
                      top: activeLogo ? 0 : "80px",
                  }}
              >
                  {activeLogo ? (
                      <div
                          className="logo-wrap"
                          style={{ display: "flex", justifyContent: "flex-start" }}
                      >
                          <img src={logo} alt="logo"/>
                      </div>
                  ) : null}
                  <div className="subMenu">
                      <a href="#intro" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'home')}</a>
                      <a href="#about" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'about us')}</a>
                      <a href="#infos" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'purpose')}</a>
                      <a href="#admins" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'team')}</a>
                      <a href="#contacts" className={activeLogo ? "scrollMenu" : ''}>{localizeFilter(lang, 'feedback')}</a>
                  </div>
              </div>
          </div>
        <div className="subnav">
          <NavLink to="/conference">
            <button className="subnavbtn mobileNone">{localizeFilter(lang, 'conference') || "Conference"}</button>
          </NavLink>
        </div>
      </div>
        <Select showArrow={false} defaultValue={lang} style={{ width: 60 }} onChange={handleChange}>
            <Option value="am-AM" className="options">
                ??????
            </Option>
            <Option value="ru-RU" className="options">
                ??????
            </Option>
            <Option value="en-US" className="options">
                Eng
            </Option>
        </Select>
      <div className="soc-wrap mobileNone">
        <a href="https://www.facebook.com/Buissup" target="_blank">
          <FontAwesomeIcon icon={faFacebook} style={styleIcon} />
        </a>
        <a
          href="https://instagram.com/buissup.am?utm_medium=copy_link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} style={styleIcon} />
        </a>
        <a href="https://www.linkedin.com/company/buissup" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} style={styleIcon} />
        </a>
      </div>
        <div className="mobileContainer mobileNone">
            <div className="mobileMenu">
                <NavLink to="/">
                    <button
                        className="subnavbtn"
                        onClick={() => {
                            setActiveCommunity(false);
                            setActiveForum(true);
                        }}
                    >
                        {localizeFilter(lang, 'global forum') || "Global Forum"}
                    </button>
                </NavLink>
                <NavLink to="/community" exact activeClassName="active">
                    <button
                        className="subnavbtn"
                        onClick={() => {
                            setActiveForum(false);
                            setActiveCommunity(true);
                        }}
                    >
                        {localizeFilter(lang, 'community') || "Community"}
                    </button>
                </NavLink>

                <NavLink to="/conference">
                    {" "}
                    <button className="subnavbtn">Community</button>
                </NavLink>
                <div className="soc-wrap-mobile">
                    <a href="https://www.facebook.com/Buissup" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} style={styleMobileIcon} />
                    </a>
                    <a
                        href="https://instagram.com/buissup.am?utm_medium=copy_link"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} style={styleMobileIcon} />
                    </a>
                    <a href="https://www.linkedin.com/company/buissup" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} style={styleMobileIcon} />
                    </a>
                </div>
            </div>
        </div>
    </header>
  );
};
export default React.memo(Header);
