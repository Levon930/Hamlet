import React, { useState, useContext } from "react";
import { Context } from "../../../context";
import localizeFilter from '../../../locale/localize.filter'
import { useLocation } from 'react-router-dom'
import { Select } from "antd";
import { Armenia, USA, Russia } from "../../Icons";
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
  const [activeCommunity, setActiveCommunity] = useState(true);
  const [activeForum, setActiveForum] = useState(false);
  const [activeLogo, setActiveLogo] = useState(false);
  const styleIcon = { fontSize: "22px" };

  const handleChange = (value) => {
      setLang(value);
  }

  return (
    <header className="header">
      <div className="logo-wrap">
        <img src={activeForum ? logo3 : logo1} alt="buissup logo" />
      </div>

      <div className="navbar mobileNone">
        <div className="subnav">
          <NavLink to="/" exact activeClassName="active">
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
              display: location.pathname === '/' ? "flex" : "none",
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
              <a href="#intro">{localizeFilter(lang, 'home')}</a>
              <a href="#about">{localizeFilter(lang, 'about us')}</a>
              <a href="#infos">{localizeFilter(lang, 'purpose')}</a>
              <a href="#admins">{localizeFilter(lang, 'team')}</a>
              <a href="#contacts">{localizeFilter(lang, 'feedback')}</a>
            </div>
          </div>
        </div>
        <div className="subnav">
          <NavLink
            to="/globalForum"
          >
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
              display: location.pathname === '/globalForum' ? "flex" : "none",
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
              <a href="#intro">{localizeFilter(lang, 'home')}</a>
              <a href="#about">{localizeFilter(lang, 'about the project')}</a>
              <a href="#iconsWithImage">{localizeFilter(lang, 'directions')}</a>
              <a href="#stepsSection">{localizeFilter(lang, 'participation guide')}</a>
              <a href="#contacts">{localizeFilter(lang, 'feedback')}</a>
            </div>
          </div>
        </div>
        <div className="subnav">
          <NavLink to="/conference">
            {" "}
            <button className="subnavbtn mobileNone">{localizeFilter(lang, 'conference') || "Conference"}</button>
          </NavLink>
        </div>
      </div>
        <Select defaultValue={lang} style={{ width: 100 }} onChange={handleChange}>
            <Option value="am-AM">
                <Armenia />
                Հայ
            </Option>
            <Option value="ru-RU">
                <Russia />
                Рус
            </Option>
            <Option value="en-US">
                <USA />
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
    </header>
  );
};
export default React.memo(Header);
