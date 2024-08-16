import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPaw } from "react-icons/fa";
import DropDown from "./DropDown";

const Hero = () => {
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);
  const [open_3, setOpen_3] = useState(false);
  return (
    <section>
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
                onClick={() => setOpen_1(!open_1)}
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
                onClick={() => setOpen_2(!open_2)}
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
                onClick={() => setOpen_3(!open_3)}
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

        {/* Hero Text */}
        {/* <h1 className="custom-heading text-white text-8xl">Istiak javed</h1> */}

        <img
          src="./kutto_hero.png"
          alt=""
          className="absolute w-[200px] lg:w-[300px] bottom-0 left-10 lg:bottom-10"
        />
        <div className="absolute bottom-0">
          <img src="./BG.png" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
