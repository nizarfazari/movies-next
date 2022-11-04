import Footer from "./Footer";
import Navbar from "./Navbar";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
