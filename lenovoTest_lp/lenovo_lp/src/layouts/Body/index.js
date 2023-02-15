import "../../App.css";
import { BsChevronUp } from "@react-icons/all-files/bs/BsChevronUp";
import { IoMdSquare } from "@react-icons/all-files/io/IoMdSquare";
import { Card, Card2, Banner2, FilterBtn } from "../../components";

function Body() {
  return (
    <>
      <div>
        <div className="container-body">
          <h2 className="body-title">Models</h2>
          <div className="division-line"></div>
          <FilterBtn />
          <div className="body-main">
            <div className="container-filterResult">
              <div className="filter-title">
                <h5>Price</h5> <BsChevronUp />
              </div>
              <ul>
                <li>
                  <IoMdSquare /> $800.00 - $999.99 (2)
                </li>
                <li>
                  <IoMdSquare /> $1,000 - $1,499.99 (4)
                </li>
                <li>
                  <IoMdSquare /> $1,500 - $1,999.99 (3)
                </li>
              </ul>
              <a href="www.lenovo.com" className="seeMoreLink">
                See More
              </a>
              <div className="division-line filter-line"></div>
            </div>
            <div className="container-card">
              <Card />
              <Card2 />
              <Card2 />
              <Card />
            </div>
          </div>
          <Banner2 />
        </div>
      </div>
    </>
  );
}
export { Body };
