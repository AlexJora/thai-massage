import { FaPhone, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex py-3 space-x-8 text-sm text-white bg-primary-300 justify-evenly md:px-10">
      <div className="flex items-center space-x-2">
        <FaPhone className="text-xl" />
        <p>+27 (0) 21 424 7444 | +27 (0) 71 578 0477</p>
      </div>
      <div className="items-center hidden space-x-2 md:flex">
        <FaLocationDot className="text-xl" />
        <p>36 Long Street Cape Town</p>
      </div>
      <div className="items-center hidden space-x-2 md:flex">
        <FaClock className="text-xl" />
        <p>Hours: Monday to Sunday: 10:00 am to 7:00 pm</p>
      </div>
    </div>
  );
};

export default Header;
