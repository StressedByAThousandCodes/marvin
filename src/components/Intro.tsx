"use client";

import Image from "next/image";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { Box, Stack, Typography } from "@mui/material";
import Navigation from "./Navigation";

const Intro = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      width="100%"
      height="100dvh"
      alignItems="center"
      justifyContent="center"
    >
      <Box sx={{ position: "relative", width: 280, height: 280 }}>
        <Image alt="logo" src="./marvin.svg" fill />
      </Box>
      <Typography variant="h4">Marvin Villalon</Typography>
      <Button
        title="Get to know me"
        icon={<Icon icon="line-md:arrow-right" />}
        redirect="/profile"
      />
      <Navigation />
    </Stack>
  );
};

export default Intro;
