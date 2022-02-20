import React, { MouseEvent, useState } from "react";
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
import HeartIcon from "@material-ui/icons/Favorite";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from "@material-ui/icons/PersonOutlineOutlined";
import DownArrow from "@material-ui/icons/KeyboardArrowDown";
import {
	APPLICATION_PATH,
	FAVOURITE_PATH,
	MESSAGES_PATH,
} from "../../../routes";

interface MenuItemProps {
	/*TBD: add it to state and loop for easier*/
}

const styles = makeStyles((theme: Theme) => ({
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	appBar: {
		padding: theme.spacing() / 2,
	},
	whiteColor: {
		color: theme.palette.primary.contrastText,
	},
}));

const DesktopHeader = () => {
	const classes = styles();
	const [anchorEl, setAnchorEl] = React.useState<any>(null);
	const isOpenMenu = Boolean(anchorEl);
	const handleOpenMenu = (event: any) => setAnchorEl(event.currentTarget);
	const handleCloseMenu = () => setAnchorEl(null);
	return (
		<AppBar position="static" className={classes.appBar}>
			<Container maxWidth="lg">
				<Toolbar className={classes.toolbar}>
					<Link to={APPLICATION_PATH}>
						<Logo size="md" />
					</Link>
					<Box className={classes.toolbar}>
						<Box>
							<Link to={MESSAGES_PATH}>
								<IconButton className={classes.whiteColor}>
									<ChatIcon fontSize="medium" className={classes.appBar} />
									<Typography variant="h5">Съобщения</Typography>
								</IconButton>
							</Link>
						</Box>
						<Box>
							<Link to={FAVOURITE_PATH}>
								<IconButton className={classes.whiteColor}>
									<HeartIcon fontSize="medium" />
								</IconButton>
							</Link>
						</Box>
						<Box>
							<Button
								className={classes.whiteColor}
								onClick={(e: any) => handleOpenMenu(e)}
							>
								<PersonIcon fontSize="medium" className={classes.appBar} />
								<Typography variant="h5">Моят Профил</Typography>
								<DownArrow fontSize="medium" className={classes.appBar} />
							</Button>
							<Menu
								open={isOpenMenu}
								anchorEl={anchorEl}
								onClose={handleCloseMenu}
							>
								<MenuItem></MenuItem>
							</Menu>
						</Box>
						<Button variant="contained">
							<Typography variant="button">Добави обява</Typography>
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default DesktopHeader;
