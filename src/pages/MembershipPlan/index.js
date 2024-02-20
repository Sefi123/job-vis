import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const MembershipPlan = () => {
  return (
    <div>
      {/* Membership Section */}
      <div className="min-h-[740px] py-8 w-full flex items-center justify-center">
        <div>
          <div className="text-center text-[#164ED4] text-sm mb-[1.5rem]">
            Membership Plan
          </div>
          <div className="text-center text-[#1D1F2C] text-[1.5rem] sm:text-[2.5rem] font-bold mb-[1rem] md:mb-[4rem]">
            Choose a <span className="text-[#164ED4]">Membership</span> Plan
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-white flex flex-col gap-5 p-6 rounded-[20px]">
              <div className="text-center text-[#092159] text-[1.5rem] font-bold">
                One Time Payment
              </div>
              <div className="w-full border-b border-[#E8EDFB]" />
              <Button className="font-normal capitalize text-[#777980] text-[1.1rem] px-6 py-4 bg-[#F6F8FA] hover:bg-[#164ED4] hover:text-white">
                For 1 Week
              </Button>
              <Button className="font-normal capitalize text-[#777980] text-[1.1rem] px-6 py-4 bg-[#F6F8FA] hover:bg-[#164ED4] hover:text-white">
                For 1 Month
              </Button>
              <Button className="font-normal capitalize text-[#777980] text-[1.1rem] px-6 py-4 bg-[#F6F8FA] hover:bg-[#164ED4] hover:text-white">
                For 3 Months
              </Button>
            </div>
            <div className="bg-white flex flex-col gap-5 p-6 rounded-[20px]">
              <div className="text-center text-[#092159] text-[1.5rem] font-bold">
                Subs. Membership
              </div>
              <div className="w-full border-b border-[#E8EDFB]" />
              <Button className="font-normal capitalize text-[#777980] text-[1.1rem] px-6 py-4 bg-[#F6F8FA] hover:bg-[#164ED4] hover:text-white">
                Per Week
              </Button>
              <Button className="font-normal capitalize text-[#777980] text-[1.1rem] px-6 py-4 bg-[#F6F8FA] hover:bg-[#164ED4] hover:text-white">
                Per Month
              </Button>
              <Button className="font-normal capitalize text-[#777980] text-[1.1rem] px-6 py-4 bg-[#F6F8FA] hover:bg-[#164ED4] hover:text-white">
                Per Year
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* User Voices */}
      <div className="bg-white flex items-center justify-center min-h-[912px] py-8">
        <div className="max-w-[1340px] px-5">
          <div className="text-center text-[2rem] md:text-[3rem] text-[#4A4C56] font-bold mb-[1rem] md:mb-[4rem]">
            User <span className="text-[#164ED4]">Voices</span>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {Array(6)
              .fill(0)
              .map((val, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-8 rounded-[16px] bg-[#F6F8FA] max-w-[355px]"
                >
                  <Typography className="text-[1.1rem] font-normal text-[#4A4C56]">
                    As a recent OPT graduate, finding the right job was
                    overwhelming. This website not only simplified the job
                    search but also provided valuable resources and support.
                    Highly recommended!
                  </Typography>
                  <div className="text-center text-black text-[1.5rem] font-normal">
                    John Merkury
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlan;
