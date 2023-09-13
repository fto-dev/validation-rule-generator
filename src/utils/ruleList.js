const ruleList = [
	{
		label: "required",
		type: "required",
		value: "required",
		extra: null,
	},
	{
		label: "email",
		type: "email",
		value: "email",
		extra: null,
	},
	{
		label: "number",
		type: "number",
		value: "number",
		extra: null,
	},
	{
		label: "digits",
		type: "digits",
		value: "digits",
		extra: null,
	},
	{
		label: "minlength",
		type: "minlength",
		value: "minlength",
		extra: [
			{
				label: "input",
				type: "text",
				props: {
					placeholder: "Min Length",
				},
			},
		],
	},
	{
		label: "maxlength",
		type: "maxlength",
		value: "maxlength",
		extra: [
			{
				label: "input",
				type: "text",
				props: {
					placeholder: "Max Length",
				},
			},
		],
	},
	{
		label: "equalTo",
		type: "equalTo",
		value: "equalTo",
		extra: [
			{
				label: "input",
				type: "text",
				props: {
					placeholder: "Equal To",
				},
			},
		],
	},
];

export default ruleList;
