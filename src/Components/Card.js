import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="./img/1.png" alt="donuts" />
      <p className="card-text-title">Caramel Donut</p>
      <div className="card-text">
        <span>Cost:</span>
        <b>5$</b>
      </div>
      <button className="plus-btn">+</button>
    </div>
  );
}
