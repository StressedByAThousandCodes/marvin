import { Fab, Link, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
  sx?: SxProps;
  redirect?: string;
  onClick?: VoidFunction;
};

const Button = ({ title, icon, sx, redirect, onClick }: Props) => {
  return (
    <Link href={redirect && redirect}>
      <Fab
        size="small"
        onClick={onClick && onClick}
        variant="extended"
        sx={{
          ...sx,
          border: 1,
          padding: 1,
          zIndex: -1,
        }}
      >
        <Typography variant="button">{title}</Typography>
        {icon && icon}
      </Fab>
    </Link>
  );
};

export default Button;
