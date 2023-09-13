import React from "react";
import { Input } from "antd";
import SelectedRuleSettings from "../input/selectedRuleSettings";

export default function index({
	unuqiue,
	name,
	type,
	selectedRules = [],
	extraInputChanged,
	...rest
}) {
	return (
		<div>
			<Input
				name={name}
				placeholder="Input Name"
				{...rest}
				value={name}
			/>
			<br></br>
			<SelectedRuleSettings
				name={name}
				unuqiue={unuqiue}
				selectedRules={selectedRules}
				extraInputChanged={extraInputChanged}
			/>
		</div>
	);
}
