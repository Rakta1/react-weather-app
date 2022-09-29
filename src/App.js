import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Enter a city"
								className="form-control"
							/>
						</div>
						<div className="col-3">
							<input type="submit" value="Search" className="btn btn-primary" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
