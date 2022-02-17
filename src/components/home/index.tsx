import React from "react";
import { WithMediaDown, WithMediaDownProps } from "../common/hoc/withMedia";
import { Routes, Route } from "react-router";
import Container from "@material-ui/core/Container";
import MobileHeader from "../common/header/MobileHeader";
import DesktopHeader from "../common/header/DesktopHeader";
import Layout from "../common/Layout";

const HomePage = ({ isMediaDown }: WithMediaDownProps) => {
	let maxWidth: "sm" | "lg" | "md" = "lg";
	return (
		<>
			{!isMediaDown && <DesktopHeader />}
			<Container maxWidth={maxWidth} style={{ height: "100%" }}>
				<Layout>
					<h1>Hello</h1>
				</Layout>
			</Container>
			{isMediaDown && <MobileHeader />}
		</>
	);
};

export default WithMediaDown(HomePage, "md");
