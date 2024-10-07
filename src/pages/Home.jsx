import React from "react";
import Navbar from "../components/Nabar";
import Typewritter from "../components/Typewritter";
import Animation from "../components/background-animation/Animation";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="typewriting">
        <Typewritter fz={"36px"} words={["Hi, I am Utsav."]} />
        <Typography
          variant="h6"
          sx={{ fontFamily: "monospace", fontWeight: 700 }}
        >
          I build seamless digital experiences with passion and precision.
        </Typography>
      </div>
      <Animation />
    </>
  );
};

export default Home;
