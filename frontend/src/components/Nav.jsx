import { Link } from "react-router-dom";
import { useState } from "react";
// import OpenBurger from "@assets/burger_icon.png";
// import CloseBurger from "@assets/burger_close_icon.png";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-gray-200 m-20 rounded-3xl drop-shadow-xl">
      <nav className="flex items-center border-x-3 m-10">
        <Link to="/welcome">
          <img src="./src/assets/logo.png" alt="logo" className="m-10" />
        </Link>
        {/* <img
          src={navOpen ? CloseBurger : OpenBurger}
          alt=""
          className="h-5 z-20 absolute right-9 top-10 cursor-pointer lg:hidden"
          onClick={() => setNavOpen(!navOpen)}
        /> */}
        <ul
          className={`bg-SpaceCadet sm:text-right w-full h-full duration-500 ease-linear sm:pl-10 sm:static fixed  top-0 sm:h-auto z-10 ${
            !navOpen ? "right-[-100%]" : "right-0"
          } `}
        >
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300">
            <Link
              to="/welcome"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">
                <div className="">
                  <img
                    src="./src/assets/acceuil.png"
                    alt="maison"
                    className=""
                  />{" "}
                </div>
                ACCEUIL
              </span>
            </Link>
          </li>
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300">
            <Link
              to="/search"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">
                <img src="./src/assets/loupe.png" alt="loupe" className="" />{" "}
                RECHERCHE
              </span>
            </Link>
          </li>
          <li className="sm:inline-block  sm:ml-10 ml-5 sm:my-0 my-6 border-b-2 border-Gray hover:border-White duration-300">
            <Link
              to="/profil"
              className="text- mr-25 cursor-pointer font-Barlow font-normal text-sm inline-block sm:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1 text-White">
                {" "}
                <img
                  src="./src/assets/profil.png"
                  alt="profile"
                  className=""
                />{" "}
                PROFILE
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
