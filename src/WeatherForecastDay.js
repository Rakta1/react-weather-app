import React from "react";

export default function WeatherForecastDay(props) {
	function day() {
		let date = new Date(props.data.dt * 1000);
		let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
		let day = days[date.getDay()];
		return `${day}`;
	}
	function maxTemp() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}`;
	}
	function minTemp() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}`;
	}

	let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

	return (
		<div className="WeatherForecastDay">
			<div className="WeatherForecast-Day">{day()}</div>
			<img src={iconUrl} alt="Weather icon" width="60px"></img>
			<div className="WeatherForecast-temperatures">
				<span className="WeatherForecast-temp-max">{maxTemp()}°</span>
				<span className="WeatherForecast-temp-min">{minTemp()}°</span>
			</div>
		</div>
	);
}
