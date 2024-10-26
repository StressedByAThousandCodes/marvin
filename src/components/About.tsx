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
      spacing={1}
      alignItems="center"
      justifyContent="center"
      padding={2}
      paddingBottom={10}
    >
      <ImageCarousel images={ProfileImages} />
      <Typography variant="h6" fontFamily="cursive">
        I am a...{" "}
      </Typography>
      <Traits traits={TRAITS} />
      <Typography variant="caption" sx={{ maxWidth: 600, textAlign: "center" }}>
        {INTRODUCTION}
      </Typography>
      <Button
        title="See skills"
        icon={<Icon icon="line-md:arrow-right" />}
        redirect="/skills"
      />
      <Navigation />
    </Stack>
  );
};

export default About;
