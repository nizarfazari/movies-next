import { LayoutsBg } from "../../components";
import { FaFacebookF, FaTwitter, FaGoogle, FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
const index = () => {
  return (
    <LayoutsBg>
      <div className="">
        <div className="bg_nav"></div>
        <div className="text-white container mx-auto mt-20">
          <div className="flex flex-col items-center">
            <h1>Sign Up</h1>
            <h3>Welcome to the Movies Website.</h3>
          </div>
        </div>
        <div className="text-white pt-20 mt-20 bg-[#030d17] h-screen">
          <div className="container mx-auto">
            <div className=" grid lg:grid-cols-2 grid-cols-1 mb-5 ">
              <div className="flex justify-center">
                <div className="flex flex-col login min-w-[400px]">
                  <h1>Sign Up</h1>
                  <div className="input-login mb-4 mt-4">
                    <FaUserAlt className="absolute left-4 text-2xl top-2 text-[#b7b7b7]" />
                    <input />
                  </div>
                  <div className="input-login mb-4">
                    <FaEnvelope className="absolute left-4 text-2xl top-2 text-[#b7b7b7]" />
                    <input />
                  </div>
                  <div className="input-login">
                    <FaLock className="absolute left-4 text-2xl top-2 text-[#b7b7b7]" />
                    <input />
                  </div>
                  <div>
                    <button className="mt-4 button_full_2 font-medium bg-[#db053f]">Register Now</button>
                    <p className="mt-4">
                      Already have an account?{" "}
                      <Link className="text-[#db053f] font-medium no-underline" href="/login">
                        Log In!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:border-l-2 border-l-0 flex justify-center mt-10 lg:mt-0">
                <div className="min-w-[400px]">
                  <h1>Login With:</h1>
                  <div className="flex flex-col mt-4 max-w-[400px]">
                    <div className="grid grid-cols-1 gap-y-4">
                      <div className="button_full_2 font-medium bg-[#4267B2] flex items-center cursor-pointer">
                        <FaFacebookF className="mr-4 text-xl ml-1" />
                        <button className="ml-4">Sign In With Facebook</button>
                      </div>
                      <div className="button_full_2 font-medium bg-[#db053f] flex items-center cursor-pointer">
                        <FaGoogle className="mr-4 text-xl ml-1" />
                        <button className="ml-4">Sign In With Google</button>
                      </div>
                      <div className="button_full_2 font-medium bg-[#1DA1F2] flex items-center cursor-pointer">
                        <FaTwitter className="mr-4 text-xl ml-1" />
                        <button className="ml-4 ">Sing In With Twitter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutsBg>
  );
};

export default index;
