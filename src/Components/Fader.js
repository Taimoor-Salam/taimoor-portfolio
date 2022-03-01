import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Level1.css";
import "./Level1Buttons.css";
import { ExternalLink } from 'react-external-link';
import Modal from "./Modal"

const Fader = (props) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade == "fade-out") {
        setFadeProp({
          fade: "fade-in",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, props.interval);


    return () => clearInterval(timeout);
  }, [fadeProp]);

  if (props.flag === "h1") {
    return (
      <div>
        <h1 className={fadeProp.fade}>{props.text} </h1>
      </div>
    );
  } else if (props.flag === "p"){
    return (
      <div>
        <p className={fadeProp.fade}>{props.text} </p>
      </div>
    );
  } else if (props.flag === "buttons"){
      return (
          <div className={fadeProp.fade}>
              <form action="https://www.linkedin.com/in/taimoor-salam-7b573022a/" target="_blank">
              <button type="submit" className="button">
                <span className="button__text">LINKEDIN</span>
                <span className="button__icon">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
            </button>
            </form>
            <form action="https://github.com/Taimoor-Salam" target="_blank">
            <button type="submit" className="button2">
                <span className="button__text">GITHUB</span>
                <span className="button__icon">
                    <ion-icon name="logo-github"></ion-icon>
                </span> 
            </button>
            </form>
            <form action="https://drive.google.com/file/d/1LvspvIPxUYVQmL9eq8p5MeFyTXo5GbKc/view?usp=sharing" target="_blank">
            <button type="submit" className="button3">
                <span className="button__text">RESUME</span>
                <span className="button__icon">
                <ion-icon name="document-text-outline"></ion-icon>
                </span>
            </button>
            </form>
          </div>
      );
  }
};

Fader.defaultProps = {
  text: "Hi! I am",
};

Fader.propTypes = {
  text: PropTypes.string,
};

export default Fader;
