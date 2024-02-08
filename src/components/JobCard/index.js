import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./JobCard.css";
import JobDetails from "../JobDetails";

const JobCard = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <JobDetails open={open} handleClose={handleClose} />
      <Card className="mt-6 w-[260px] sm:w-[419px]">
        <CardBody className="flex flex-col gap-3">
          <Typography variant="h5" className="card-title">
            Sr. UI/UX Designer
          </Typography>
          <Typography className="card-tag">@Google</Typography>
          <div className="workType-Container">
            <div className="workType typeWithBorder">H1B Friendly</div>
            <div className="workType typeWithBorder">Remote</div>
            <div className="workType">Full Time</div>
          </div>
          <div className="text-sm text-[#1D1F2C]">Description</div>
          <Typography className="description">
            A problem isn't truly solved until it's solved for all. Googlers
            build products that help create opportunities for everyone, whether
            down the street or across the globe.
          </Typography>
          <div className="flex justify-between">
            <div>
              <span className="jobSalary">$1200.50</span>
              <span>/Month</span>
            </div>
            <div className="jobValid">18 jan 2024</div>
          </div>
        </CardBody>
        <CardFooter className="flex gap-[17px] pt-0">
          <Button
            className="detailsButton capitalize"
            onClick={() => setOpen(!open)}
          >
            Details
          </Button>
          <Button className="jobCardButtons applyButton capitalize">
            Apply
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default JobCard;