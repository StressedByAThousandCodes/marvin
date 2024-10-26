import { Chip, Stack, Typography } from "@mui/material";
import Navigation from "./Navigation";
import {
  HOBBIES,
  MOST_USED_SKILLS,
  OTHER_KNOWN_SKILLS,
} from "king/constants/text";
import { Icon } from "@iconify/react/dist/iconify.js";

const SkillSet = () => {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        p: 2,
        maxWidth: 600,
        justifySelf: "center",
        pb: 10,
      }}
    >
      <Typography variant="h3">Hobbies & Sports</Typography>
      <Stack direction="row" flexWrap="wrap">
        {HOBBIES.map((skill, index) => {
          return (
            <Chip
              key={index}
              variant="filled"
              size="medium"
              label={skill.title}
              icon={<Icon icon={skill.icon} color="black" />}
              sx={{ backgroundColor: "gray", m: 0.5, flexGrow: 1 }}
            />
          );
        })}
      </Stack>
      <Typography variant="h3">Software Development Skills</Typography>
      <Stack direction="row" flexWrap="wrap">
        {MOST_USED_SKILLS.map((skill, index) => {
          return (
            <Chip
              key={index}
              variant="filled"
              size="medium"
              label={skill.title}
              icon={<Icon icon={skill.icon} color="black" />}
              sx={{ backgroundColor: "gray", m: 0.5, flexGrow: 1 }}
            />
          );
        })}
      </Stack>
      <Typography variant="h3">Others</Typography>
      <Stack direction="row" flexWrap="wrap">
        {OTHER_KNOWN_SKILLS.map((skill, index) => {
          return (
            <Chip
              key={index}
              variant="filled"
              size="medium"
              label={skill.title}
              icon={<Icon icon={skill.icon} color="black" />}
              sx={{ backgroundColor: "gray", m: 0.5, flexGrow: 1 }}
            />
          );
        })}
      </Stack>
      <Navigation />
    </Stack>
  );
};

export default SkillSet;
