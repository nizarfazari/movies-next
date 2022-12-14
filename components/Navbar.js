import { FaSearch, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./../styles/Navbar.module.scss";
import { useRouter } from "next/router";

import { useState } from "react";
const Navbar = () => {
  const router = useRouter();
  const [change, setChange] = useState("");
  const [active, setActive] = useState(false);

  const searchButton = (e) => {
    e.preventDefault();
    router.push(`/Movies?search=${change}`);
  };

  return (
    <nav className="sticky text-white">
      <div className="bg_nav h-full"></div>
      <div className="wrapper flex justify-between container mx-auto h-20 items-center">
        <div className="font-medium flex justify-between items-center">
          <h1 style={{ "font-family": "fantasy" }} className="cursor-pointer" onClick={() => router.push("/")}>
            MOV<span className={style.logo}>IES</span>
          </h1>
          <ul className="nav-right flex gap-x-5 font-medium m-0 items-center">
            <li className={style.li} onClick={() => router.push("/Movies")}>
              <a className={style.nav_link}>MOVIES</a>
            </li>
            <li className={style.li} onClick={() => router.push("/Genres")}>
              <a className={style.nav_link}>GENRES</a>
            </li>
            <li className={style.li}>
              <a className={style.nav_link}>TOP RATED</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <form className={style.searchbox} onSubmit={(e) => searchButton(e)}>
            <input className={style.search_input} onChange={(e) => setChange(e.target.value)} />
            <FaSearch className="absolute text-white right-5 pointer-events-none" />
          </form>
          <div className="ml-4" onClick={() => router.push("/login")}>
            <FaUserAlt className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="phone relative" style={{ backgroundColor: "#030d17" }}>
        <div className="flex justify-between container mx-auto h-20 items-center">
          <div>
            <GiHamburgerMenu onClick={() => setActive(!active)} />
          </div>
          <div>
            <h1 style={{ "font-family": "fantasy" }} className="cursor-pointer" onClick={() => router.push("/")}>
              MOV<span className={style.logo}>IES</span>
            </h1>
          </div>
          <div className="" onClick={() => router.push("/login")}>
            <FaUserAlt className="cursor-pointer" />
          </div>
        </div>
        <div className={`${active ? "block" : "hidden"}`} style={{ backgroundColor: "#06121e" }}>
          <ul className="grid justify-items-center pl-0 text-lg mb-0">
            <li className="py-3 ">
              <input placeholder="Search..." className="py-1 px-4 rounded-lg outline-[#fff] text-black" />
            </li>
            <li className="py-3">Movies</li>
            <li className="py-3">Genres</li>
            <li className="py-3">Top Rated</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
