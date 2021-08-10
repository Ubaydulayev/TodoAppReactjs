import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="add">
          <button className="btn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
