import "./css/experience.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

export default function ExpCard({ date, title, description, color }) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",

        height: "250px",
        background: "transparent",
        border: "none",
        position: "relative", // Add this line
        "&::after": {
          content: '""', // Required for pseudo-elements
          position: "absolute",
          width: "90%",
          height: "3px",
          background: "rgba(0, 0, 0, 0.5)",
          left: "50%",
          borderRadius: "50%",
          filter: "blur(4px)",
          transform: "translate(-50%, 50%)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <div
          className="exp-heading"
          style={{
            width: "100%",
            height: "50px",
            // backgroundColor: "#FBCA3E",
            backgroundColor: color || "#FBCA3E",
            borderRadius: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {date}
          </Typography>
        </div>
        <div className="exp-body">
          <Typography sx={{ fontWeight: 600, paddingBottom: "8px" }}>
            {title}
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>{description}</Typography>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
