import React from "react";
import "./JobList.css";
import JobCard from "../../components/JobCard";
import { Input } from "@material-tailwind/react";

const tags = [
  {
    title: "Computer Science",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M18.5 2.5H6.5C4.21 2.5 3 3.71 3 6V14C3 16.29 4.21 17.5 6.5 17.5H10V20.5H8C7.724 20.5 7.5 20.724 7.5 21C7.5 21.276 7.724 21.5 8 21.5H17C17.276 21.5 17.5 21.276 17.5 21C17.5 20.724 17.276 20.5 17 20.5H15V17.5H18.5C20.79 17.5 22 16.29 22 14V6C22 3.71 20.79 2.5 18.5 2.5ZM14 20.5H11V17.5H14V20.5ZM21 14C21 15.729 20.229 16.5 18.5 16.5H14.5H10.5H6.5C4.771 16.5 4 15.729 4 14V6C4 4.271 4.771 3.5 6.5 3.5H18.5C20.229 3.5 21 4.271 21 6V14ZM10.854 8.354L9.20801 10L10.854 11.646C11.049 11.841 11.049 12.158 10.854 12.353C10.756 12.451 10.628 12.499 10.5 12.499C10.372 12.499 10.244 12.45 10.146 12.353L8.146 10.353C7.951 10.158 7.951 9.841 8.146 9.646L10.146 7.646C10.341 7.451 10.658 7.451 10.853 7.646C11.048 7.841 11.049 8.158 10.854 8.354ZM16.854 9.646C17.049 9.841 17.049 10.158 16.854 10.353L14.854 12.353C14.756 12.451 14.628 12.499 14.5 12.499C14.372 12.499 14.244 12.45 14.146 12.353C13.951 12.158 13.951 11.841 14.146 11.646L15.792 10L14.146 8.354C13.951 8.159 13.951 7.84197 14.146 7.64697C14.341 7.45197 14.658 7.45197 14.853 7.64697L16.854 9.646Z"
          fill="#25314C"
        />
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M20.596 5.34998C19.61 4.14798 18.187 3.508 16.481 3.5C16.474 3.5 16.466 3.5 16.459 3.5C14.478 3.5 13.183 4.73703 12.501 5.84003C11.819 4.73703 10.524 3.5 8.54302 3.5C8.53502 3.5 8.52705 3.5 8.52105 3.5C6.81705 3.508 5.39501 4.14801 4.40801 5.35101C3.17701 6.85201 2.71701 9.17397 3.17901 11.561C4.38801 17.792 11.972 21.309 12.294 21.456C12.359 21.486 12.431 21.501 12.501 21.501C12.571 21.501 12.6431 21.486 12.7081 21.456C13.0301 21.309 20.6141 17.793 21.8221 11.561C22.2851 9.17197 21.827 6.85098 20.596 5.34998ZM20.839 11.37C19.836 16.548 13.7111 19.84 12.5001 20.444C11.2891 19.84 5.16408 16.548 4.16008 11.37C3.75308 9.272 4.1341 7.25899 5.1801 5.98499C5.9831 5.00599 7.1081 4.507 8.5241 4.5C8.5311 4.5 8.537 4.5 8.544 4.5C11.1 4.5 11.99 7.03897 12.027 7.14697C12.164 7.55297 12.838 7.55297 12.974 7.14697C13.011 7.03897 13.9021 4.5 16.4571 4.5C16.4641 4.5 16.4701 4.5 16.4771 4.5C17.8951 4.507 19.021 5.00599 19.823 5.98499C20.8671 7.25699 21.247 9.271 20.839 11.37Z"
          fill="#25314C"
        />
      </svg>
    ),
  },
  {
    title: "Financial Technology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M19 7.5C19 5.565 17.935 4.5 16 4.5H6C4.065 4.5 3 5.565 3 7.5V14.5C3 16.435 4.065 17.5 6 17.5C6 19.435 7.065 20.5 9 20.5H19C20.935 20.5 22 19.435 22 17.5V10.5C22 8.565 20.935 7.5 19 7.5ZM4 14.5V7.5C4 6.117 4.617 5.5 6 5.5H16C17.383 5.5 18 6.117 18 7.5V14.5C18 15.883 17.383 16.5 16 16.5H6C4.617 16.5 4 15.883 4 14.5ZM21 17.5C21 18.902 20.402 19.5 19 19.5H9C7.598 19.5 7 18.902 7 17.5H16C17.935 17.5 19 16.435 19 14.5V8.5C20.402 8.5 21 9.098 21 10.5V17.5ZM6 11.757C5.586 11.757 5.25 11.421 5.25 11.007C5.25 10.593 5.586 10.257 6 10.257C6.414 10.257 6.75 10.593 6.75 11.007C6.75 11.422 6.414 11.757 6 11.757ZM15.25 11.007C15.25 10.593 15.586 10.257 16 10.257C16.414 10.257 16.75 10.593 16.75 11.007C16.75 11.421 16.414 11.757 16 11.757C15.586 11.757 15.25 11.422 15.25 11.007ZM11 14C12.654 14 14 12.654 14 11C14 9.346 12.654 8 11 8C9.346 8 8 9.346 8 11C8 12.654 9.346 14 11 14ZM11 9C12.103 9 13 9.897 13 11C13 12.103 12.103 13 11 13C9.897 13 9 12.103 9 11C9 9.897 9.897 9 11 9Z"
          fill="#4A4C56"
        />
      </svg>
    ),
  },
  {
    title: "Education",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M19 2.5H7.5C5.21 2.5 4 3.71 4 6V18C4 20.093 5.406 21.5 7.5 21.5H19C20.103 21.5 21 20.603 21 19.5V13.5V11V4.5C21 3.397 20.103 2.5 19 2.5ZM7.5 3.5H19C19.552 3.5 20 3.949 20 4.5V11V13.5C20 14.051 19.552 14.5 19 14.5H7.5C6.471 14.5 5.612 14.843 5 15.437V6C5 4.271 5.771 3.5 7.5 3.5ZM19 20.5H7.5C5.935 20.5 5 19.565 5 18C5 16.435 5.935 15.5 7.5 15.5H19C19.366 15.5 19.705 15.394 20 15.222V19.5C20 20.051 19.552 20.5 19 20.5ZM9 7C9 6.724 9.224 6.5 9.5 6.5H15.5C15.776 6.5 16 6.724 16 7C16 7.276 15.776 7.5 15.5 7.5H9.5C9.224 7.5 9 7.276 9 7ZM9 10C9 9.724 9.224 9.5 9.5 9.5H13.5C13.776 9.5 14 9.724 14 10C14 10.276 13.776 10.5 13.5 10.5H9.5C9.224 10.5 9 10.276 9 10Z"
          fill="#4A4C56"
        />
      </svg>
    ),
  },
  {
    title: "Transport",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M16.5 2.5H8.5C6.21 2.5 5 3.71 5 6V17C5 18.723 5.686 19.833 7 20.278V21C7 21.276 7.224 21.5 7.5 21.5C7.776 21.5 8 21.276 8 21V20.465C8.164 20.479 8.323 20.5 8.5 20.5H16.5C16.677 20.5 16.836 20.479 17 20.465V21C17 21.276 17.224 21.5 17.5 21.5C17.776 21.5 18 21.276 18 21V20.278C19.314 19.833 20 18.722 20 17V6C20 3.71 18.79 2.5 16.5 2.5ZM8.5 3.5H16.5C18.229 3.5 19 4.271 19 6V13.5H6V6C6 4.271 6.771 3.5 8.5 3.5ZM16.5 19.5H8.5C6.771 19.5 6 18.729 6 17V14.5H19V17C19 18.729 18.229 19.5 16.5 19.5ZM11 6C11 5.724 11.224 5.5 11.5 5.5H13.5C13.776 5.5 14 5.724 14 6C14 6.276 13.776 6.5 13.5 6.5H11.5C11.224 6.5 11 6.276 11 6ZM16.25 17C16.25 17.414 15.915 17.75 15.504 17.75C15.091 17.75 14.75 17.414 14.75 17C14.75 16.586 15.077 16.25 15.488 16.25H15.503C15.915 16.25 16.25 16.586 16.25 17ZM10.25 17C10.25 17.414 9.915 17.75 9.504 17.75C9.091 17.75 8.75 17.414 8.75 17C8.75 16.586 9.07701 16.25 9.48801 16.25H9.50299C9.91499 16.25 10.25 16.586 10.25 17ZM22 10V13C22 13.276 21.776 13.5 21.5 13.5C21.224 13.5 21 13.276 21 13V10C21 9.724 21.224 9.5 21.5 9.5C21.776 9.5 22 9.724 22 10ZM4 10V13C4 13.276 3.776 13.5 3.5 13.5C3.224 13.5 3 13.276 3 13V10C3 9.724 3.224 9.5 3.5 9.5C3.776 9.5 4 9.724 4 10Z"
          fill="#4A4C56"
        />
      </svg>
    ),
  },
  {
    title: "Media & Entertainment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M18.125 2.5H6.875C4.34 2.5 3 3.84 3 6.375V17.625C3 20.16 4.34 21.5 6.875 21.5H18.125C20.66 21.5 22 20.16 22 17.625V6.375C22 3.84 20.66 2.5 18.125 2.5ZM17 8.5H21V11.5H17V8.5ZM16 11.5H9V3.5H16V11.5ZM8 11.5H4V8.5H8V11.5ZM4 12.5H8V15.5H4V12.5ZM9 12.5H16V20.5H9V12.5ZM17 12.5H21V15.5H17V12.5ZM21 6.375V7.5H17V3.5H18.125C20.087 3.5 21 4.414 21 6.375ZM6.875 3.5H8V7.5H4V6.375C4 4.414 4.913 3.5 6.875 3.5ZM4 17.625V16.5H8V20.5H6.875C4.913 20.5 4 19.586 4 17.625ZM18.125 20.5H17V16.5H21V17.625C21 19.586 20.087 20.5 18.125 20.5Z"
          fill="#4A4C56"
        />
      </svg>
    ),
  },
];

