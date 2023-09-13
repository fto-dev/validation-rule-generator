import React from "react";
import { Select } from "antd";
import inputTypes from "../../utils/inputTypes";

/* @TODO : filter already selected option values */

export default function inputTypeList({
	defaultValue = inputTypes[0]?.value || "",
	options = inputTypes,
	...rest
}) {
	return (
		<Select
			defaultValue={defaultValue}
			{...rest}
			options={options}
			className="min-w-100"
		/>
	);
}
