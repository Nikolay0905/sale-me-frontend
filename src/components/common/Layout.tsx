import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";
import classNames from "classnames";
import React from "react";
import { WithMediaDown, WithMediaDownProps } from "./hoc/withMedia";

const styles = makeStyles((theme: Theme) => ({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    padding: `${theme.spacing() * 2}px 0`,
  },
  desktopContainer: {
    overflowY: "auto",
    overflowX: "hidden",
  },
}));

const Layout: React.FC<React.PropsWithChildren<WithMediaDownProps>> = ({
  children,
  isMediaDown,
}) => {
  const classes = styles();
  return (
    <Container
      maxWidth={false}
      className={classNames(classes.container, {
        [classes.desktopContainer]: !isMediaDown,
      })}
    >
      {children as React.ReactChild}
    </Container>
  );
};

export default WithMediaDown(Layout, "md");
