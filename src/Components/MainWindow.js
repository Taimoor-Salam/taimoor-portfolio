import "./MainWindow.css";
import Level1 from "./Level1"
import Level2 from "./Level2"
import Level3 from "./Level3"

const MainWindow = () => {


  return (
    <body>
      <div className="container">
        <section className="viewOne">
          <Level1 />
        </section> 
        <section className="viewTwo">
          <Level2 />
        </section>
        <section className="viewThree">
          <Level3 />
        </section>
        </div>
    </body>
  );
};

export default MainWindow;
