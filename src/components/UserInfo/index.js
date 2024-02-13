import React from "react";
import ProfileImg from "../../assets/images/profile.png";
import { Chip } from "@material-tailwind/react";

const UserInfo = ({ icons, chips }) => {
  return (
    <div class="flex flex-col gap-10 md:flex-row md:gap-0 md:justify-between">
      <div>
        <div>
          <img src={ProfileImg} width={116} />
        </div>
        <div className="profile-title">Angelie Nikieta</div>
        <div className="profile-email">angelieniki@gmail.com</div>
      </div>
      <div className="flex flex-col max-w-[239px] gap-8">
        <div>
          <div className="professional-skills mb-3">Professional Skills</div>
          <div className="flex flex-wrap gap-3">
            {chips.map((val, index) => (
              <Chip
                key={index}
                variant="ghost"
                value={val}
                className="rounded-[20px] bg-[#F6F8FA] w-fit"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="software-skills">Software Skills</div>
          <div className="flex items-center gap-4">
            {icons.map((icon, index) => (
              <img src={icon} alt="icon" width={32} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
