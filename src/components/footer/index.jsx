import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          background: "#111a23",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "190px",
            "@media (max-width: 820px)": { width: "35px" },
          }}
        >
          <EmojiEmotionsIcon fontSize="large" sx={{ color: "#84fff1" }} />
        </Box>
        <Typography
          sx={{
            "@media (max-width: 550px)": {
              fontSize: "12px",
              fontFamily: "'Open Sans', sans-serif",
            },
          }}
        >
          Copyright &copy; 2022 Rahul Infotech.
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "190px",
            "@media (max-width: 700px)": { width: "140px" },
          }}
        >
          <a href="mailto: rahulsonawane2920@gmail.com" target={"_blank"}>
            <IconButton
              sx={{
                color: "red",
                backgroundColor: "#fff",

                mr: 1,
                "&:hover": {
                  backgroundColor: "red",
                  color: "#fff",
                },
              }}
            >
              <MailIcon
                sx={{
                  "@media (max-width: 700px)": {
                    height: "10px",
                    width: "10px",
                  },
                }}
              />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-sonawane-5a36bb245/"
            target={"_blank"}
          >
            <IconButton
              sx={{
                color: "#0850b4",
                backgroundColor: "#fff",
                mr: 1,
                "&:hover": {
                  backgroundColor: "#0850b4",
                  color: "#fff",
                },
              }}
            >
              <LinkedInIcon
                sx={{
                  "@media (max-width: 700px)": {
                    height: "10px",
                    width: "10px",
                  },
                }}
              />
            </IconButton>
          </a>
          <a href="https://github.com/RahulSonawane29" target={"_blank"}>
            <IconButton
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                mr: 1,
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
                },
              }}
            >
              <GitHubIcon
                sx={{
                  "@media (max-width: 700px)": {
                    height: "10px",
                    width: "10px",
                  },
                }}
              />
            </IconButton>
          </a>
          <a href="https://twitter.com" target={"_blank"}>
            <IconButton
              sx={{
                color: "#0e97c9",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#0e97c9",
                  color: "#fff",
                },
              }}
            >
              <TwitterIcon
                sx={{
                  "@media (max-width: 700px)": {
                    height: "10px",
                    width: "10px",
                  },
                }}
              />
            </IconButton>
          </a>
        </Box>
      </Container>
    </>
  );
}
