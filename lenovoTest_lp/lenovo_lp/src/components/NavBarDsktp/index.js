import "../../App.css";
import navLogo from "../../assets/img/l_logo.png";
import { AiOutlineCheckSquare } from "@react-icons/all-files/ai/AiOutlineCheckSquare";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BiMap } from "@react-icons/all-files/bi/BiMap";
import { FaHeadset } from "@react-icons/all-files/fa/FaHeadset";
import { AiOutlineGift } from "@react-icons/all-files/ai/AiOutlineGift";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";

function NavBarDsktp() {
  return (
    <>
      <nav>
        <div className="container-navbarDsktp">
          <div>
            <img
              src={navLogo}
              className="navLogo"
              alt="Lenovo logo"
              width="100px"
              height="37px"
            />
          </div>
          <div className="navLinks">
            <div>
              <button className="menu-button">
                <AiOutlineCheckSquare />
              </button>
            </div>
            <div>
              <button className="menu-button">
                <AiOutlineHeart />
              </button>
            </div>
            <div>
              <button className="menu-button">
                <BiMap />
              </button>
            </div>
            <div>
              <button className="menu-button">
                <FaHeadset />
              </button>
            </div>
            <div>
              <button className="menu-button">
                <AiOutlineGift />
              </button>
            </div>
            <div>
              <button className="menu-button">
                <BsPerson />
              </button>
            </div>
            <div>
              <button className="menu-button">
                <AiOutlineShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export { NavBarDsktp };
