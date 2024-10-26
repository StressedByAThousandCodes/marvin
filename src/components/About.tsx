import { Stack, Typography } from "@mui/material";
import { ProfileImages } from "king/constants/images";
import ImageCarousel from "./ImageCarousel";
import Traits from "./Traits";
import { INTRODUCTION, TRAITS } from "king/constants/text";
import Button from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Navigation from "./Navigation";

const About = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      padding={2}
    >
      <ImageCarousel images={ProfileImages} />
      <Traits traits={TRAITS} />
      <Typography variant="caption" sx={{ maxWidth: 600, textAlign: "center" }}>
        {INTRODUCTION}
      </Typography>
      <Button title="See skills" icon={<Icon icon="line-md:arrow-right" />} />
      <Navigation />
    </Stack>
  );
};

export default About;
