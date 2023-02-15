import "../../App.css";
import navLogo from "../../assets/img/l_logo.png";
import { GiMagnifyingGlass } from "@react-icons/all-files/gi/GiMagnifyingGlass";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";

function NavBar() {
  return (
    <>
      <nav>
        <div className="container-navbar">
          <div>
            <button className="hamburger-menu">
              <a href="#" class="icon" onclick="MenuFunction()"></a>
              <span>&#9776;</span>
            </button>
          </div>
          <div>
            <img
              src={navLogo}
              className="navLogo"
              alt="Lenovo logo in black background"
              width="100px"
              height="37px"
            />
          </div>
          <div>
            <button className="menu-button">
              <GiMagnifyingGlass />
            </button>
          </div>
          <div>
            <button className="menu-button">
              <BsPerson />
            </button>
          </div>
          <div>
            <button className="menu-button">
              <span>&#8285;</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export { NavBar };
