import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <h3>DOONUTS</h3>
          <p>Donuts Shop</p>
        </div>
        <ul className="headerRight">
          <li>
            <p>Cart</p>
            <p>1200$</p>
          </li>
          <li>
            <p>Profile</p>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All</h1>
        <div className="donuts">
        <div className="card">
          <img src="./img/1.png" alt="donuts" />
          <p className="card-text-title">Caramel Donut</p>
          <div className="card-text">
            <span>Cost:</span>
            <b>5$</b>
          </div>
          <button className="plus-btn">+</button>
        </div>
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
