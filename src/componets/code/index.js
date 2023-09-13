import React, { useCallback } from "react";
import { Button } from "antd";
import ReactJsonView from "react-json-view";
import "./index.css";

export default function Index({ rules }) {
	const CopyCodes = useCallback(() => {
		navigator.clipboard
			.writeText(JSON.stringify(rules))
			.then(() => {
				alert("Rules Copied");
			})
			.catch((err) => {
				console.error(err);
				alert("something went wrong");
			});
	}, [rules]);

	if (Object.keys(rules).length === 0)
		return "Please enter any verification information.";

	return (
		<div className="position-relative">
			<div className="ruleViewStyle">
				<ReactJsonView
					id="code"
					indentWidth={4}
					name={false}
					collapsed={false}
					shouldCollapse={false}
					groupArraysAfterLength={false}
					displayDataTypes={false}
					displayObjectSize={false}
					enableClipboard={false}
					src={rules}
				/>
			</div>

			<Button
				className="copyButtonStyle"
				onClick={CopyCodes}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill=""
				>
					<rect
						fill="none"
						stroke="currentColor"
						x="3.5"
						y="2.5"
						width="12"
						height="16"
					></rect>
					<polyline
						fill="none"
						stroke="currentColor"
						points="5 0.5 17.5 0.5 17.5 17"
					></polyline>
				</svg>
			</Button>
		</div>
	);
}
