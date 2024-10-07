import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Nabar";
import "../components/css/contact.css";

import { SocialIcon } from "react-social-icons";
// import "react-social-icons/vimeo";
// import "react-social-icons/meetup";

import TextField from "@mui/material/TextField";
import { IconButton, Typography, Tooltip } from "@mui/material";
import Animation from "../components/background-animation/Animation";
import SnackbarCmp from "../components/Snackbar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastSeverity, setToastSeverity] = React.useState("");

  const [loading, setLoading] = useState(false); //backdrop

  const dis = name.length === 0 || email.length === 0 || message.length === 0;
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      // alert("Invalid Mail");
      setToastMessage("Please enter a valid Email.");
      setToastSeverity("error");
      setShowToast(true);

      setEmail("");
      return;
    }
    setLoading(true);

    var templateParams = {
      from_name: name + " " + email,
      to_name: "ukumar380@gmail.com",
      feedback: message,
    };

    emailjs
      .send(
        "service_84aobz8",
        "template_hvht5mr",
        templateParams,
        "nBxuoxxZuR_Vdrn8Z"
      )

      .then(
        function (response) {
          setLoading(false);
          console.log("SUCCESS!", response.status, response.text);
          setToastMessage("Email sent successfully!");
          setToastSeverity("success");
          setName("");
          setEmail("");
          setMessage("");
          setShowToast(true);
        },
        function (error) {
          console.log("FAILED...", error);
          setLoading(false);
          setToastMessage("Error while sending email, please try later.");
          setToastSeverity("error");
          setShowToast(true);
        }
      );
  };

  const clickSocialIcon = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Animation />
      <Navbar />
      <div className="contact-me-card">
        <div className="contact-heading-animation">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_gaplvsns.json"
            background="transparent"
            speed="1"
            style={{ width: "300px" }}
            loop
            autoplay
          ></lottie-player>
          <div className="icon-buttons">
            <Tooltip title="LinkedIn">
              <IconButton
                onClick={() =>
                  clickSocialIcon(
                    "https://www.linkedin.com/in/utsav-kumar-787a75195/"
                  )
                }
              >
                <SocialIcon
                  network="linkedin"
                  style={{ width: "30px", height: "30px" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Github">
              <IconButton
                onClick={() => clickSocialIcon("https://www.github.com/uv4u")}
              >
                <SocialIcon
                  network="github"
                  style={{ width: "30px", height: "30px" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Leetcode">
              <IconButton
                onClick={() =>
                  clickSocialIcon("https://leetcode.com/u/ukumar380/")
                }
              >
                <SocialIcon
                  network="leetcode"
                  style={{ width: "30px", height: "30px" }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-flex flex-column card-contact-right"
        >
          <div className="contact-body">
            <Typography
              variant="h4"
              component="h5"
              sx={{ fontWeight: 750, fontFamily: "monospace", color: "white" }}
            >
              Contact Me
            </Typography>

            <div className="login-form">
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                sx={{ width: "500px", color: "grey" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />

              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                sx={{ width: "500px" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
                sx={{ width: "500px" }}
                multiline
                rows={4}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
            <button className="bn632-hover bn25" disabled={dis}>
              Send
            </button>
          </div>
        </form>
      </div>
      {showToast && (
        <SnackbarCmp
          state={showToast}
          setState={setShowToast}
          message={toastMessage}
          severity={toastSeverity}
        />
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
