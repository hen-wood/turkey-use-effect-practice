import { useEffect, useState } from "react";

function Message({ size, featherCount, cypher }) {
	const [message, setMessage] = useState("Your bird is naked");
	useEffect(() => {
		setMessage(
			featherCount < 1
				? "Your bird is naked"
				: featherCount > 9
				? "What a magnificent bird"
				: "Still needs more feathers"
		);
	}, [featherCount]);

	const [convertedSize, setConvertedSize] = useState(cypher[size]);
	useEffect(() => {
		setConvertedSize(cypher[size]);
	}, [size, cypher]);

	return <div className={`message ${convertedSize}`}>{message}</div>;
}

export default Message;
