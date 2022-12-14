import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1 className="text-capitalize">{props.data.city}</h1>
			<ul className="list-unstyled">
				<FormattedDate date={props.data.date} />
				<li className="text-capitalize ">{props.data.description}</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<img
						src={props.data.iconUrl}
						alt={props.data.description}
						className="p-1"
					></img>
					<WeatherTemperature fahrenheit={props.data.temperature} />
				</div>
				<div className="col-6">
					<ul className="list-unstyled">
						<li>Wind: {Math.round(props.data.wind)} km/h</li>
						<li>Humidity: {Math.round(props.data.humidity)}%</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
