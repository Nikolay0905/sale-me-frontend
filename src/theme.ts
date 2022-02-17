import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#002f34",
		},
	},
	typography: {
		h1: {
			fontSize: 48,
		},
		h2: {
			fontSize: 32,
		},
		h3: {
			fontSize: 32,
		},
		h4: {
			fontSize: 24,
		},
		h5: {
			fontSize: 20,
		},
		body1: {
			fontSize: 14,
		},
		subtitle1: {
			fontSize: 14,
		},
		subtitle2: {
			fontSize: 8,
		},
		caption: {
			fontSize: 10,
			letterSpacing: 1.5,
			textTransform: "uppercase",
		},
		overline: {
			textTransform: "none",
		},
		button: {
			fontSize: 16,
			fontWeight: "normal",
			textTransform: "none",
		},
	},
});

export default theme;
