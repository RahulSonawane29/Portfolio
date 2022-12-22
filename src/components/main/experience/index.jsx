import React from "react";

import Zoom from "react-reveal/Zoom";
import Tilt from "react-tilt";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import StepIcon from "@mui/material/StepIcon";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function Experience() {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        background: "#101010",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: "15%",
        py: 4,
      }}
    >
      <Zoom>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#84fff1",
            }}
          >
            Experience
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Fredoka One', sans-serif",
              fontSize: "53px",
              color: "#fff",
            }}
          ></Typography>
        </Stack>
      </Zoom>
      <Zoom>
        <Box sx={{ maxWidth: 500 }}>
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step index={-1} active={true} key={step.label}>
                <StepLabel
                  sx={{ fontFamily: "'Open Sans', sans-serif" }}
                  icon={<WorkOutlineIcon />}
                >
                  {step.label}
                  <Typography
                    sx={{
                      color: "#9D9D9D",
                      fontSize: "12px",
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {step.duration}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#9D9D9D",
                      fontSize: "12px",
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {step.company} - ({step.location})
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography
                    sx={{
                      color: "#9D9D9D",
                      fontSize: "14px",
                      fontFamily: "'Open Sans', sans-serif",
                    }}
                  >
                    {step.description}
                    <br />
                    {step.description2}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Zoom>
    </Container>
  );
}

const steps = [
  // {
  //   label: "Front-end Web Developer",
  //   company: "Primal Infosys",
  //   duration: "08/2021 – 12/2022",
  //   location: "Pune-Maharashtra, India",
  //   description:
  //     "• Was responsible for making website and admin panel from scratch using react.",
  //   description2:
  //     "• Was responsible for making the entire flow of work and frontend(using react.js for the organization.",
  // },
  {
    label: "Web Developer Intern",
    company: "Primal Infosys",
    duration: "04/2022 – 11/2022",
    location: "Pune-Maharashtra, India",
    description:
      "• Was responsible for making a full-stack web application using ReactJS, HTML, CSS, JavaScript, and Node.js.",
    description2:
      "• The frontend was developed in React js, including redux, material UI, etc.",
  },
];
