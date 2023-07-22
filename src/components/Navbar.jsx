import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import HeroImg from "../assets/png-logo-header.webp";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  // quy

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[90px] bg-purple-500 bg-opacity-80">
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to="/">
          <img src={HeroImg} className="w-20" size="40" />
        </Link>
        {user?.email ? (
          <div className="flex flex-wrap items-center justify-center ">
            {/* <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class=" w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Movie Name from here"
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form> */}

            <ul className="flex text-white items-center">
              <li>PLatform</li>
              <li>Developers</li>
              <li>Community</li>
              <li>About</li>
              <Link to="/account">
                <div className="text-blue-600 text-center items-end">
                  <FaRegUserCircle
                    className="flex flex-wrap items-center justify-center w-full"
                    size={30}
                  />
                  Account
                </div>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </ul>
          </div>
        ) : (
          <div>
            <div className="hidden md:flex">
              {/* {search} */}
              {/* <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class=" w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Movie Name from here"
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form> */}

              <ul className="flex text-white items-center">
                <Link to="/login">
                  <li>PLatform</li>
                </Link>
                <li>Developers</li>
                <li>Community</li>
                <li>About</li>

                <Link to="/login">
                  <button>Sign In</button>
                </Link>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </ul>
            </div>
            {/* {Hambuger menu} */}
            <div onClick={handleNav} className="block md:hidden">
              {nav ? (
                <AiOutlineClose size={30} className="text-white" />
              ) : (
                <AiOutlineMenu size={30} className="text-white" />
              )}
            </div>

            {/* {Mobile Menu} */}
            <div
              className={
                nav
                  ? "w-full bg-purple-500 bg-opacity-80 text-white absolute top-[90px] left-0 flex justify-center text-center"
                  : "absolute left-[-100%]"
              }
            >
              <ul>
                <li className="text-2xl">PLatform</li>
                <li className="text-2xl">Developers</li>
                <li className="text-2xl">Community</li>
                <li className="text-2xl">About</li>

                <Link to="/login">
                  <button>Sign In</button>
                </Link>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// mport React, {useState} from "react";
// import HeroImg from '../assets/png-logo-header.webp';
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//     const [nav, setNav] = useState(false);
//     const handleNav = () => {
//         setNav(!nav)
//     }
//   return (
//     <div className="w-full h-[90px] bg-blue-600">
//       <div className="max-w-[1240] mx-auto px-4 flex justify-between items-center h-full">
//         <div>
//         <img src={HeroImg} className="w-20" />
//           {/* <h1 className="text-[#f45d3f]">MOR</h1> */}
//         </div>
//         <div className="hidden md:flex">
//           <ul className="flex text-white items-center">
//             <li>PLatform</li>
//             <li>Developers</li>
//             <li>Community</li>
//             <li>About</li>
//             <button className="ml-4">Use Mor</button>
//           </ul>
//         </div>
//         {/* {Hambuger menu} */}
//         <div onClick={handleNav} className="block md:hidden">
//                 {nav? <AiOutlineClose size={30} className="text-white"/> :  <AiOutlineMenu size={30} className="text-white"/> }
//         </div>

//         {/* {Mobile Menu} */}
//         <div className={nav ? "w-full bg-blue-600 text-white absolute top-[90px] left-0 flex justify-center text-center" : 'absolute left-[-100%]'}>
//           <ul>
//             <li className="text-2xl">PLatform</li>
//             <li className="text-2xl">Developers</li>
//             <li className="text-2xl">Community</li>
//             <li className="text-2xl">About</li>
//             <button className="m-8 py-8">Use Mor</button>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
