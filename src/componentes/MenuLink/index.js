import { NavLink } from "react-router-dom";
import "./MenuLink.modules.css";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "link-destacado" : "link")}
      to={to}
    >
      {children}
    </NavLink>
  );
}
