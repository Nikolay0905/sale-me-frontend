import { createTheme } from "@material-ui/core/styles";
import "typeface-roboto";

const theme = createTheme({
	overrides: {
		MuiButton: {
			contained: {
				color: "white",
				fontFamily: "Noto-Sans-Bold",
				background: "#008394",
			},
			outlinedPrimary: {
				borderColor: "#0000001F",
				fontFamily: "Noto-Sans-Bold",
			},
		},
	},
	palette: {
		primary: {
			main: "#002f34",
			light: "#008394",
			dark: "#002024",
			contrastText: "#fff",
		},
	},
	typography: {
		fontFamily: "monospace",
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
