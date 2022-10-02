import React from "react";

export default function FormattedDate(props) {
	let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
	let day = days[props.date.getDay()];
	let hours = props.date.getHours();
	if (hours >= 12) {
		hours = hours - 12;
	}

	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	return (
		<div>
			{day} {hours}:{minutes}{" "}
		</div>
	);
}
