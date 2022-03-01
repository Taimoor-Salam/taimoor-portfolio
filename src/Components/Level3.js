import "./Level3.css";
import "./Level1Buttons.css"
import Modal from "./Modal"
import React, {useEffect, useState} from 'react';

let projNUM = 1;

const Level3 = () => {
    
    let projMIN = 1;


    const [modalState, setModalState] = useState(null);
    const [infoTitle, setInfoTitle] = useState('INFO');

    const [projectTitle,setProjectTitle] = useState('FDMS');
    const [projectImg,setProjectImg] = useState("images/Level3Imgs/FDMS.png");

    const detailsHandler  = () =>{
        setModalState(<Modal Page={projNUM} Visibility='true'/>);
        setInfoTitle('CLOSE');

        if (modalState != null){
            setModalState(null);
            setInfoTitle('INFO');
        }
    }

    useEffect(()=>{
        projNUM = 1;
    },[]);

    const rightArrowHandler = () =>{
        projNUM = projNUM + 1;
        console.log("first click = " + projNUM);
        if (projNUM > 3){
            projNUM = 1;
            console.log("second click = " + projNUM);
        }
        setProject(projNUM);
        
    }

    const leftArrowHandler = () =>{
        projNUM = projNUM - 1;
        console.log("first click = " + projNUM);
        if (projNUM < 1){
            projNUM = 3;
        }
        console.log("second click = " + projNUM);
        setProject(projNUM);

    }

    const setProject = (projnum) =>{
        if (projnum === 1){
            setProjectTitle('FDMS');
            setProjectImg("images/Level3Imgs/FDMS.png");
            if (modalState != null){
                setModalState(null);
                setInfoTitle('INFO');
            }

        }

        if (projnum === 2){
            setProjectTitle('PORTFOLIO');
            setProjectImg("images/Level3Imgs/PORTFOLIO.png");

            if (modalState != null){
                setModalState(null);
                setInfoTitle('INFO');
            }
        }

        if (projnum === 3){
            setProjectTitle('IS IT WORTH WATCHING?');
            setProjectImg("images/Level3Imgs/IIWW.jpg");

            if (modalState != null){
                setModalState(null);
                setInfoTitle('INFO');
            }
        }
    }

  return (
    <div className="level3Container">
      <img src="images/Level3.png" />
      <img className="arrow" src="images/Level3Imgs/Arrow.png" onClick={leftArrowHandler} />
      <img className="arrow2" src="images/Level3Imgs/Arrow.png" onClick={rightArrowHandler} />
      <div className="projects"><img src={projectImg} /></div>
      <div className="modalDiv">
      {modalState}
      </div>
      <h1>{projectTitle}</h1>

            <button type="button" className="button4" onClick={detailsHandler}>
                <span className="button__text">{infoTitle}</span>
                <span className="button__icon">
                <ion-icon name="information-circle-outline"></ion-icon>
                </span>
            </button>
    </div>
  );
};

export default Level3;
