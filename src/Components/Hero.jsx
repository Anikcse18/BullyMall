import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPaw } from "react-icons/fa";
import DropDown from "./DropDown";

const Hero = () => {
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);
  const [open_3, setOpen_3] = useState(false);
  return (
    <section className="">
      <div className="relative bg-gradient-to-b from-[#FF9153] to-[#E5734F] h-[660px]">
        {/* Input Field */}
        <div className="inputFieldContainer">
          <div className="pt-10 px-4 flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center lg:space-x-10 ">
            {/* Input_1 */}
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Select"
                className="w-full pr-10 pl-2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                className="absolute inset-y-0 cursor-auto right-2  flex items-center p-3 pointer-events-auto"
                onClick={() => {
                  setOpen_1(!open_1);
                  setOpen_2(false);
                  setOpen_3(false);
                }}
              >
                <IoIosArrowDown />
              </div>

              {open_1 ? <DropDown /> : ""}
            </div>

            {/* Input_2 */}
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Select"
                className="w-full pr-10 pl-2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                className="absolute inset-y-0 cursor-auto right-2  flex items-center p-3 pointer-events-auto"
                onClick={() => {
                  setOpen_2(!open_2);
                  setOpen_1(false);
                  setOpen_3(false);
                }}
              >
                <IoIosArrowDown />
              </div>

              {open_2 ? <DropDown /> : ""}
            </div>

            {/* Input_3 */}
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Select"
                className="w-full pr-10 pl-2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                className="absolute inset-y-0 cursor-auto right-2  flex items-center p-3 pointer-events-auto"
                onClick={() => {
                  setOpen_3(!open_3);
                  setOpen_2(false);
                  setOpen_1(false);
                }}
              >
                <IoIosArrowDown />
              </div>

              {open_3 ? <DropDown /> : ""}
            </div>
          </div>
          <div className="text-center mt-6 ">
            <button className="btn px-5 btn-active bg-[#0702AA] hover:text-black border-none text-white">
              <FaPaw></FaPaw> Find Now
            </button>
          </div>
          <p className="text-center mt-5 text-gray-100 roboto uppercase px-10 lg:py-0">
            Your marketplace for pets, services and products
          </p>
          <h1 className="custom-heading  text-center mt-4">
            <span className="text-[#0702AA] text-7xl lg:text-8xl tracking-wider ">
              BULLY
            </span>{" "}
            <br />
            <span className="text-white text-7xl lg:text-9xl tracking-widest	">
              MALL
            </span>
          </h1>
        </div>

        <img
          src="./kutto_hero.png"
          alt=""
          className="absolute w-[200px] lg:w-[300px] bottom-0 left-10 lg:bottom-10"
        />
        <div className="absolute bottom-0">
          <img src="./BG.png" alt="" className="w-full" />
        </div>

        <img
          src="./Hero_objects.png"
          alt=""
          className=" top-14 left-10 hidden  lg:block absolute
        "
        />
        <img
          src="./Hero_bottom.png"
          alt=""
          className="hidden lg:block absolute bottom-10 left-20  w-[90px] "
        />
        <img
          src="./Hero_Obj_right.png"
          alt=""
          className="hidden lg:block absolute top-36 right-10 w-[50px]"
        />
        <img
          src="./Hero_bottom_m.png"
          alt=""
          className="hidden lg:block absolute bottom-14 right-[44%] w-[100px]"
        />
      </div>
    </section>
  );
};

export default Hero;
