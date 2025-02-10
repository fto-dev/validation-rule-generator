import React from "react";
import { Select } from "antd";
import inputTypes from "../../utils/inputTypes";

/* @TODO : filter already selected option values */

export default function inputTypeList({
	defaultValue = inputTypes[0]?.value || "",
	...rest
}) {

	const exeptionList = ['button','reset', 'submit'];
	const options = inputTypes.filter((item)=> {
		return exeptionList.indexOf(item.value) == -1;
	})

	return (
		<Select
			defaultValue={defaultValue}
			{...rest}
			options={options}
			className="min-w-100"
		/>
	);
}
