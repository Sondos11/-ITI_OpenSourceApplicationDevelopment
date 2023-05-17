import { NavLink } from "react-router-dom";

let Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header"></div>
        <ul className="nav navbar-nav">
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#96AED0" : "lightgray",
              })}
              to="/"
              exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#96AED0" : "lightgray",
              })}
              to="/users"
              end>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#96AED0" : "lightgray",
              })}
              to="/users/5">
              User Details
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#96AED0" : "lightgray",
              })}
              to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#96AED0" : "lightgray",
              })}
              to="/error">
              Error
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
