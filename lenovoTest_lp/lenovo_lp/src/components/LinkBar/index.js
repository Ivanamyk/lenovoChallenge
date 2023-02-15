import "../../App.css";

function LinkBar() {
  return (
    <>
      <div>
        <div className="container-linkbar">
          <div>
            <a
              href="https://www.lenovo.com/"
              title="Go to the Lenovo models section"
              className="link-item"
            >
              Models
            </a>
          </div>
          <div>
            <a
              href="https://www.lenovo.com/"
              title="Go to the Lenovo features section"
              className="link-item"
            >
              Tech Specifications
            </a>
          </div>
          <div>
            <a
              href="https://www.lenovo.com/"
              title="Go to the Lenovo reviews section"
              className="link-item"
            >
              Reviews
            </a>
          </div>
          <div>
            <a
              href="https://www.lenovo.com/"
              title="Go to the Lenovo features section"
              className="link-item"
            >
              Features
            </a>
          </div>
          <div>
            <a
              href="https://www.lenovo.com/"
              title="Go to the Lenovo compatible accessories section"
              className="link-item hidden-btn"
            >
              Compatible Accessories
            </a>
          </div>
          <div>
            <a
              href="https://www.lenovo.com/"
              title="Go to the Lenovo services & support section"
              className="link-item hidden-btn"
            >
              Services & Support
            </a>
          </div>

          <div>
            <div>
              <button className="link-item-btn">
                <a href="https://www.lenovo.com/" title="more options">
                  <span>
                    <span>&#8943;</span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { LinkBar };
