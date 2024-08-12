import Logo from "../assets/Images/Logo.png";
import { MdKeyboardArrowDown, MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className=" p-7 bg-[#E5734F]">
      <div className="container flex justify-between items-center">
        <div>
          <img src={Logo} alt="" className="w-28" />
        </div>

        <div className="hidden lg:block">
          <ul className="font-bold flex gap-7 items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Pets
                <MdKeyboardArrowDown></MdKeyboardArrowDown>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Services
                <MdKeyboardArrowDown></MdKeyboardArrowDown>
              </a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <button className="btn btn-outline text-[#0702AA] rounded-lg hover:bg-[#0702AA] bg-white border-[#0702AA] ">
                Become A Seller
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center gap-4">
            <li>
              <MdShoppingCart className="text-white text-xl"></MdShoppingCart>
            </li>

            <li className="flex gap-2 items-center ">
              <FaUser className="text-xl text-[#0702AA]"></FaUser>
              <p className="text-sm text-[#EBECED]">Log In / Register</p>
            </li>

            <li className="hidden lg:block">
              <button className="btn  bg-[#0702AA] border-none hover:text-black hover:bg-gray-200  text-white ">
                <div className="bg-[#E5734F] p-[2px] rounded-xl">
                  <TbPlayerPlayFilled></TbPlayerPlayFilled>
                </div>
                How it Works
              </button>
            </li>
          </ul>
        </div>
        {/* Toggle menu */}
        <div className="text-2xl block lg:hidden">
          <button className="p-3 bg-gray-200 hover:bg-gray-300 duration-100 transition-all shadow-lg rounded-lg">
            <GiHamburgerMenu></GiHamburgerMenu>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
