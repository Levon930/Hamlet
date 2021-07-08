import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = () => {
  const styleIcon = { fontSize: "30px" };
  return (
    <footer id="contacts">
      <div className="footer-block footer-block-mb">
        <div className="footer-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} style={styleIcon} />
          <span className="item-elem-adress">
            ք․Երևան, Գ․ Լուսավորիչ 9, «Երևան Պլազա» բիզնես-կենտրոն
          </span>
        </div>
        {/* <div className="footer-item">
          <FontAwesomeIcon icon={faPhone} style={styleIcon} />
          <span>+374 (44) 888 888</span>
        </div> */}
        <div className="footer-item">
          <FontAwesomeIcon icon={faEnvelope} style={styleIcon} />
          <span>info@buissup.org</span>
        </div>
        <div className="footer-item">
          <div className="soc-wrap">
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
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
