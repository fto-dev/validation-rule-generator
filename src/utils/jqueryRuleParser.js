const prepareRuleValue = (type, extra) =>
	extra === null ? true : extra[0].props.value || false;

export const jqueryRuleParser = (array = []) => {
	return array.reduce((rule, item, index) => {
		if (item.name && item.name !== null) {
			rule[item.name] = {};
			item.rules.map((ruleItem, ruleIndex) => {
				return (rule[item.name][ruleItem.type] = prepareRuleValue(
					ruleItem.type,
					ruleItem.extra
				));
			});
		}

		return rule;
	}, {});
};
