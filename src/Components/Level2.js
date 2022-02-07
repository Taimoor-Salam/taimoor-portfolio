import "./Level2.css";
import React, { useState } from "react";

const Level2 = () => {
  document.addEventListener("mousemove", parallax);

  const [switchImg, setSwitchImg] = useState("images/Level2Imgs/SwitchOff.png");
  const [test, setTest] = useState("");
  const [switchFlag, setSwitchFlag] = useState(false);

  function parallax(e) {
    document.querySelectorAll(".icon1").forEach(function (move) {
      let moving_value = move.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 700;
      let y = (e.clientY * moving_value) / 700;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });

    document.querySelectorAll(".icon2").forEach(function (move) {
      let moving_value = move.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 700;
      let y = (e.clientY * moving_value) / 700;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });

    document.querySelectorAll(".icon3").forEach(function (move) {
      let moving_value = move.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 700;
      let y = (e.clientY * moving_value) / 700;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });

    document.querySelectorAll(".icon4").forEach(function (move) {
      let moving_value = move.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 700;
      let y = (e.clientY * moving_value) / 700;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }

  const switchHandler = () => {
    if (switchFlag === false) {
      console.log("test");
      setSwitchFlag(true);
      setSwitchImg("images/Level2Imgs/SwitchOn.png");
      setTest(
        <span className="iconBack">
          <div className="icon1" data-value="3">
            <ion-icon name="logo-react"></ion-icon>
            <p>React</p>
          </div>
          <div className="icon2" data-value="2">
            <ion-icon name="logo-nodejs"></ion-icon>
            <p>NodeJS</p>
          </div>
          <div className="icon3" data-value="4">
            <ion-icon className="icon3" name="logo-javascript"></ion-icon>
            <p>JavaScript</p>
          </div>
          <div className="icon4" data-value="5">
            C <p>C, C#, C++</p>
          </div>
        </span>
      );
    } else if (switchFlag === true) {
      setSwitchFlag(false);
      setSwitchImg("images/Level2Imgs/SwitchOff.png");
      setTest("");
    }
  };

  return (
    <div>
      <img className="imgSky2" src="images/Level1Imgs/Sky.png" /> 
      
      <div className="cloudLayer">
        <img className="Cloud1-2" src="images/Cloud1.png" data-value="3"></img>
        <img className="Cloud3-2" src="images/Cloud3.png" data-value="5"></img>
        </div>
    <div className="level2Container">
      <img className="Level2Back" src="images/Level2.png" />
      <img className="switch" src={switchImg}></img>
      <button className="switchButton" type="button" onClick={switchHandler} />
      <div className="level2Text">
        <h1>My Skills</h1>
        <h2>/* Languages and Frameworks */</h2>
        {test}
      </div>
    </div>
    </div>
  );
};

export default Level2;
