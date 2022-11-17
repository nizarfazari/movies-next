import Footer from "./Footer";
import NavbarBg from "./NavbarBg";

const LayoutsBg = ({ children }) => {
  return (
    <div>
      <NavbarBg />

      {children}
      <div style={{ backgroundColor: "#06121e" }}>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutsBg;
