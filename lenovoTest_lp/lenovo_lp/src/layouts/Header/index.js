import {
  NavBar,
  LinkBar,
  LinkBar2,
  Banner,
  NavBarDsktp,
  NavBarDsktp2,
  SearchBar,
} from "../../components";

function Header() {
  return (
    <>
      <div>
        <NavBarDsktp />
        <div className="container-header">
          <NavBarDsktp2 />
          <SearchBar />
        </div>
        <LinkBar2 />
        <NavBar />
        <Banner />
        <LinkBar />
      </div>
    </>
  );
}
export { Header };
