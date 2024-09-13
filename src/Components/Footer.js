import React from "react";
import { GrGithub, GrLinkedinOption, GrMail } from "react-icons/gr";

function Footer() {
  return (
    <div>
      <div className="w-full bg-orange-900 bg-opacity-90 p-4">
        {/* Single Flex Container for All Links */}
        <div className="flex flex-row flex-wrap justify-around items-center gap-4">
          {/* LinkedIn */}
          <a
            href="http://www.linkedin.com/in/ahmed-abdulmawjood-a48a232a9"
            target="blank"
            className="text-lg flex items-center text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-orange-600">
              <GrLinkedinOption className="text-white" />
            </div>
            <span className="text-white ml-1">Connect with Me!</span>
          </a>

          {/* Email */}
          <a
            href="mailto:ahmed.abdulmawjood05@gmail.com"
            target="blank"
            className="text-lg flex items-center text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-orange-600">
              <GrMail className="text-white" />
            </div>
            <span className="text-white ml-1">
              ahmed.abdulmawjood05@gmail.com
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ahmed-Abdulmawjood"
            target="blank"
            className="text-lg flex items-center text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-orange-600">
              <GrGithub className="text-white" />
            </div>
            <span className="text-white ml-1">Ahmed-Abdulmawjood</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
