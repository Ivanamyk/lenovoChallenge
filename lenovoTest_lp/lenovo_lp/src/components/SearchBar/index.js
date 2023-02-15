import "../../App.css";
import { GiMagnifyingGlass } from "@react-icons/all-files/gi/GiMagnifyingGlass";

function SearchBar() {
  const style = { color: "white" };
  return (
    <>
      <div className="container-searchbar">
        <form action="">
          <input
            type="text"
            placeholder="What are you looking for today?"
            name="search"
            className="searchInput"
          ></input>
          <button type="submit" className="searchBtn">
            <GiMagnifyingGlass style={style} />
          </button>
        </form>
      </div>
    </>
  );
}
export { SearchBar };
