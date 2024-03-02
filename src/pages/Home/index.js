import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard/index";
import { Typography } from "@material-tailwind/react";
import BannerHome from "../../components/BannerHome";
import SponsoredBlock from "../../components/SponsoredBlock";
import UserImpression from "../../components/UserImpression";
import { fetchFeaturedJobs } from "../../services/jobs";

const Home = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetchFeaturedJob();
  }, []);

  const fetchFeaturedJob = async () => {
    const response = await fetchFeaturedJobs();
    if (response?.status === 200) {
      setFeaturedJobs([...response.data.results]);
    }
  };

  return (
    <div>
      <BannerHome />
      <div className="jobCard-block  py-[40px] md:py-[80px] bg-[#F9F9F8]">
        <div className="container mx-auto px-3">
          <Typography
            variant="h2"
            className="text-center text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-tight md:pb-16 lg:leading-tight text-[#1D1F2C]"
          >
            <span className="text-[#164ED4]">Featured</span> Jobs
          </Typography>
          <div className="row grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredJobs?.length > 0 &&
              featuredJobs?.map(
                (job, index) => index <= 2 && <JobCard job={job} key={index} />
              )}
          </div>
        </div>
      </div>
      <div className="sponsored-block py-[40px] md:py-[80px] bg-[#fff]">
        <div className="container mx-auto px-3">
          <SponsoredBlock />
          <UserImpression />
        </div>
      </div>
    </div>
  );
};

export default Home;
