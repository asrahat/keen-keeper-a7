import { NavLink } from "react-router";

const Navlinks = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold mr-4 ${className} ${isActive && "bg-[#244d3f] px-4 py-1 rounded-lg text-white"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default Navlinks;