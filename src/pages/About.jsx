import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Nabar";
import Typewritter from "../components/Typewritter";
import Animation from "../components/background-animation/Animation";
import OutlinedCard from "../components/Cards";
import { Typography } from "@mui/material";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <Navbar />
      <Animation />
      <div className="about-me-container">
        <div className="about-me">
          <Typography
            sx={{ fontSize: "24px", fontFamily: "monospace", fontWeight: 700 }}
          >
            A software engineer driven by a passion for crafting seamless and
            engaging web experiences.
          </Typography>
          {showTypewriter && (
            <Typewritter
              fz={"24px"}
              loop={1}
              words={[
                "With a solid foundation in Electronics and Communication, I blend technical expertise with a creative mindset to tackle challenges head-on. I thrive on innovation and enjoy exploring new technologies to push the boundaries of what’s possible. Outside of coding, I’m an avid learner and tech enthusiast who loves diving into the latest trends and sharing insights with others.",
              ]}
            />
          )}
        </div>
      </div>
      <div
        className={`interests-cards ${isVisible ? "fade-in" : "fade-out"}`}
        ref={cardsRef}
      >
        <OutlinedCard data={"dev"} title={"FULL STACK DEVELOPER"} />
        <OutlinedCard data={"gym"} title={"ATHELETICS"} />
        <OutlinedCard title={"READER"} />
      </div>
      <Animation />
    </div>
  );
};

export default About;
