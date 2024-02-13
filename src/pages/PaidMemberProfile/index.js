import React from "react";
import UserInfo from "../../components/UserInfo";
import { Button, Option, Select } from "@material-tailwind/react";
import Powerpoint from "../../assets/images/powerpoint.png";
import Word from "../../assets/images/word.png";
import Teams from "../../assets/images/teams.png";
import Excel from "../../assets/images/excel.png";
import ArrowRight from "../../assets/icons/arrow-right.png";
import ArrowImport from "../../assets/icons/arrow-import.png";
import "./paidMemberProfile.css";
import CustomTable from "../../components/CustomTable";

const PaidMemberProfile = () => {
  const chips = [
    "team Work",
    "networking",
    "MS Power BI",
    "Web Building",
    "Presentation",
  ];
  const icons = [Powerpoint, Word, Excel, Teams];
  const options = ["Subscription", "Single Payment"];

  const userDetails = [
    {
      label: "Name",
      value: "Angelie Nikieta",
    },
    {
      label: "Signed Up Date",
      value: "12 Jan, 21024",
    },
    {
      label: "Email",
      value: "angelieniki@gmail.com",
    },
  ];

  return (
    <div className="bg-white py-[7.5rem] px-4">
      <div className="max-w-[1320px] m-auto">
        {/* Section 1 */}
        <div className="flex items-center gap-9 pb-[5.5rem]">
          <div className="grow">
            <UserInfo icons={icons} chips={chips} />
          </div>
          <div className="flex flex-col gap-5 rounded-[16px] bg-[#F6F8FA] p-6">
            <div className="max-w-[190px]">
              <Select label="Membership">
                {options?.map((option, index) => (
                  <Option key={index}>{option}</Option>
                ))}
              </Select>
            </div>
            <div className="max-w-[146px] m-auto">
              <div className="flex items-center gap-[6px]">
                <div>
                  <img src={ArrowRight} alt="arrow icon" width={16} />
                </div>
                <div className="otherPageOptions">Invoice</div>
              </div>
              <div className="flex items-center">
                <div>
                  <img src={ArrowRight} alt="arrow icon" width={16} />
                </div>
                <div className="otherPageOptions">Saved Jobs</div>
              </div>
            </div>
            <Button className="bg-[#EB3D4D] py-4 px-5 text-base font-normal capitalize">
              Cancel Membership
            </Button>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col gap-8 bg-[#F6F8FA] py-8 px-20 rounded-[40px] mb-12">
          <div className="profile-invoice-section text-center">Invoice</div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            {userDetails?.map((userObj, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="userDetailTitle">{userObj?.label}: </div>
                <div className="userDetailValue">{userObj?.value}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[10px]">
            <div>
              <img src={ArrowImport} alt="arrow Icon" width={24} />
            </div>
            <div className="invoiceInsertText">Insert Invoices here</div>
          </div>
        </div>
        {/* Section 3 */}
        <div>
          <CustomTable />
        </div>
      </div>
    </div>
  );
};

export default PaidMemberProfile;
