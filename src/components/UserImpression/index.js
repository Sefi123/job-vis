import React from "react";
import { Typography } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import userImg1 from "../../assets/images/userImg1.png";
import userImg2 from "../../assets/images/userImg2.png";
import userImg3 from "../../assets/images/userImg3.png";

const UserImpression = () => {
  const UresData = [
    {
      userImg: userImg1,
      userTitle: " John Richard",
      designation: "Businessman",
      userDesc:
        "  Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget.",
    },
    {
      userImg: userImg2,
      userTitle: " John Richard",
      designation: "Businessman",
      userDesc:
        "  Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget.",
    },
    {
      userImg: userImg3,
      userTitle: " John Richard",
      designation: "Businessman",
      userDesc:
        "  Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget.",
    },
  ];
  return (
    <div className="UserImpressions flex flex-col gap-[32px] md:gap-[92px] mt-[32px] md:mt-[64px]">
      <div className="heading text-center">
        <Typography
          variant="h2"
          className="text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight text-[#1D1F2C]"
        >
          User
          <span className="text-[#164ED4]"> Impressions</span>
        </Typography>
      </div>
      <div className="UserImpressions-card-wrapper grid md:grid-cols-2 xl:grid-cols-3 gap-[64px] px-[32px]">
        {UresData.map((item) => {
          return (
            <div className="UserImpressions-card bg-[#F9F9F8] rounded-[20px] p-[24px] pt-[32px]">
              <div className="UserImpressions-card-content">
                {/* <div className="flex items-center mt-[-28px] ml-[-32px]"> */}
                <div className="flex items-center">
                  {/* <div className="UserImpressions-img translate-x-[-28px] translate-y-[-28px]">
                    <img src={item.userImg} alt="UserImpressions-img" />
                  </div> */}
                  <div className="UserImpressions-card-heading flex gap-[6px] flex-col">
                    <div className="rating-bar">
                      <Rating value={4} />
                    </div>
                    <Typography
                      variant="h4"
                      className="text-lg md:text-2xl text-[#000]"
                    >
                      {item.userTitle}
                    </Typography>
                    <Typography className="text-base font-normal text-[#4A4C56]">
                      {item.designation}
                    </Typography>
                  </div>
                </div>
                <Typography className="text-base font-normal text-[#4A4C56]">
                  {item.userDesc}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserImpression;
