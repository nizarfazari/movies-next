import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutsBg = ({ children }) => {
  return (
    <div>
      <div style={{ backgroundColor: "#06121e" }}>
        <Navbar />
      </div>
      {children}
      <div style={{ backgroundColor: "#06121e" }}>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutsBg;
