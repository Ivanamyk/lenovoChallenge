import "../../App.css";
import laptop2 from "../../assets/img/laptop2.jpg";
import { Button } from "../Button";

function Card2() {
  return (
    <>
      <div>
        <div className="card-item crd2">
          <img src={laptop2} alt="lenovo laptop" width="210px" height="210px" />
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
export { Card2 };
