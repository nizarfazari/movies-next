import { LayoutsBg } from "../../components";
import { useRouter } from "next/router";
import { FaFacebookF, FaTwitter, FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";
const Login = () => {
  const router = useRouter();
  return (
    <LayoutsBg>
      <div className="">
        <div className="bg_nav"></div>
        <div className="text-white container mx-auto mt-20">
          <div className="flex flex-col items-center">
            <h1>Login</h1>
            <h3>Welcome to the Movies Website.</h3>
          </div>
        </div>
        <div className="text-white pt-20 mt-20" style={{ backgroundColor: "#030d17" }}>
          <div className="container mx-auto">
            <div className=" grid grid-cols-2 mb-5">
              <div className="flex flex-col login" style={{ paddingLeft: "145px" }}>
                <h1>Login</h1>
                <div className="input-login mb-4 mt-4">
                  <FaEnvelope className="absolute left-4 text-3xl top-2 text-[#b7b7b7]" />
                  <input />
                </div>
                <div className="input-login">
                  <FaLock className="absolute left-4 text-3xl top-2 text-[#b7b7b7]" />
                  <input />
                </div>
                <div>
                  <button className="mt-4 button_full_2 font-medium bg-[#db053f]">Login Now</button>
                </div>
              </div>
              <div className=" border-l-2" style={{ paddingLeft: "90px", minHeight: "400px" }}>
                <h1>Dont’t Have An Account?</h1>
                <button className="button_full_2 font-medium bg-[#db053f] mt-4" onClick={() => router.push("/register")}>
                  Register Now
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4">
              <div className="grid grid-cols-1 gap-y-4">
                <div className="button_full_2 font-medium bg-[#4267B2] flex items-center ">
                  <FaFacebookF className="mr-4 text-xl ml-1" />
                  <button className="ml-4">Sign In With Facebook</button>
                </div>
                <div className="button_full_2 font-medium bg-[#db053f] flex items-center">
                  <FaGoogle className="mr-4 text-xl ml-1" />
                  <button className="ml-4">Sign In With Google</button>
                </div>
                <div className="button_full_2 font-medium bg-[#1DA1F2] flex items-center ">
                  <FaTwitter className="mr-4 text-xl ml-1" />
                  <button className="ml-4 ">Sing In With Twitter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutsBg>
  );
};

export default Login;
