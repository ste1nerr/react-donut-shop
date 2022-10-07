import React from "react";

export default function Header() {
		return (
				<header>
						<div className="headerLeft">
								<h3>DOONUTS</h3>
								<p>Donuts Shop</p>
						</div>
						<ul className="headerRight">
								<li>
										<p className="cart-title">Cart</p>
								</li>
								<li>
										<p>Profile</p>
								</li>
						</ul>
				</header>
		);
}
