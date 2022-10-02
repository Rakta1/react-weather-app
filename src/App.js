import Weather from "./Weather";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container p-2">
				<Weather defaultCity="New York" />
			</div>
			<footer>
				<a
					href="https://github.com/Rakta1/react-weather-app"
					target="_blank"
					rel="noreferrer"
				>
					Open-Sourced
				</a>
				, by Terra Wardana
			</footer>
		</div>
	);
}

export default App;
