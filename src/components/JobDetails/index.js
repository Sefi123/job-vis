import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import Bookmark from "../../assets/icons/bookmark.png";
import parse from "html-react-parser";
import "./jobDetails.css";

const JobDetails = ({ open, handleClose, data }) => {
  return (
    <Dialog open={open} handler={handleClose} size="lg">
      <DialogHeader className="justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          onClick={handleClose}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </DialogHeader>
      <DialogBody>
        <div className="h-[42rem] overflow-scroll px-10 job-detail-container pb-10">
          {/* Header of Job Detail component */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Typography variant="h5" className="jobDetail-title">
                {data?.job_name}
              </Typography>
              <div className="jobDetail-workType-container">
                {data?.job_sponsorship && (
                  <div className="workType typeWithBorder">H1B Friendly</div>
                )}
                {data?.job_remote && (
                  <div className="workType typeWithBorder capitalize">
                    <div>Remote</div>
                  </div>
                )}
                {data?.job_hybrid && (
                  <div className="workType typeWithBorder capitalize">
                    <div>Hybrid</div>
                  </div>
                )}
                <div className="workType">{data?.job_commitment}</div>
              </div>
            </div>
            {data?.job_salary != null && (
              <div>
                <Typography className="jobDetail-salary-title">
                  Basic Salary
                </Typography>
                <div className="flex items-center">
                  <span className="jobDetailSalary">
                    {data?.job_salary
                      ?.split("-")
                      ?.map((salary) => `$${salary}`)
                      ?.join(" - ")}
                    {data?.min_salary}
                  </span>
                  {/* <span className="jobDetail-salary">$1200.50</span>
                <span className="jobDetail-salary-duration">/Month</span> */}
                </div>
              </div>
            )}
            <div className="flex items-center gap-4">
              <img
                src={Bookmark}
                alt="bookmark"
                width={32}
                className="cursor-pointer"
              />
              <Button className="jobCardButtons applyButton capitalize">
                Apply
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <div className="jobDetail-heading mb-3">Job Description</div>
              <div className="jobDetail-description">
                {parse(data?.job_description ?? "")}
              </div>
            </div>

            <div>
              <div className="jobDetail-heading mb-3">Responsibility</div>
              <div className="responsibility-detail">
                User Research: Conduct thorough user research to understand user
                behaviors, needs, and motivations. Information Architecture:
                Develop and maintain information architecture that ensures
                intuitive and efficient navigation. Wireframing and Prototyping:
                Create wireframes and interactive prototypes to visualize and
                test design concepts. Visual Design: Develop visually appealing
                and cohesive designs that align with brand guidelines and
                enhance the overall user experience. Collaboration: Work closely
                with product managers, developers, and other stakeholders to
                ensure design concepts are feasible and align with project
                goals. Usability Testing: Conduct usability testing to gather
                feedback and iterate on designs for continuous improvement. Stay
                Updated: Stay current with industry trends, design tools, and
                emerging technologies to bring innovative ideas to the team.
                Documentation: Prepare and maintain design documentation,
                including design specifications, style guides, and pattern
                libraries.
              </div>
            </div>

            <div>
              <div className="jobDetail-heading mb-3">Qualifications</div>
              <div className="qualification-detail">
                Experience: Minimum of 5 years of experience as a UI/UX
                designer, with a strong portfolio showcasing successful
                projects. Education: Bachelor’s degree in Design, Human-Computer
                Interaction, or a related field. Technical Skills: Proficiency
                in design tools such as Adobe Creative Suite, Sketch, Figma, or
                similar. Experience with prototyping tools like InVision, Axure,
                or similar. Solid understanding of responsive design principles.
                Collaboration Skills: Ability to work effectively in a
                collaborative team environment, communicate ideas clearly, and
                accept constructive feedback. Problem-solving: Strong
                problem-solving skills with a focus on user-centered design.
                Creativity: Demonstrate creativity and a passion for creating
                compelling and innovative designs. Adaptability: Ability to
                adapt to fast-paced environments and changing priorities.
                Portfolio: A strong portfolio that showcases a range of design
                projects, including mobile and web applications, with an
                emphasis on the design process and outcomes.
              </div>
            </div>
          </div>
        </div>
      </DialogBody>
      {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
    </Dialog>
  );
};

export default JobDetails;
