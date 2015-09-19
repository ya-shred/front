import React, { Component, PropTypes } from 'react';
import IncreaseItem from './increase.js';
import DecreaseItem from './decrease.js';
import AppStore from '../stores/app-store.js';
import RemoveToCart from './removeCart.js';


function cartItems() {

	return { items: AppStore.getCart()};
}

class Cart extends Component {


	constructor() {
		super();
		AppStore.addChangeListener(this.onChange);
	}
	onChange = () =>{
		this.setState({
			cart: cartItems()
		})
	};
	state = {
		cart: cartItems()
	};

	render = () => {
		var total = 0;
		console.log(this.state.cart);
		var items = this.state.cart.items.map(function (item, i) {
			var subtotal = item.cost * item.qty;
			total + subtotal;
			return <tr key={i}>
				<td><RemoveToCart index={i}/></td>
				<td>{item.title}</td>
				<td>{item.qty}</td>
				<td><IncreaseItem index={i}/><DecreaseItem index={i}/></td>
				<td>${subtotal}</td>
			</tr>
		});
		return <table className="table table-hover">
				<thead>
					<th></th>
					<th>Item</th>
					<th>Qty</th>
					<th></th>
					<th>Subtotal</th>
				</thead>
				<tbody>
				{items}
				</tbody>
		</table>

	}

}


export default Cart;