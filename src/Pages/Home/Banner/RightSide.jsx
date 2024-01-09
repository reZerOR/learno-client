import rect1 from "../../../assets/rect1.png";
import { motion } from "framer-motion";
import profile1 from "../../../assets/profile1.png";
import profile2 from "../../../assets/profile2.png";
import profile3 from "../../../assets/profile3.png";

const RightSide = () => {
  return (
    <div className="flex">
      {/* left side of right side */}
      <div>
        <div className="relative">
          <img src={rect1} className="" alt="" />
          <motion.div
            initial={{ clipPath: "inset(0% 10% 100% 90% round 10px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
            transition={{ duration: 0.3 }}
            className="w-[235px] box-border h-[325px] absolute -top-2 left-4  rounded-xl border-[6px] border-prime"
          ></motion.div>
        </div>
        <div className="mt-6">
          <div className="bg-white rounded-lg inline-block px-4 py-[22px]">
            {/* profile with border */}
            <div className="flex justify-between items-start">
              <img src={profile1} className="" alt="" />
              <img src={profile2} className=" -ml-4 " alt="" />
              <img src={profile3} className=" -ml-4 " alt="" />
              <img src={profile1} className=" -ml-4" alt="" />
            </div>
            {/* {profile box} */}
            <div className="flex items-center gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M13.333 1.83331H2.66634C1.93301 1.83331 1.33967 2.43331 1.33967 3.16665L1.33301 15.1666L3.99967 12.5H13.333C14.0663 12.5 14.6663 11.9 14.6663 11.1666V3.16665C14.6663 2.43331 14.0663 1.83331 13.333 1.83331ZM8.66634 9.83331H7.33301V8.49998H8.66634V9.83331ZM8.66634 7.16665H7.33301V4.49998H8.66634V7.16665Z"
                  fill="#312928"
                />
              </svg>
              <p className="text-textPrime">Real Time Feedback</p>
            </div>
          </div>
        </div>
      </div>
      {/* right side of right side */}
      <div>
        <div></div>
        <div className="relative">
          <img src={rect1} className="" alt="" />
          <motion.div
            initial={{ clipPath: "inset(0% 10% 100% 90% round 10px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
            transition={{ duration: 0.3 }}
            className="w-[235px] box-border h-[325px] absolute -top-2 left-4  rounded-xl border-[6px] border-prime"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
