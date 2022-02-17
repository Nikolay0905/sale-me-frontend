import { useTheme } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";

export type WithMediaDownProps = {
	isMediaDown: boolean;
};

// Mark the function as a generic using P (or whatever variable you want)
export function WithMediaDown<P>(
	// Then we need to type the incoming component.
	// This creates a union type of whatever the component
	// already accepts AND our extraInfo prop
	WrappedComponent: React.ComponentType<P & WithMediaDownProps>,
	breakpoint: Breakpoint
) {
	const ComponentWithMediaDown = (props: P) => {
		const theme = useTheme();
		let isMediaDown = useMediaQuery(() => theme.breakpoints.down(breakpoint), {
			noSsr: true,
		});
		// At this point, the props being passed in are the original props the component expects.
		return <WrappedComponent {...props} isMediaDown={isMediaDown} />;
	};
	return ComponentWithMediaDown;
}
