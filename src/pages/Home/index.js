import React from "react";
import JobCard from "../../components/JobCard/index";
import { Typography } from "@material-tailwind/react";
import BannerHome from "../../components/BannerHome";
import SponsoredBlock from "../../components/SponsoredBlock";
import UserImpression from "../../components/UserImpression";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <div className="jobCard-block  py-[40px] md:py-[80px] bg-[#F9F9F8]">
        <div className="container mx-auto px-3">
          <div className="row grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <JobCard />
            <JobCard />
            <JobCard />
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
