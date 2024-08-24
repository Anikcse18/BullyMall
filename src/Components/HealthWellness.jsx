import { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { IoBasketballOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedSingle } from "react-icons/lu";

const HealthWellness = () => {
  const [tab, setTab] = useState("dog");
  return (
    <section className="bg-[#E5734F] p-2 ">
      <div className="container flex flex-col gap-5 lg:flex-row justify-between ">
        {/* left side */}
        <div className="bg-white p-3 rounded-lg lg:max-w-[40%] lg:max-h-[350px]">
          <section className="flex flex-row justify-between items-center ">
            {/* Paw Icon */}
            <div className="">
              <img src="./pet.png" alt="" className="w-16" />
            </div>
            {/* text */}
            <div>
              <h1 className="text-2xl custom-heading lg:flex lg:items-center text-gray-800 ">
                Health and Wellness Services
              </h1>
            </div>
          </section>

          <section className="space-y-8 px-2">
            <div className="flex flex-row space-x-2 lg:space-x-4 text-gray-400 mt-3">
              <div className="flex items-center gap-2 text-lg font-semibold hover:text-blue-700">
                <GiCoffeeCup />
                Eat
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold hover:text-blue-700">
                <IoBasketballOutline />
                Play
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold hover:text-blue-700">
                <LiaBathSolid />
                Bath
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold hover:text-blue-700">
                <LuBedSingle />
                Sleep
              </div>
            </div>
            <article className="relative">
              <p className="text-justify roboto text-gray-600 w-[90%]">
                Designed so animals can relax & indulge in pet stylists, run
                around our exercise yards, make new friends in doggy daycare, or
                simply spend hours in our dog grooming salon.
              </p>
              <img
                src="./cookie 2.png"
                alt=""
                className="hidden lg:block lg:absolute -right-16 top-0  "
              />
            </article>

            <div className="">
              <button className="btn bg-[#0702AA] hover:text-black text-white ">
                Book Appointment
              </button>
            </div>
          </section>
        </div>
        {/* right side */}
        <div className="max-w-[50%] mx-auto lg:mx-0">
          <div className=" flex flex-row text-white font-semibold roboto space-x-3 lg:space-x-12">
            <h1
              onClick={() => setTab("dog")}
              className="border-b-2 border-transparent hover:text-blue-800 hover:border-blue-700"
            >
              For Dog
            </h1>
            <h1
              onClick={() => setTab("cat")}
              className="border-b-2 border-transparent hover:text-blue-800 hover:border-blue-700 "
            >
              For Cat
            </h1>
            <h1
              onClick={() => setTab("others")}
              className="border-b-2 border-transparent hover:text-blue-800 hover:border-blue-700 "
            >
              For Others
            </h1>
          </div>
          <div>
            {tab === "dog" && (
              <img
                src="./Kutta the dog.png"
                alt=""
                className="w-[300px] lg:w-[80%] mt-5"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthWellness;
