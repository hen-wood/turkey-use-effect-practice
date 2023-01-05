import { useState, useEffect } from "react";
import Message from "./components/Message";
import PictureDisplay from "./components/PictureDisplay";

function App() {
	const [userPrefs, setUserPrefs] = useState(
		!!localStorage.getItem("userPrefs")
			? JSON.parse(localStorage.getItem("userPrefs"))
			: null
	);

	const [size, setSize] = useState(userPrefs ? userPrefs.size : "s");
	const [featherCount, setFeatherCount] = useState(
		userPrefs ? userPrefs.featherCount : 0
	);
	const [featherColors, setFeatherColors] = useState(
		userPrefs ? userPrefs.featherColors : []
	);
	const [isRed, setIsRed] = useState(userPrefs ? userPrefs.isRed : false);
	const [isOrange, setIsOrange] = useState(
		userPrefs ? userPrefs.isOrange : false
	);
	const [isBrown, setIsBrown] = useState(userPrefs ? userPrefs.isBrown : false);
	const [isLightBrown, setIsLightBrown] = useState(
		userPrefs ? userPrefs.isLightBrown : false
	);
	const [isYellow, setIsYellow] = useState(
		userPrefs ? userPrefs.isYellow : false
	);

	useEffect(() => {
		setUserPrefs({
			size,
			featherCount,
			featherColors,
			isRed,
			isOrange,
			isBrown,
			isLightBrown,
			isYellow
		});
	}, [
		size,
		featherCount,
		featherColors,
		isRed,
		isOrange,
		isBrown,
		isLightBrown,
		isYellow
	]);

	useEffect(() => {
		localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
	}, [userPrefs]);

	useEffect(() => {
		const colors = [
			isRed && "red",
			isOrange && "orange",
			isBrown && "brown",
			isLightBrown && "light-brown",
			isYellow && "yellow"
		].filter(color => color);

		setFeatherColors(colors);
	}, [isRed, isOrange, isBrown, isLightBrown, isYellow]);

	const cypher = {
		s: "small",
		m: "medium",
		l: "large",
		xl: "xlarge"
	};

	return (
		<>
			<h1>Turkey Creator</h1>
			<h3 className="button-controls">Set the features of your turkey</h3>

			{/* User controls */}
			<div className="button-controls">
				Size:
				<button
					onClick={() => {
						setSize("s");
					}}
				>
					Small
				</button>
				<button
					onClick={() => {
						setSize("m");
					}}
				>
					Medium
				</button>
				<button
					onClick={() => {
						setSize("l");
					}}
				>
					Large
				</button>
				<button
					onClick={() => {
						setSize("xl");
					}}
				>
					X-Large
				</button>
			</div>
			<div className="button-controls">
				Feather Count:
				<input
					type="number"
					onChange={e => {
						setFeatherCount(e.currentTarget.value);
					}}
					defaultValue={featherCount}
					min={0}
					max={10}
				/>
			</div>
			<div className="button-controls">
				Feather Color(s):
				<label>
					<input
						type="checkbox"
						checked={isRed}
						onChange={e => {
							setIsRed(e.currentTarget.checked);
						}}
					/>
					Red
				</label>
				<label>
					<input
						type="checkbox"
						checked={isOrange}
						onChange={e => {
							setIsOrange(e.currentTarget.checked);
						}}
					/>
					Orange
				</label>
				<label>
					<input
						type="checkbox"
						checked={isBrown}
						onChange={e => {
							setIsBrown(e.currentTarget.checked);
						}}
					/>
					Brown
				</label>
				<label>
					<input
						type="checkbox"
						checked={isLightBrown}
						onChange={e => {
							setIsLightBrown(e.currentTarget.checked);
						}}
					/>
					Light Brown
				</label>
				<label>
					<input
						type="checkbox"
						checked={isYellow}
						onChange={e => {
							setIsYellow(e.currentTarget.checked);
						}}
					/>
					Golden Yellow
				</label>
			</div>

			{/* Generated display based on user selections above */}
			<h3 className="button-controls">Enjoy your turkey</h3>
			<PictureDisplay
				size={size}
				featherCount={featherCount}
				featherColors={featherColors}
				cypher={cypher}
			/>
			<Message size={size} cypher={cypher} featherCount={featherCount} />
		</>
	);
}

export default App;
