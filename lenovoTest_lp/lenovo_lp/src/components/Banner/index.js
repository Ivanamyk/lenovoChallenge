import "../../App.css";

function Banner() {
  return (
    <>
      <div>
        <div className="container-banner">
          <p className="shop-text">
            SAVE UP TO 21% ON <b>SELECT THINKPAD LAPTOPS</b> THROUGH NOVEMBER
            11TH
          </p>

          <div>
            <button className="shop-link">
              <a
                href="https://www.lenovo.com/"
                title="Go to the Lenovo shopping section"
              >
                Shop Now
                <span> &#62;</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export { Banner };
