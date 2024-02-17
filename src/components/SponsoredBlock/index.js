import React from "react";
import { Typography } from "@material-tailwind/react";

const sponsoredBlock = () => {
  return (
    <div className="sponsored-content-wrapper bg-[#F9F9F8] rounded-[40px] flex items-center gap-[49px] p-[30px] md:py-[64px] md:px-[50px] flex-wrap xl:flex-nowrap justify-center">
      <div className="sponsored-heading flex flex-col gap-[24px]">
        <Typography
          variant="h2"
          className="text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight text-[#1D1F2C]"
        >
          <span className="text-[#164ED4]">48,000+</span> companies sponsored
          HIB visas
        </Typography>
        <Typography className="text-base md:text-lg  font-normal leading-tight md:leading-tight lg:leading-tight text-[#4A4C56]">
          VisJobs is the Number 1 site that makes these jobs easily accessible
          to international job seekers in the US
        </Typography>
      </div>
      <div className="sponsor-card-container flex gap-[24px] flex-wrap xl:flex-nowrap justify-center">
        <div className="sponsor-card bg-[#fff] rounded-[32px] p-[24px] text-center">
          <div className="flex gap-2  flex-col">
            <Typography
              variant="h2"
              className="text-[20px] md:text-[28px] lg:text-[40px] leading-tight md:leading-tight lg:leading-tight text-[#1D1F2C]"
            >
              26,354
              <span className="text-[#164ED4]">+</span>
            </Typography>
            <Typography className="text-base text-[#4A4C56]  font-normal">
              Successful Hires
            </Typography>
          </div>
        </div>
        <div className="sponsor-card bg-[#fff] rounded-[32px] p-[24px] text-center">
          <div className="flex gap-2  flex-col">
            <Typography
              variant="h2"
              className="text-[20px] md:text-[28px] lg:text-[40px] leading-tight md:leading-tight lg:leading-tight text-[#1D1F2C]"
            >
              20,583
              <span className="text-[#164ED4]">+</span>
            </Typography>
            <Typography className="text-base text-[#4A4C56]  font-normal">
              Job Posted
            </Typography>
          </div>
        </div>
        <div className="sponsor-card bg-[#fff] rounded-[32px] p-[24px] text-center">
          <div className="flex gap-2  flex-col">
            <Typography
              variant="h2"
              className="text-[20px] md:text-[28px] lg:text-[40px] leading-tight md:leading-tight lg:leading-tight text-[#1D1F2C]"
            >
              40,000
              <span className="text-[#164ED4]">+</span>
            </Typography>
            <Typography className="text-base text-[#4A4C56]  font-normal">
              Verified Companies
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sponsoredBlock;
