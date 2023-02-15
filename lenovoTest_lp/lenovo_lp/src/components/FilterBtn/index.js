import "../../App.css";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";

function FilterBtn() {
  return (
    <>
      <div>
        <div className="container-filter">
          <button className="filter-Btn">
            Price Low to High
            <span className="filter-icon">
              <BsChevronDown />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
export { FilterBtn };
