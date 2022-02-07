import "./Level1.css";
import "./Level1Buttons.css";
import Fader from "./Fader";
import Typical from "react-typical";

const Level1 = () => {

    document.addEventListener("mousemove", parallax);
    function parallax(e){
        

        document.querySelectorAll(".imgBuilding").forEach(function(move){
            let moving_value = move.getAttribute("data-value");
            let x = (e.clientX * moving_value) / 1000;
            let y = (e.clientY * moving_value) / 1000;

            move.style.transform = "translateX(" + x + "px) translateY("+ y +"px)";
        });

        document.querySelectorAll(".Cloud1").forEach(function(move){
            let moving_value = move.getAttribute("data-value");
            let x = (e.clientX * moving_value) / 200;
            let y = (e.clientY * moving_value) / 200;

            move.style.transform = "translateX(" + x + "px) translateY("+ y +"px)";
        });

        document.querySelectorAll(".Cloud2").forEach(function(move){
            let moving_value = move.getAttribute("data-value");
            let x = (e.clientX * moving_value) / 200;
            let y = (e.clientY * moving_value) / 200;

            move.style.transform = "translateX(" + x + "px) translateY("+ y +"px)";
        });

    }


  return (
    <div className="main">
      <div className="nav">
        <h1> Use Arrow Keys to navigate  </h1>
        </div>
      <div className="levelContainer">
        <div className="nameText">
          <Fader flag="p" text="Hi! I am" interval="1500" />
          <Fader flag="h1" text="TAIMOOR SALAM" interval="3500" />
          <h2>
            /*{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "",
                4200,
                "SOFTWARE DEVELOPER",
                10000,
                "FRONT-END EXPERT ",
                4000,
                "GRAPHIC DESIGNER ",
                4000,
              ]}
            />{" "}
            */
          </h2>
          <Fader flag="buttons" interval="5000" />
        </div>
      </div>

      <div className="imgBack">
        
        <img className="imgBuilding" src="images/Level1Imgs/Building.png" data-value="3" />
        
        <img className="Cloud1" src="images/Cloud1.png" data-value="3"></img>
        <img className="Cloud2" src="images/Cloud2.png" data-value="3"></img>
        <img className="Cloud3" src="images/Cloud3.png" data-value="5"></img>
        <img className="Cloud6" src="images/Cloud6.png" data-value="6"></img>
        

        <img className="imgSky" src="images/Level1Imgs/Sky.png" data-value="2" />
        <img className="imgGround" src="images/Level1Imgs/Ground.png" data-value="3" />
        
      </div>
    </div>
  );
};

export default Level1;
