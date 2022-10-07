import React from 'react'

export default function Cart() {
		return (
    <div className="cart-side">
				<div className="cart-block">
					<h2>Cart<p className="cart-remove">×</p></h2>
					<div className="items">
					<div className="cartItem">
						<img src="./img/1.png" alt="" className="cartItem-img" />
						<div className="cartText">
							<p>Caramel Donut</p>
							<b>5$</b>
							<p className="cart-remove">×</p>
						</div>
					</div>
					<div className="cartItem">
						<img src="./img/1.png" alt="" className="cartItem-img" />
						<div className="cartText">
							<p>Caramel Donut</p>
							<b>5$</b>
							<p className="cart-remove">×</p>
						</div>
					</div>
					<div className="cartItem">
						<img src="./img/1.png" alt="" className="cartItem-img" />
						<div className="cartText">
							<p>Caramel Donut</p>
							<b>5$</b>
							<p className="cart-remove">×</p>
						</div>
					</div>
					<div className="cartItem">
						<img src="./img/1.png" alt="" className="cartItem-img" />
						<div className="cartText">
							<p>Caramel Donut</p>
							<b>5$</b>
							<p className="cart-remove">×</p>
						</div>
					</div>
					<div className="cartItem">
						<img src="./img/1.png" alt="" className="cartItem-img" />
						<div className="cartText">
							<p>Caramel Donut</p>
							<b>5$</b>
							<p className="cart-remove">×</p>
						</div>
					</div>
					<div className="cartItem">
						<img src="./img/2.png" alt="" className="cartItem-img" />
						<div className="cartText">
							<p>Caramel Donut</p>
							<b>5$</b>
							<p className="cart-remove">×</p>
						</div>
					</div>
					<div className="cartItem">
						<img src="./img/2.png" alt="" className="cartItem-img" />
						<div className="cartText">
							<p>Caramel Donut</p>
							<b>5$</b>
							<p className="cart-remove">×</p>
						</div>
					</div>
				</div>
					<ul className="cartDown" >
						<li>
							<span>Total: </span>
							<div></div>
							<b>23$</b>
						</li>
						<li>
							<span>Tax 5%: </span>
							<div></div>
							<b>5</b>
						</li>
						<button className="brown-btn" >Сheckout</button> 
					</ul>
				</div>
			</div>
		)
}
