import React from "react";
import { Select } from "antd";
import ruleList from "../../utils/ruleList";

export default function inputTypeList({
	defaultValue = [],
	options = ruleList,
	...rest
}) {
	return (
		<Select
			mode="multiple"
			defaultValue={defaultValue}
			{...rest}
			options={options}
			className="min-w-100"
		/>
	);
}
