"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Stack, IconButton } from "@mui/material";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";

type Props = {
  images: string[];
};

const ImageCarousel = ({ images }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "keepSnaps",
    },
    [Autoplay()]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Box
      position="relative"
      sx={{ width: "100%", maxWidth: "425px", mx: "auto" }}
    >
      <Box
        ref={emblaRef}
        sx={{ overflow: "hidden", width: "100%", borderRadius: 4 }}
        className="embla"
      >
        <Stack
          direction="row"
          className="embla__container"
          sx={{ display: "flex", flexWrap: "nowrap" }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                flex: "0 0 100%",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "100%",
                }}
              >
                <Image
                  alt={`Slide ${index}`}
                  src={image}
                  fill
                  objectFit="cover"
                />
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      <IconButton
        onClick={scrollPrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
          padding: 0,
        }}
      >
        <Icon icon="material-symbols-light:arrow-circle-left" width={30} />
      </IconButton>
      <IconButton
        onClick={scrollNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
          padding: 0,
        }}
      >
        <Icon icon="material-symbols-light:arrow-circle-right" width={30} />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
