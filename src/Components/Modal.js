import React, {useState} from "react";
import "./Modal.css";

const Modal = (props) => {
  const [pageModal, setPageModal] = useState(props.Page);
  if (props.Visibility === 'false'){
    return (<div></div>);
  }

  if (pageModal === 1) {
    setPageModal(
      <div className="modal">
        <div className="modalTop">
          <h2>FDMS</h2>
        </div>
        <p>
          A two-part application, a console program designed to transmit data to
          the Ground Terminal application, which is a user-based program made
          with a sleek UI. The ground terminal application also takes the data
          and stores it into the database integrated with MySQL.
          <p>
            <b>Developed Using: C#, WPF, MySQL</b>
          </p>
        </p>
        <div className="buttonDiv">
          <form action="https://github.com/Taimoor-Salam/FDMS" target="_blank">
            <button type="submit" className="button5">
              <span className="button__text">GITHUB</span>
              <span className="button__icon">
                <ion-icon name="logo-github"></ion-icon>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (pageModal === 2) {
    setPageModal(
      <div className="modal">
        <div className="modalTop">
          <h2>PORTFOLIO</h2>
        </div>
        <p>
          An interactive website I developed for the purpose of showcasing my
          creative skills. I created this from the ground up starting with
          drawing all the levels using my extensive knowledge and experience
          with Adobe Photoshop (and Graphic Design as a whole) which I later
          integrated with React to deliver this unique, interactive
          demonstration.
          <p>
            <b>Developed Using: React, JavaScript, Photoshop</b>
          </p>
        </p>
        <div className="buttonDiv">
          <form action="https://github.com/Taimoor-Salam/taimoor-portfolio" target="_blank">
            <button type="submit" className="button5">
              <span className="button__text">GITHUB</span>
              <span className="button__icon">
                <ion-icon name="logo-github"></ion-icon>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (pageModal === 3) {
    setPageModal(
      <div className="modal">
        <div className="modalTop">
          <h2>IS IT WORTH WATCHING?</h2>
        </div>
        <p>
          This web-app is a search-based site which allows the user to look up the movie/series they're about to watch, and through an API call
          to a movie database, the application displays information and ratings of the media. Developed with clean UI, the app takes an average of the ratings and relays to the user if
          the media is worth watching.
          <p>
            <b>Developed Using: React, JavaScript, Bootstrap</b>
          </p>
        </p>
        <div className="buttonDiv">
          <form action="https://github.com/Taimoor-Salam/isitworthwatching" target="_blank">
            <button type="submit" className="button5">
              <span className="button__text">GITHUB</span>
              <span className="button__icon">
                <ion-icon name="logo-github"></ion-icon>
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (<div>{pageModal}</div>);
};

export default Modal;
