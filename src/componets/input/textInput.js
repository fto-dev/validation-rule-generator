import React from "react";
import { Select, Space } from "antd";
import inputTypes from "../../utils/inputTypes";

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
		/>
	);
}
