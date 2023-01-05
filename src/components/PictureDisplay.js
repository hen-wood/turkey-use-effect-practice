import turkey from "../images/turkey.png";
import feather1 from "../images/feather1.svg";
import feather2 from "../images/feather2.svg";
import feather3 from "../images/feather3.svg";
import feather4 from "../images/feather4.svg";
import feather5 from "../images/feather5.svg";
import feather6 from "../images/feather6.svg";
import feather7 from "../images/feather7.svg";
import feather8 from "../images/feather8.svg";
import feather9 from "../images/feather9.svg";
import featherA from "../images/featherA.svg";
import { useEffect, useState } from "react";

const feathers = [
	feather1,
	feather2,
	feather3,
	feather4,
	feather5,
	feather6,
	feather7,
	feather8,
	feather9,
	featherA
];

function PictureDisplay({ size, featherCount, featherColors, cypher }) {
	const [convertedSize, setConvertedSize] = useState(cypher[size]);
	useEffect(() => {
		setConvertedSize(cypher[size]);
	}, [size, cypher]);

	return (
		<div className={`image-area ${convertedSize}`}>
			{feathers.slice(0, featherCount).map((c, i) => (
				<img
					key={feathers[i]}
					src={feathers[i]}
					className={`image-feather ${featherColors[i % featherColors.length]}`}
					alt="feather"
				/>
			))}

			<img src={turkey} className="image-turkey" alt="turkey" />
		</div>
	);
}

export default PictureDisplay;