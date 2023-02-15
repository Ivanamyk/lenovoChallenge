import "../../App.css";
import laptop1 from "../../assets/img/laptop1.jpg";
import { Button } from "../Button";

function Card() {
  return (
    <>
      <div>
        <div className="card-item">
          <span className="doorbuster">DOORBUSTER</span>
          <img src={laptop1} alt="lenovo laptop" width="210px" height="210px" />
          <p className="card-title">
            <b>ThinkPad X1 Carbon Gen 8</b>
          </p>
          <h2 className="card-text">$1,299.99</h2>
          <span className="card-additional-txt">
            Use eCupon: <b>YOGAPRESALE8</b>
          </span>
          <Button />
        </div>
      </div>
    </>
  );
}
export { Card };
