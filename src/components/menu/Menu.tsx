import { useSelector } from "react-redux";
import { RootState } from "../../feature/store";

const Menu = () => {
  const { buttonColor } = useSelector((state: RootState) => state.mode);
  return (
    <div className="w-full">
      <div className="flex item-center justify-center gap-20 p-4">
        <h1 className="text-4xl font-bold">ai.webkraft</h1>

        <ul className="flex gap-4  items-center p-4 font-bold">
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            Home
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            About
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            Portfolio
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
            Contact
          </li>
        </ul>
        <button className="btn" style={{ backgroundColor: buttonColor }}>
          Contact us
        </button>
      </div>
      <div className="border border-b-1" />
    </div>
  );
};

export default Menu;
