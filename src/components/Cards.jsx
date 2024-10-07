import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Icons = ({ data }) => {
  console.log(data);
  return data === "dev" ? (
    <lottie-player
      src="https://lottie.host/a8cb2341-8cbd-41ee-adad-4511338d30a5/hzlEwcV03z.json"
      background="##FFFFFF"
      speed="1"
      style={{ width: "200px", height: "200px" }}
      loop
      autoplay
      direction="1"
      mode="normal"
    ></lottie-player>
  ) : data === "gym" ? (
    <lottie-player
      src="https://lottie.host/e2fd1dd6-75e5-4d60-8399-38daba1927bd/r3mVl2lkGE.json"
      background="##FFFFFF"
      speed="1"
      style={{ width: "200px", height: "200px" }}
      loop
      autoplay
      direction="1"
      mode="normal"
    ></lottie-player>
  ) : (
    <lottie-player
      src="https://lottie.host/9a3379ae-da25-4711-8ac4-0fba817de296/wJYpgRRfTQ.json"
      background="##FFFFFF"
      speed="1"
      style={{ width: "200px", height: "200px" }}
      loop
      autoplay
      direction="1"
      mode="normal"
    ></lottie-player>
  );
};

const OutlinedCard = ({ data, title }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "340px",
        height: "300px",
        borderRadius: "8px",
        background: "#2C3333",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icons data={data} />
        <span style={{ color: "#E8B86D", fontWeight: 800 }}>{title}</span>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default OutlinedCard;
