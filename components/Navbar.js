import { FaSearch } from "react-icons/fa";
import style from "./../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="sticky text-white">
      <div className="flex justify-between container mx-auto h-20 items-center">
        <div className="logo font-medium">MOVIES</div>
        {/* <div className="nav-right flex gap-x-5 font-medium">
          <div className={style.searchbox}>
            <input className={style.search_input} />
            <FaSearch className="absolute text-white right-5 pointer-events-none" />
          </div>
          <div className="flex gap-x-5 relative">
            <button className={style.nav_button}>LOGIN</button>
            <button className={style.nav_button}>SIGN UP</button>
          </div>
        </div> */}
        <ul className="nav-right flex gap-x-5 font-medium m-0 items-center">
          <li className={style.searchbox}>
            <input className={style.search_input} />
            <FaSearch className="absolute text-white right-5 pointer-events-none" />
          </li>
          <li className={style.li}>
            <a className={style.nav_link}>LOGIN</a>
          </li>
          <li className={style.li}>
            <a className={style.nav_link}>SIGN UP</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
