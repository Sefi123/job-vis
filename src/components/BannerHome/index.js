import React, { useState } from "react";
import { Typography, Input, Select, Option } from "@material-tailwind/react";
import "./bannerHome.css";
import bannerImg from "../../assets/images/banner-background-image.png";
import google from "../../assets/images/google.svg";
import netflix from "../../assets/images/netflix.svg";
import amazon from "../../assets/images/amazon.svg";
import palantir from "../../assets/images/palantir.svg";
import anthrop from "../../assets/images/anthrop.svg";
import { useNavigate } from "react-router-dom";

const BannerHome = () => {
  const navigate = useNavigate();
  const [parameters, setParameters] = useState({
    title: "",
    location: "",
    workType: {
      friendly: true,
      remote: false,
      hybrid: false,
    },
    duration: "Full-time",
    department: "software-engineering",
    work_field: [
      "computer-science",
      "health",
      "fintech",
      "education",
      "transport",
      "media",
    ],
  });

  const handleTitle = (value) => {
    setParameters({ ...parameters, title: value });
  };

  const handleLocation = (value) => {
    setParameters({ ...parameters, location: value });
  };

  const handleWorkType = (e) => {
    const { value, checked } = e.currentTarget;
    if (value === "remote")
      setParameters({
        ...parameters,
        workType: { ...parameters.workType, remote: checked },
      });
    else if (value === "friendly")
      setParameters({
        ...parameters,
        workType: { ...parameters.workType, friendly: checked },
      });
    else
      setParameters({
        ...parameters,
        workType: { ...parameters.workType, hybrid: checked },
      });
  };

  const handleDuration = (value) => {
    setParameters({ ...parameters, duration: value });
  };

  return (
    <div
      className="bannerHome py-[40px] md:py-[80px]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container mx-auto px-3">
        <div className="bannerContent text-center">
          <div className="relative">
            <div className="absolute top-[50px] left-0  z-[-1] hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <circle cx="36" cy="36" r="36" fill="#75E3EA" />
              </svg>
            </div>
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl lg:text-8xl leading-tight md:leading-tight lg:leading-tight text-[#4A4C56]"
            >
              Elevate Your
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl lg:text-8xl leading-tight md:leading-tight lg:leading-tight text-[#4A4C56] max-w-[1146px] mx-auto"
            >
              <span className="text-[#164ED4]">H1B/OPT Career</span> Search!
            </Typography>
            <div className="absolute top-0 right-0  z-[-1] hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="194"
                viewBox="0 0 192 194"
                fill="none"
              >
                <g filter="url(#filter0_d_348_3315)">
                  <rect
                    width="64.7654"
                    height="65.3645"
                    rx="20"
                    transform="matrix(0.936134 -0.351877 0.325035 0.945784 55.3091 73.7894)"
                    fill="#F3617C"
                  />
                </g>
                <g clip-path="url(#clip0_348_3315)">
                  <path
                    d="M111.768 88.6663C112.559 91.6096 112.531 94.7341 111.685 97.6887C110.84 100.643 109.212 103.311 106.984 105.391C104.755 107.472 102.015 108.883 99.0715 109.467C96.1278 110.05 93.097 109.782 90.3197 108.693L97.0655 94.1928L111.768 88.6663Z"
                    fill="white"
                  />
                  <path
                    d="M111.025 86.5057L96.9488 91.7968L92.0161 77.4436C95.7546 76.3376 99.7349 76.6452 103.227 78.3097C106.718 79.9743 109.487 82.8843 111.025 86.5057Z"
                    fill="white"
                  />
                  <path
                    d="M88.2967 107.729C85.6986 106.255 83.5646 104.061 82.1344 101.393C80.7042 98.7242 80.0346 95.6876 80.2008 92.6239C80.367 89.5602 81.3625 86.5911 83.0753 84.0501C84.788 81.5091 87.1503 79.4971 89.8965 78.2401L95.0486 93.2317"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_348_3315"
                    x="0.708008"
                    y="0.765259"
                    width="191.077"
                    height="193.079"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="30" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.920833 0 0 0 0 0.0498785 0 0 0 0 0.0498785 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_348_3315"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_348_3315"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_348_3315">
                    <rect
                      width="38.8593"
                      height="39.2187"
                      fill="white"
                      transform="matrix(0.936134 -0.351877 0.325035 0.945784 71.6841 81.5956)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <Typography
            variant="paragraph"
            className="text-[#1D1F2C] md:text-2xl max-w-[965px] mx-auto mt-6"
          >
            Are you an international job seeker looking for visa-sponsored jobs
            in the United States? VisJobs is here to help. Your one stop-shop
            for H1B/OPT jobs.
          </Typography>
          <div className="relative">
            <div className="absolute top-[50%] left-[0] translate-y-[-50%] z-[-1] hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="190"
                height="193"
                viewBox="0 0 190 193"
                fill="none"
              >
                <g filter="url(#filter0_d_348_3307)">
                  <rect
                    width="64.5802"
                    height="65.5455"
                    rx="20"
                    transform="matrix(0.965185 0.261827 -0.238477 0.971213 71.6309 52.343)"
                    fill="#57C9A0"
                  />
                </g>
                <g clip-path="url(#clip0_348_3307)">
                  <path
                    d="M106.83 106.909L100.415 97.9037C102.404 96.2299 103.811 93.941 104.43 91.371C105.118 88.5979 104.873 85.6551 103.734 83.0159C102.595 80.3767 100.629 78.1946 98.1505 76.8205C95.6724 75.4464 92.827 74.9602 90.0719 75.4401C87.3169 75.92 84.8122 77.3381 82.961 79.4663C81.1097 81.5945 80.0194 84.3092 79.8654 87.1736C79.7115 90.0379 80.5028 92.8856 82.1121 95.2584C83.7214 97.6312 86.0551 99.3914 88.7379 100.256C91.4208 101.12 94.2967 101.038 96.9032 100.023L101.51 110.032C101.679 110.457 101.935 110.841 102.261 111.158C102.586 111.476 102.973 111.718 103.396 111.87C103.818 112.023 104.266 112.08 104.71 112.04C105.154 111.999 105.582 111.861 105.967 111.636C106.352 111.41 106.683 111.101 106.94 110.731C107.196 110.361 107.371 109.937 107.453 109.489C107.535 109.041 107.522 108.579 107.414 108.134C107.307 107.689 107.108 107.271 106.83 106.909ZM95.4759 85.1228C95.1677 85.0392 94.8894 84.8641 94.6761 84.6197C94.4627 84.3753 94.324 84.0726 94.2775 83.7498C94.231 83.427 94.2787 83.0986 94.4146 82.8062C94.5505 82.5138 94.7686 82.2705 95.0412 82.1071C95.3137 81.9436 95.6286 81.8674 95.946 81.888C96.2633 81.9086 96.5689 82.0251 96.8241 82.2228C97.0792 82.4205 97.2725 82.6905 97.3795 82.9986C97.4865 83.3068 97.5023 83.6393 97.425 83.954C97.3214 84.3761 97.0578 84.7364 96.6923 84.9556C96.3268 85.1747 95.8892 85.2349 95.4759 85.1228ZM103.712 109.051L100.63 102.375L104.92 108.394C104.994 108.483 105.047 108.589 105.074 108.703C105.101 108.816 105.101 108.934 105.075 109.047C105.037 109.201 104.95 109.336 104.829 109.433C104.707 109.53 104.557 109.582 104.402 109.583C104.247 109.583 104.096 109.531 103.971 109.435C103.846 109.339 103.755 109.204 103.712 109.051Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_348_3307"
                    x="0.184082"
                    y="0.881104"
                    width="189.594"
                    height="191.491"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="30" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.135538 0 0 0 0 0.879167 0 0 0 0 0.43299 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_348_3307"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_348_3307"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_348_3307">
                    <rect
                      width="38.7481"
                      height="39.3273"
                      fill="white"
                      transform="matrix(0.965185 0.261827 -0.238477 0.971213 80.9707 68.4565)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="banner-input-wrapper flex justify-between p-3 bg-[#fff] rounded-xl max-w-[742px] mx-auto flex-wrap gap-y-3 md:gap-y-0">
              <div className="w-[100%] md:w-[50%] relative banner-input-content">
                <div class="absolute left-0 top-[50%] translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                  >
                    <path
                      d="M25.1184 24.3817L20.6372 19.9005C22.1352 18.1237 23.0417 15.8335 23.0417 13.3333C23.0417 7.70417 18.4625 3.125 12.8333 3.125C7.20417 3.125 2.625 7.70417 2.625 13.3333C2.625 18.9625 7.20417 23.5417 12.8333 23.5417C15.3335 23.5417 17.6237 22.6352 19.4005 21.1372L23.8816 25.6183C24.052 25.7887 24.276 25.875 24.5 25.875C24.724 25.875 24.948 25.7898 25.1184 25.6183C25.4602 25.2777 25.4602 24.7235 25.1184 24.3817ZM4.375 13.3333C4.375 8.669 8.169 4.875 12.8333 4.875C17.4977 4.875 21.2917 8.669 21.2917 13.3333C21.2917 17.9977 17.4977 21.7917 12.8333 21.7917C8.169 21.7917 4.375 17.9977 4.375 13.3333Z"
                      fill="#4A4C56"
                    />
                  </svg>
                </div>
                <Input
                  placeholder="Job Title or Keywords"
                  className="border-none rounded-none placeholder:opacity-100"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={parameters?.title}
                  onChange={(e) => handleTitle(e.currentTarget.value)}
                />
              </div>
              <div className="w-[100%] md:w-[50%] relative banner-input-content">
                <div class="absolute left-0 md:left-2.5 top-[50%] translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                  >
                    <path
                      d="M13.9998 3.125C8.37067 3.125 3.7915 7.70417 3.7915 13.3333C3.7915 19.3043 9.27133 22.9233 12.8973 25.3184L13.5145 25.728C13.6615 25.826 13.8307 25.875 13.9998 25.875C14.169 25.875 14.3382 25.826 14.4852 25.728L15.1023 25.3184C18.7283 22.9233 24.2082 19.3043 24.2082 13.3333C24.2082 7.70417 19.629 3.125 13.9998 3.125ZM14.1387 23.8578L13.9998 23.9501L13.861 23.8578C10.3493 21.5385 5.5415 18.3628 5.5415 13.3333C5.5415 8.669 9.3355 4.875 13.9998 4.875C18.6642 4.875 22.4582 8.669 22.4582 13.3333C22.4582 18.3628 17.6492 21.5397 14.1387 23.8578ZM13.9998 9.54167C11.9092 9.54167 10.2082 11.2427 10.2082 13.3333C10.2082 15.424 11.9092 17.125 13.9998 17.125C16.0905 17.125 17.7915 15.424 17.7915 13.3333C17.7915 11.2427 16.0905 9.54167 13.9998 9.54167ZM13.9998 15.375C12.874 15.375 11.9582 14.4592 11.9582 13.3333C11.9582 12.2075 12.874 11.2917 13.9998 11.2917C15.1257 11.2917 16.0415 12.2075 16.0415 13.3333C16.0415 14.4592 15.1257 15.375 13.9998 15.375Z"
                      fill="#4A4C56"
                    />
                  </svg>
                </div>
                <Input
                  placeholder="Location"
                  className="border-none rounded-none placeholder:opacity-100"
                  value={parameters?.location}
                  onChange={(e) => handleLocation(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="toggle-btn-container flex-wrap">
              {Object.keys(parameters?.workType)?.map((work_type, index) => (
                <label
                  class="inline-flex items-center  cursor-pointer"
                  key={index}
                >
                  <span class="mr-3 text-lg font-medium text-gray-900 dark:text-gray-300 capitalize">
                    {index == 0 ? "HIB/OPT " + work_type : work_type}
                  </span>
                  <input
                    type="checkbox"
                    value={work_type}
                    checked={parameters?.workType[work_type]}
                    className="sr-only peer"
                    onClick={(e) => handleWorkType(e)}
                  />
                  <div class="relative w-11 h-6 bg-[#D8D8D8] rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2F54EB]"></div>
                </label>
              ))}

              <div class="relative">
                <Select
                  variant="static"
                  size="sm"
                  placeholder="Select Duration"
                  onChange={(e) => handleDuration(e)}
                  value={parameters?.duration}
                  className="jobDurationList"
                >
                  <Option value="Full-time">Full Time</Option>
                  <Option value="Part-time">Part Time</Option>
                </Select>
              </div>

              <div class="relative">
                <Select
                  variant="static"
                  size="sm"
                  value={parameters?.department}
                  onChange={(value) =>
                    setParameters({ ...parameters, department: value })
                  }
                  placeholder="Select Field"
                  className="jobDurationList"
                >
                  <Option value="software-engineering">
                    Software Engineering
                  </Option>
                  <Option value="engineering">Engineering</Option>
                  <Option value="marketing">Marketing</Option>
                  <Option value="design">Design</Option>
                  <Option value="product">Product</Option>
                  <Option value="product-management">Product Management</Option>
                  <Option value="finance">Finance</Option>
                  <Option value="data-science">Data Science</Option>
                  <Option value="recruiting-hr">Recruiting & HR</Option>
                  <Option value="administrative-services">
                    Administrative Services
                  </Option>
                  <Option value="legal">Legal</Option>
                  <Option value="customer-services">Customer Services</Option>
                  <Option value="business-operations">
                    Business Operations
                  </Option>
                </Select>
              </div>
            </div>
            <div className="absolute right-0 top-[100%] z-[-1] hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle cx="20" cy="20" r="20" fill="#FFD540" />
              </svg>
            </div>
          </div>

          <div>
            <button
              class="mx-auto my-[24px] md:my-[48px] flex justify-center items-center gap-[8px] select-none rounded-lg bg-[#164ED4] p-[16px] max-w-[222px] w-full font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() =>
                navigate("/job-list", { state: { jobParameters: parameters } })
              }
            >
              Find Jobs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M18.5882 10.59L12.7557 16.4226C12.5932 16.5851 12.3798 16.6667 12.1665 16.6667C11.9532 16.6667 11.7398 16.5851 11.5773 16.4226C11.2515 16.0967 11.2515 15.57 11.5773 15.2442L15.9881 10.8334H2.99984C2.539 10.8334 2.1665 10.46 2.1665 10C2.1665 9.54003 2.539 9.1667 2.99984 9.1667H15.9881L11.5773 4.75589C11.2515 4.43006 11.2515 3.90334 11.5773 3.5775C11.9031 3.25167 12.4299 3.25167 12.7557 3.5775L18.5882 9.41002C18.6657 9.48752 18.7266 9.57913 18.7691 9.68163C18.8532 9.88496 18.8532 10.1151 18.7691 10.3184C18.7266 10.4209 18.6657 10.5125 18.5882 10.59Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div
            class="logo-container flex items-center
          justify-center gap-[16px] md:gap-[32px] pt-0 md:pt-[32px] flex-wrap"
          >
            <div className="logo p-[10px] md:p-[20px]">
              <img src={google} alt="google" />
            </div>
            <div className="logo p-[10px] md:p-[20px]">
              <img src={netflix} alt="netflix" />
            </div>
            <div className="logo p-[10px] md:p-[20px]">
              <img src={amazon} alt="amazon" />
            </div>
            <div className="logo p-[10px] md:p-[20px]">
              <img src={palantir} alt="palantir" />
            </div>
            <div className="logo p-[10px] md:p-[20px]">
              <img src={anthrop} alt="anthrop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
