import React from "react";
import { Button } from "antd";

export default function Index({ children, ...rest }) {
	return <Button {...rest}>{children}</Button>;
}
