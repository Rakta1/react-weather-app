import React from "react";

export default function FormattedDate(props) {
	let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
	let day = days[props.date.getDay()];
	//let hours = props.date.getHours();
	//let date = props.date.getDate();
	let minutes = props.date.getMinutes();
	let time = props.date.toLocaleTimeString([], {
		hour: `2-digit`,
		minute: `2-digit`,
	});
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	return (
		<div>
			{day} {time}
		</div>
	);
}
