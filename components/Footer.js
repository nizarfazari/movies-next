import style from "./../styles/Footer.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <footer className={style.footer}>
      <div className="grid grid-cols-4 text-white container mx-auto pt-20">
        <div className="sm:col-span-2 col-span-4">
          <h1 style={{ "font-family": "fantasy" }}>
            MOV<span className={style.logo}>IES</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <ul className="xl:ml-20 md:ml-6 pl-0 flex flex-col gap-y-2">
            <li className="cursor-pointer" onClick={() => router.push("/")}>
              HOMEPAGE
            </li>
            <li className="cursor-pointer" onClick={() => router.push("/Movies")}>
              MOVIES
            </li>
            <li className="cursor-pointer" onClick={() => router.push("/Genres")}>
              GENRE
            </li>
            <li>TOP RATED</li>
          </ul>
        </div>
        <div className="flex flex-col items-center col-span-2 md:col-span-1">
          <h4>Social Media</h4>
          <ul className="flex text-4xl pl-0 gap-x-4">
            <li>
              <Image src="/icons/facebook.png" height={30} width={35} alt="icon" />
            </li>
            <li>
              <Image src="/icons/instagram.png" height={30} width={35} alt="icon" />
            </li>
            <li>
              <Image src="/icons/twitter.png" height={30} width={35} alt="icon" />
            </li>
          </ul>
        </div>
        <h4 className="col-span-4 mt-3 text-white text-base font-light">Movie App ©2022 Created by Muhammad Nizar Fazari</h4>
      </div>
      <div className="bg_foot"></div>
    </footer>
  );
};

export default Footer;
