import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
