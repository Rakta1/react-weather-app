import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response);
	}
	let apiKey = "be6fdca8e2e91988e4c676b7fb94a33b";
	let latitude = props.coordinates.lat;
	let longitude = props.coordinates.lon;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-Day">Thur</div>
					<img
						src="http://openweathermap.org/img/wn/01d@2x.png"
						alt="clear sky"
					></img>
					<div className="WeatherForecast-temperatures">
						<span className="WeatherForecast-temp-max">73°</span>
						<span className="WeatherForecast-temp-min">58°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
