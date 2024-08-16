import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="relative w-full h-full roboto">
      <img src="/footerImage.png" className="absolute w-full h-full" alt="" />
      <div className="relative text-white py-10 lg:py-14 bg-[#545B61]/80">
        <footer className="container">
          {/* UpperPart */}
          <section className="border-b-[0.5px] pb-8">
            <div className=" flex flex-col-reverse lg:flex-row gap-y-4 justify-between items-center">
              <div>
                <ul className="flex gap-4 text-3xl">
                  <li>
                    <FaFacebookF className="text-gray-400 hover:text-[#0702AA]"></FaFacebookF>
                  </li>
                  <li>
                    <FaTwitter className="text-gray-400 hover:text-[#0702AA]"></FaTwitter>
                  </li>
                  <li>
                    <RiInstagramFill className="text-gray-400 hover:text-[#0702AA]"></RiInstagramFill>
                  </li>
                  <li>
                    <IoLogoWhatsapp className="text-gray-400 hover:text-[#0702AA]"></IoLogoWhatsapp>
                  </li>
                </ul>
              </div>
              <div>
                <img src="./Logo.png" alt="" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm">Let &apos;s Update your self</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="input join-item text-black mt-3"
                />
                <button className="btn border-none btn-primary join-item bg-[#E5734F] ml-4 mt-1 lg:mt-0 text-white hover:bg-[#0702AA]">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
          {/* LowerPart */}

          <section className="mt-7 lg:mt-12">
            <div className="lg:relative flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:gap-x-32 items-center text-center lg:text-left">
              <div>
                <h1 className="font-semibold">Bully Market Place</h1>
                <ul className="space-y-3 text-sm mt-3 lg:mt-6 font-thin">
                  <li>Find Puppy</li>
                  <li>Find Groomer</li>
                  <li>Find Trainer</li>
                </ul>
              </div>
              <div>
                <h1 className="font-semibold">List with Us</h1>
                <ul className="space-y-3 text-sm mt-3 lg:mt-6  font-thin">
                  <li>Breeders | Creating a Listing</li>
                  <li>Breeders | Creating a Listing</li>
                  <li>Breeders | Creating a Listing</li>
                </ul>
              </div>
              <div>
                <h1 className="font-semibold">Newsletters & Affiliates</h1>
                <ul className="space-y-3 text-sm mt-3 lg:mt-6  font-thin">
                  <li>Newsletter Subscriptions</li>
                  <li>Center</li>
                  <li>Bully Good Works</li>
                </ul>
              </div>
              <div>
                <h1 className="font-semibold">Policies & Support</h1>
                <ul className="space-y-3 text-sm mt-3 lg:mt-6  font-thin">
                  <li>Terms of Use Privacy Policy Contact</li>
                  <li>Find Groomer</li>
                  <li>Find Trainer</li>
                </ul>
              </div>
              <img
                src="./image20.png"
                alt=""
                className="hidden lg:block lg:absolute lg:-right-16"
              />
            </div>
            <p className="text-center mt-8  text-sm">
              All Right Reserved Istiak Javed © 2024 | | 9100 Khulna Bangladesh
            </p>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
