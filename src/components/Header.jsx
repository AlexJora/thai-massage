import { FaPhone, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex py-3 space-x-8 text-sm text-white bg-primary-400 justify-evenly md:px-10">
      <div className="flex items-center space-x-2">
        <FaPhone className="text-xl text-secondary-300" />
        <p>+27 (0) 21 424 7444 | +27 (0) 71 578 0477</p>
      </div>
      <div className="items-center hidden space-x-2 lg:flex">
        <FaLocationDot className="text-xl text-secondary-300" />
        <p>46 Riebeek Street Cape Town</p>
      </div>
      <div className="items-center hidden space-x-2 lg:flex">
        <FaClock className="text-xl text-secondary-300" />
        <p>Hours: Monday to Sunday: 10:00 am to 7:00 pm</p>
      </div>
    </div>
  );
};

export default Header;
