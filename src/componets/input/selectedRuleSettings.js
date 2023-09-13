import React, { useCallback } from "react";
import { Input } from "antd";

// TODO: onChange olayına bakılacak
const PrepareInput = ({ unuqiue, item, extraInputChanged, ...otherRest }) => {
	const handleInputChange = useCallback((e, item, eIndex) => {
		let _item = item;
		const value = e?.target?.value || null;
		_item.extra[eIndex].props.value = value;
		extraInputChanged(unuqiue, item, value);
	}, []);

	if (item && item.extra)
		return item.extra.map((extra, index) => {
			return (
				<div
					className="mt-20"
					key={index}
				>
					<Input
						{...extra.props}
						key={index}
						type="text"
						onChange={(value) => handleInputChange(value, item, index)}
					/>
					<br></br>
				</div>
			);
		});

	return null;
};

export default function SelectedRuleSettings({
	unuqiue,
	selectedRules = [],
	extraInputChanged = (values) => {},
	...rest
}) {
	return (
		<div>
			{selectedRules.map((item, index) => (
				<PrepareInput
					key={index}
					unuqiue={unuqiue}
					item={item}
					extraInputChanged={extraInputChanged}
				/>
			))}
		</div>
	);
}
