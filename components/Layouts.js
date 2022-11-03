import Navbar from "./Navbar";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layouts;
