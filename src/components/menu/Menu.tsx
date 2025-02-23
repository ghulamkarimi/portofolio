import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
  const { buttonColor } = useSelector((state: RootState) => state.mode);
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div className="flex item-center justify-center gap-20 p-4">
        <h1 className="text-4xl font-bold">ai.webkraft</h1>

        <ul className="flex gap-4  items-center p-4 font-bold">
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
       <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <button
        onClick={() => navigate("/contact")}
         className="btn" style={{ backgroundColor: buttonColor }}>
          Contact us
        </button>
      </div>
      <div className="border border-b-1" />
    </div>
  );
};

export default Menu;
