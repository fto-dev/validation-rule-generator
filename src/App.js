import { useState, useCallback, useMemo } from "react";
import { Layout, Col, Row } from "antd";
import Button from "./componets/button";

import RuleItem from "./componets/ruleItem";
import TypeListInput from "./componets/input/typeListInput";
import MultipleInput from "./componets/input/multipleInput";
import Code from "./componets/code";

import { jqueryRuleParser } from "./utils/jqueryRuleParser";

const { Content } = Layout;

function App() {
	const [list, setList] = useState([]);

	const getList = useMemo(() => JSON.parse(JSON.stringify(list)), [list]);
	const parsedRuleList = useMemo(() => jqueryRuleParser(list), [list]);

	const setCloneList = useCallback((cloneList) => {
		setList(cloneList.slice());
	}, []);

	const getUpdatedCloneList = useCallback((listIndex, itemExtra) => {
		let cloneList = getList;

		let selectedElement = cloneList[listIndex] || { rules: [] };
		selectedElement.rules.map((item, index) => {
			if (item.type === itemExtra.type) {
				item.extra = itemExtra.extra;
			}
			return item;
		});

		return cloneList;
	}, []);

	const handleMultipleChange = useCallback((value, items, index) => {
		const cloneList = getList;
		cloneList[index].rules = items;
		setCloneList(cloneList);
	}, []);

	const handleExtraInputChanged = useCallback(
		(unuqiue, itemExtra, value, itemIndex) => {
			let cloneList = getUpdatedCloneList(itemIndex, itemExtra);
			setCloneList(cloneList);
		},
		[]
	);

	const handleTypeListChange = useCallback((items, itemIndex) => {
		const cloneList = getList;
		cloneList[itemIndex].type = items.value;

		setCloneList(cloneList);
	}, []);

	const handleNameInputChange = useCallback((value, itemIndex) => {
		const cloneList = getList;
		cloneList[itemIndex].name = value;

		setCloneList(cloneList);
	}, []);

	const handleAddRule = useCallback(() => {
		const cloneList = getList;
		cloneList.push({
			unuqiue: `name-${new Date().getMilliseconds()}`,
			name: null,
			type: null,
			rules: [],
		});
		setCloneList(cloneList);
	}, []);

	const handleRemoveRule = useCallback((itemIndex) => {
		const cloneList = getList;
		cloneList.splice(itemIndex, 1);
		setCloneList(cloneList);
	}, []);

	return (
		<div className="App">
			<Layout
				style={{
					minHeight: "100vh",
				}}
			>
				<Content
					style={{
						margin: "24px 16px 0",
					}}
				>
					<Row>
						<Col
							align="left"
							className=""
							span="12"
						>
							<h3 style={{ margin: "0" }}>Jquery Validation Rule Generator</h3>
						</Col>
						<Col
							align="right"
							className=""
							span="12"
						>
							<Button
								onClick={handleAddRule}
								type="primary"
							>
								+
							</Button>
						</Col>
					</Row>

					<br></br>

					{list.map((item, index) => {
						return (
							<div key={index}>
								<Row
									gutter={(16, 10)}
									justify="center"
								>
									<Col>
										<TypeListInput
											onChange={(value, items) => {
												handleTypeListChange(items, index);
											}}
										/>
									</Col>
									<Col flex="auto">
										<RuleItem
											{...item}
											selectedRules={item.rules}
											extraInputChanged={(unuqiue, extra, value) => {
												handleExtraInputChanged(unuqiue, extra, value, index);
											}}
											onChange={(e) => {
												handleNameInputChange(e.target.value, index);
											}}
										/>
									</Col>
									<Col>
										<MultipleInput
											onChange={(value, items) => {
												handleMultipleChange(value, items, index);
											}}
										/>
									</Col>
									<Col>
										<Button
											onClick={(e) => {
												handleRemoveRule(index);
											}}
											disabled={list.length <= 1}
											danger
										>
											-
										</Button>
									</Col>
								</Row>
								<br />
							</div>
						);
					})}
					<Col
						align="left"
						className=""
					>
						<h3>Selected Rule List</h3>
						<Code rules={parsedRuleList} />
					</Col>
				</Content>
			</Layout>
		</div>
	);
}

export default App;
