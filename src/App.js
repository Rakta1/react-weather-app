import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<form>
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
			</div>
		</div>
	);
}

export default App;
