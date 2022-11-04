import { FaSearch, FaUserAlt } from "react-icons/fa";
import style from "./../styles/Navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="sticky text-white">
      <div className="flex justify-between container mx-auto h-20 items-center">
        <div className="font-medium flex justify-between items-center">
          <h1 style={{ "font-family": "fantasy" }} className="cursor-pointer" onClick={() => router.push("/")}>
            MOV<span className={style.logo}>IES</span>
          </h1>
          <ul className="nav-right flex gap-x-5 font-medium m-0 items-center">
            <li className={style.li}>
              <a className={style.nav_link}>HOMEPAGE</a>
            </li>
            <li className={style.li}>
              <a className={style.nav_link}>GENRES</a>
            </li>
            <li className={style.li}>
              <a className={style.nav_link}>POPULAR</a>
            </li>
            <li className={style.li}>
              <a className={style.nav_link}>TOP RATED</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className={style.searchbox}>
            <input className={style.search_input} />
            <FaSearch className="absolute text-white right-5 pointer-events-none" />
          </div>
          <div className="ml-4">
            <FaUserAlt className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
