import { MdKeyboardArrowDown, MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { TiMediaPlay } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" p-7 bg-[#E5734F] sticky top-0 z-30">
      <div className="container flex justify-between items-center">
        <div className="order: 3">
          <img src="/Logo.png" alt="" className="w-28" />
        </div>

        <div className="order-last lg:order-none">
          {/* Toggle menu */}
          <div
            className="text-2xl block lg:hidden relative "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <button className="p-3 bg-gray-200 hover:bg-gray-1000 shadow-lg rounded-lg">
                <RxCross2></RxCross2>
              </button>
            ) : (
              <button className="p-3  bg-gray-200 hover:bg-gray-1000  shadow-lg rounded-lg">
                <GiHamburgerMenu></GiHamburgerMenu>
              </button>
            )}
          </div>
          <ul
            className={`font-bold  lg:flex gap-7  delay-10000 items-center ${
              open
                ? "flex-col absolute right-2 top-24 bg-opacity-30 z-10 rounded-lg bg-blue-400 p-4"
                : "hidden"
            }`}
          >
            <li className="hover:bg-blue-300 duration-700 rounded-lg px-7 py-2">
              <a href="#">Home</a>
            </li>
            <li className="hover:bg-blue-300 duration-700 rounded-lg px-7 lg:px-3 py-2 ">
              <a href="#" className="flex items-center gap-1">
                Pets
                <MdKeyboardArrowDown></MdKeyboardArrowDown>
              </a>
            </li>
            <li className="hover:bg-blue-300 duration-700 rounded-lg px-7 lg:px-3 py-2">
              <a href="#" className="flex items-center gap-1">
                Services
                <MdKeyboardArrowDown></MdKeyboardArrowDown>
              </a>
            </li>
            <li className="hover:bg-blue-300 duration-700 rounded-lg px-7 lg:px-3 py-2">
              <a href="#">Product</a>
            </li>
            <li className="mt-2 lg:mt-0">
              <button className="btn btn-outline text-[#0702AA] rounded-lg hover:bg-[#0702AA] hover:text-white border-[#0702AA] ">
                Become A Seller
              </button>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex items-center gap-4">
            <li className="hidden md:block">
              <MdShoppingCart className="text-white text-xl"></MdShoppingCart>
            </li>

            <li className=" md:flex gap-2 items-center hidden">
              <FaUser className="text-xl text-[#0702AA]"></FaUser>
              <p className="text-sm text-[#EBECED]">Log In / Register</p>
            </li>

            <li className="hidden lg:block">
              <button className="btn  bg-[#0702AA] border-none hover:text-black hover:bg-gray-200  text-white ">
                <div className="bg-[#E5734F] p-[2px] rounded-xl">
                  <TiMediaPlay></TiMediaPlay>
                </div>
                How it Works
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
