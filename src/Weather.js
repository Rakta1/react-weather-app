import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather rounded">
			<form className="p-2 mb-2">
				<div className="row">
					<div className="col-7">
						<input
							type="search"
							placeholder="Enter a city"
							className="form-control"
							autoFocus
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
			<h1>New York</h1>
			<ul className="list-unstyled">
				<li>Sunday, 11:49</li>
				<li>Rain</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<img
						src="https://assets.msn.com/weathermapdata/1/static/svg/72/v2/card_fix_partlysunny/RainShowersDayV2.svg"
						alt="Rain"
					></img>
					59°F
				</div>
				<div className="col-6">
					<ul className="list-unstyled">
						<li>Precipitation: 83%</li>
						<li>Wind: 20 MPH</li>
						<li>Humidity: 76%</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
