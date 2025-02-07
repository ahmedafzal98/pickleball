import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge, Tooltip } from "@mui/material";
import logo from "../assets/images/logo.png";
import search from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";
const Navbar = () => {
  const options = ["Brands", "Paddles", "Balls", "Shoes", "More", "Deals"];
  return (
    <nav className="flex flex-col justify-center items-center md:flex-row bg-black p-2">
      <div className="flex justify-between items-center w-4/5 text-white ">
        <img
          className="cursor-pointer hover:scale-125 transition-transform duration-300"
          src={logo}
          alt="Logo"
        />
        <ul className="flex ">
          {options &&
            options.map((item) => {
              return (
                <li className="text-base font-sans font-semibold p-3">
                  <a href="">{item}</a>
                </li>
              );
            })}
        </ul>

        <div className="flex gap-10 ">
          <span className="text-base font-sans font-semibold">
            (123) 456 7890
          </span>
          <Tooltip title="Search">
            <img
              className="cursor-pointer hover:scale-125 transition-transform duration-300 "
              src={search}
            />
          </Tooltip>

          <Tooltip title="Shopping Cart">
            <img
              className="cursor-pointer hover:scale-125 transition-transform duration-300"
              src={cart}
            />
          </Tooltip>

          <Tooltip title="Signup">
            <img
              className="cursor-pointer hover:scale-125 transition-transform duration-300"
              src={user}
            />
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
