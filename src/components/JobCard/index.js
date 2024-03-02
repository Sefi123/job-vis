import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import JobDetails from "../JobDetails";
import moment from "moment";
import parse from "html-react-parser";
import "./JobCard.css";

const JobCard = ({ appliedJobs, job }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleClose = () => {
    setOpen(!open);
  };

  const handleModalOpen = (data) => {
    setModalData({ ...data });
    setOpen(!open);
  };

  return (
    <>
      <JobDetails open={open} handleClose={handleClose} data={modalData} />
      <Card className="mt-6 border border-[#E8EDFB] w-full">
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h5" className="card-title sm:!text-[2rem]">
            {job?.job_name}
          </Typography>
          <Typography className="card-tag">@{job?.company_name}</Typography>
          <Typography className="flex items-center gap-4 text-black">
            <div>Experience Level: </div>
            <div className="font-semibold">{job?.job_yoe}</div>
          </Typography>
          <div className="workType-Container">
            {job?.job_sponsorship && (
              <div className="workType typeWithBorder">H1B Friendly</div>
            )}
            {job?.job_remote && (
              <div className="workType typeWithBorder capitalize">
                <div>Remote</div>
              </div>
            )}
            {job?.job_hybrid && (
              <div className="workType typeWithBorder capitalize">
                <div>Hybrid</div>
              </div>
            )}
            <div className="workType">{job?.job_commitment}</div>
          </div>
          <div className="text-sm text-[#1D1F2C]">Description</div>
          <Typography className="description h-[110px] overflow-hidden">
            {parse(job?.job_description)}
          </Typography>
          <div className="flex justify-between">
            <div>
              <span>Salary: </span>
              <span className="jobSalary">
                {job?.job_salary
                  ?.split("-")
                  ?.map((salary) => `$${salary}`)
                  ?.join(" - ")}
                {job?.min_salary}
              </span>
              {/* <span>/Month</span> */}
            </div>
            {/* <div>
              <span className="jobSalary">$1200.50</span>
              <span>/Month</span>
            </div> */}
            <div className="jobValid">
              {moment(job?.date_posted).format("DD MMM YYYY")}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex gap-[17px] pt-0">
          {appliedJobs ? (
            <Button
              className="w-full capitalize !text-[#EB3D4D] !font-normal bg-[#F6F8FA] text-[14px]"
              // onClick={() => setOpen(!open)}
            >
              Cancel
            </Button>
          ) : (
            <>
              <Button
                className="detailsButton capitalize"
                onClick={() => handleModalOpen(job)}
              >
                Details
              </Button>
              <Button className="jobCardButtons applyCardButton capitalize">
                Apply
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default JobCard;
