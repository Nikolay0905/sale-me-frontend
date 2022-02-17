import React from "react";
import Logo from "../Logo";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
import HeartIcon from "@material-ui/icons/Hearing";
import { APPLICATION_PATH } from "../../../routes";

const styles = makeStyles((theme: Theme) => ({
	toolbar: {
		display: "flex",
		alignItems: "center",
	},
}));

const DesktopHeader = () => {
	const classes = styles();
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar className={classes.toolbar}>
					<Link to={APPLICATION_PATH}>
						<Logo size="lg" />
					</Link>
					<Box>
						<IconButton>
							<ChatIcon fontSize="medium" />
							<Typography variant="h5">Съобщения</Typography>
						</IconButton>
					</Box>
					<Box>
						<Link to="">
							<IconButton>
								<HeartIcon fontSize="medium" />
							</IconButton>
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default DesktopHeader;
