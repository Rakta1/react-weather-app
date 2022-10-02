import React, { useState } from "react";
import Axios from "axios";
import "./Weather.css";

export default function Weather() {
	const [weatherData, setWeatherData] = useState({ ready: false });
	function handleResponse(response) {
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			city: response.data.name,
			date: "Sunday, 11:49",
			description: response.data.weather[0].description,
			iconUrl:
				"https://assets.msn.com/weathermapdata/1/static/svg/72/v2/card_fix_partlysunny/RainShowersDayV2.svg",
		});
	}
	function search() {
		const apiKey = "be6fdca8e2e91988e4c676b7fb94a33b";
		let city = "New York";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
		Axios.get(apiUrl).then(handleResponse);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather rounded">
				<form className="p-2 mb-2">
					<div className="row">
						<div className="col-7">
							<input
								type="search"
								placeholder="Enter a city"
								className="form-control"
								autoFocus="on"
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<h1 className="text-capitalize">{weatherData.city}</h1>
				<ul className="list-unstyled">
					<li>{weatherData.date}</li>
					<li className="text-capitalize ">{weatherData.description}</li>
				</ul>
				<div className="row">
					<div className="col-6">
						<img
							src={weatherData.iconUrl}
							alt={weatherData.description}
							className="p-1"
						></img>
						<span className="temperature">
							{Math.round(weatherData.temperature)}
						</span>
						<span className="unit">°F</span>
					</div>
					<div className="col-6">
						<ul className="list-unstyled">
							<li>Wind: {Math.round(weatherData.wind)} KM/H</li>
							<li>Humidity: {Math.round(weatherData.humidity)}%</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		search();
		return "Loading..";
	}
}
