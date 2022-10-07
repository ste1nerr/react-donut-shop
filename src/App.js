import "./App.css";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Header from "./Components/Header";

function App() {
	return (
		<div className="wrapper">
					<Header />
					<Cart />
			<div className="content">
				<div className="search-main">
					<h1>All</h1>
					<div className="search-block">
						<img src="./img/lupe.png " alt="" width={16} height={16} />
						<input type="text" placeholder="Search..." />
					</div>
				</div>
				<div className="donuts">
					<Card />
					<div className="card">
						<img src="./img/2.png" alt="donuts" />
						<p className="card-text-title">Strawberry Donut</p>
						<div className="card-text">
							<span>Cost:</span>
							<b>5$</b>
						</div>
						<button className="plus-btn">+</button>
					</div>
					<div className="card">
						<img src="./img/3.png" alt="donuts" />
						<p className="card-text-title">Coconut Donut</p>
						<div className="card-text">
							<span>Cost:</span>
							<b>5$</b>
						</div>
						<button className="plus-btn">+</button>
					</div>
					<div className="card">
						<img src="./img/4.png" alt="donuts" />
						<p className="card-text-title">Standart Donut</p>
						<div className="card-text">
							<span>Cost:</span>
							<b>5$</b>
						</div>
						<button className="plus-btn">+</button>
					</div>
					<div className="card">
						<img src="./img/6.png" alt="donuts" />
						<p className="card-text-title">Chocolate Donut</p>
						<div className="card-text">
							<span>Cost:</span>
							<b>5$</b>
						</div>
						<button className="plus-btn">+</button>
					</div>
					<div className="card">
						<img src="./img/7.png" alt="donuts" />
						<p className="card-text-title">Peanut Donut</p>
						<div className="card-text">
							<span>Cost:</span>
							<b>5$</b>
						</div>
						<button className="plus-btn">+</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
