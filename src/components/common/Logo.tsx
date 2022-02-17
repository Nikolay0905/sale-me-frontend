import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const styles = makeStyles({
  sm: {
    width: 44,
    height: 40,
  },
  md: {
    width: 66,
    height: 60,
  },
  lg: {
    width: 88,
    height: 80,
  },
  xl: {
    width: 177,
    height: 160,
  },
});

interface OwnProps {
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo: React.FC<OwnProps> = function ({ size = "sm" }) {
  const classes = styles();
  return (
    <img src={`/logo.png`} className={classes[size]} alt="Logo" />
  );
};

export default Logo;
