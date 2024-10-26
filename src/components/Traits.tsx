"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Chip, Stack } from "@mui/material";
import { useResponsive } from "king/hooks/responsive";

type Props = {
  traits: {
    title: string;
    icon: string;
  }[];
};

const Traits = ({ traits }: Props) => {
  const fromTablet = useResponsive("up", "sm");
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      maxWidth={600}
      justifyContent="center"
    >
      {traits.map((trait, index) => (
        <Chip
          key={index}
          variant="filled"
          size="small"
          label={trait.title}
          icon={<Icon icon={trait.icon} color="white" width={15} height={15} />}
          sx={{
            paddingX: 1,
            backgroundColor: "grey",
            color: "white",
            flexGrow: fromTablet ? 0 : 1,
            m: 0.5,
          }}
        />
      ))}
    </Stack>
  );
};

export default Traits;
