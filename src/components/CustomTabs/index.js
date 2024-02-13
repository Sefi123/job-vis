import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import JobCard from "../JobCard";

const CustomTabs = ({ data, activeTab, setActiveTab }) => {
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 gap-2"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-[#164ED4] shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "w-fit text-[#164ED4]" : "w-fit"}
          >
            <div className="flex gap-2 items-center">
              <div>{icon}</div>
              <div>{label}</div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-0">
            {/* {desc} */}
            <div className="flex gap-8 flex-wrap justify-center lg:justify-start">
              {Array(4)
                .fill(0)
                .map((val, index) => (
                  <JobCard key={index} />
                ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default CustomTabs;