const JobList = () => {
  return (
    <div className="jobs-container mx-2 max-w-[1324px] sm:m-auto">
      <div className="p-4">
        <div className="banner-input-wrapper flex justify-between p-3 bg-[#fff] rounded-xl mx-auto flex-wrap gap-y-3 md:gap-y-0">
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
              label="Job Title or Keywords"
              className="border-none rounded-none"
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
            <Input label="Location" className="border-none rounded-none" />
          </div>
        </div>
        <div className="toggle-btn-container flex-wrap">
          <label class="inline-flex items-center  cursor-pointer">
            <span class="mr-3 text-lg font-medium text-gray-900 dark:text-gray-300">
              HIB/OPT Friendly
            </span>
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-[#E8E8E8] rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2F54EB]"></div>
          </label>
          <label class="inline-flex items-center  cursor-pointer">
            <span class="mr-3 text-lg font-medium text-gray-900 dark:text-gray-300">
              Remote
            </span>
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-[#E8E8E8] rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2F54EB]"></div>
          </label>
          <label class="inline-flex items-center  cursor-pointer">
            <span class="mr-3 text-lg font-medium text-gray-900 dark:text-gray-300">
              Hybrid
            </span>
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-[#E8E8E8] rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2F54EB]"></div>
          </label>

          <div class="relative">
            <select class="peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-blue-gray-700 outline-none">
              <option value="brazil">Full-Time</option>
              <option value="bucharest">Part-Time</option>
              <option value="london">Remote</option>
              <option value="washington">On-Site</option>
            </select>
          </div>

          <div class="relative">
            <select class="peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-blue-gray-700 outline-none">
              <option value="brazil">Software EVS</option>
              <option value="bucharest">Bucharest</option>
              <option value="london">London</option>
              <option value="washington">Washington</option>
            </select>
          </div>
        </div>
        <div className="tags-list">
          {tags.map((tag, index) => (
            <div key={index} className="tag-container">
              <text>{tag?.icon}</text>
              <div>{tag?.title}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-[8px] items-center pb-[8px] border-b border-[#E9E9EA] mb-[1.25%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M13.5 3.9375H12.5625V3C12.5625 2.27625 11.9738 1.6875 11.25 1.6875H6.75C6.02625 1.6875 5.4375 2.27625 5.4375 3V3.9375H4.5C2.6865 3.9375 1.6875 4.9365 1.6875 6.75V6.83926V8.43979V13.5C1.6875 15.3135 2.6865 16.3125 4.5 16.3125H13.5C15.3135 16.3125 16.3125 15.3135 16.3125 13.5V8.43979V6.83926V6.75C16.3125 4.9365 15.3135 3.9375 13.5 3.9375ZM6.5625 3C6.5625 2.8965 6.6465 2.8125 6.75 2.8125H11.25C11.3535 2.8125 11.4375 2.8965 11.4375 3V3.9375H6.5625V3ZM2.8125 6.75C2.8125 5.56725 3.31725 5.0625 4.5 5.0625H13.5C14.6827 5.0625 15.1875 5.56725 15.1875 6.75V6.83926V8.43979C15.1875 8.66554 15.0593 8.86271 14.853 8.95496C14.2043 9.24446 13.0988 9.65702 11.5185 9.97952C11.4413 9.99527 11.358 9.93603 11.313 9.87003C10.7692 9.05778 9.90525 8.57327 9 8.57327C8.09475 8.57327 7.23075 9.05778 6.687 9.87003C6.64275 9.93678 6.5625 9.99677 6.4815 9.97952C4.902 9.65702 3.79575 9.24446 3.147 8.95496C2.94075 8.86271 2.8125 8.66554 2.8125 8.43979V6.83926V6.75ZM13.5 15.1875H4.5C3.31725 15.1875 2.8125 14.6827 2.8125 13.5V10.035C3.525 10.3433 4.66725 10.7565 6.25575 11.0813C6.77325 11.1863 7.31175 10.9575 7.6215 10.4948C7.956 9.99528 8.47125 9.69754 9 9.69754C9.52875 9.69754 10.044 9.99528 10.3778 10.4948C10.6373 10.8825 11.0558 11.1067 11.49 11.1067C11.574 11.1067 11.6587 11.0985 11.7427 11.0813C13.332 10.7565 14.4742 10.3433 15.1867 10.035V13.5C15.1875 14.6827 14.6827 15.1875 13.5 15.1875ZM9.765 11.25C9.765 11.664 9.429 12 9.015 12C8.601 12 8.26125 11.664 8.26125 11.25C8.26125 10.836 8.59275 10.5 9.0075 10.5H9.015C9.429 10.5 9.765 10.836 9.765 11.25Z"
              fill="#636366"
            />
          </svg>
          <p className="all-jobs-title">All Jobs</p>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-4 lg:grid-cols-2 xl:grid-cols-3">
          {tags.map((tag, index) => (
            <JobCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
