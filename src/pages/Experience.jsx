import Navbar from "../components/Nabar";
import ExpCard from "../components/ExpCard";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Animation from "../components/background-animation/Animation";
import { Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

const Experience = () => {
  return (
    <>
      <Animation />
      <Navbar />
      <div
        style={{
          display: "grid",
          placeContent: "center",
          marginBottom: "100px",
          // border: "1px solid red",
        }}
      >
        <Typography variant="h4">My Experience</Typography>
      </div>
      <div>
        <Timeline
          position="alternate-reverse"
          sx={{ width: "80%", margin: "0 auto" }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <ExpCard
                date={"Oct 2023 - Present"}
                title={"Software Developer, Jio Platforms"}
                description={
                  "Developed and maintained the front-end of JioPhotos using React.js, optimizing features for better performance and user experience. Leveraged React hooks and Redux for efficient API handling and scalable architecture. Gained experience in Azure DevOps for continuous integration and deployment, contributing to streamlined workflows and project management."
                }
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <ExpCard
                date={"May 2022 - July 2022"}
                title={"Web Developer Internship, DIOS Lifesciences Ltd"}
                description={
                  "Completed a summer internship where I learned AngularJS and worked on AI models for generating content like emails and video tags. Created and optimized front-end components while gaining exposure to Git for version control."
                }
                color={"#E24A68"}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <ExpCard
                date={"July 2019 - May 2023"}
                title={"B.Tech, NIT Hamirpur"}
                description={
                  "Completed engineering in Electronics and Communication, with additional learning in DSA, OOPs, and DBMS. Worked on various projects and solved over 400 questions on LeetCode, showcasing strong problem-solving skills."
                }
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default Experience;
