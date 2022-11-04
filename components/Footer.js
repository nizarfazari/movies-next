import style from "./../styles/Footer.module.scss";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="grid grid-cols-4 text-white container mx-auto pt-20">
        <div className="col-span-2">
          <h1 style={{ "font-family": "fantasy" }}>
            MOV<span className={style.logo}>IES</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <ul className="ml-20 flex flex-col gap-y-2">
            <li>HOMEPAGE</li>
            <li>GENRES</li>
            <li>POPULAR</li>
            <li>TOPRATED</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4>Social Media</h4>
          <ul className="flex text-4xl pl-0 gap-x-4">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
          </ul>
        </div>
        <h4 className="col-span-4 mt-3 text-white text-base font-light">Movie App ©2022 Created by Muhammad Nizar Fazari</h4>
      </div>
    </footer>
  );
};

export default Footer;
