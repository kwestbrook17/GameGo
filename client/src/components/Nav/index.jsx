import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../../public/images/GameGoText.png";
import cartIcon from "../../assets/icons/cartIcon.png";
import login from "../../assets/icons/login.png";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Link to="/cart">
              <img
                src={cartIcon}
                style={{ width: "30px", height: "auto" }}
              ></img>
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              <img src={login} style={{ width: "30px", height: "auto" }}></img>
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="GameGo Logo"
            style={{ width: "100px", height: "auto" }}
          ></img>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
