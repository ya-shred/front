import React, { Component, PropTypes } from 'react';
import AddToCart from './addToCart.js';
import AppStore from '../stores/app-store.js';

function getCatalog() {
	return { items: AppStore.getCatalog() }
}

class Catalog extends Component {

	state = {
		catalog: getCatalog()
	};

	render() {
		var items= this.state.catalog.items.map(function (item, i) {
			return <tr key={i}>
				<td>{item.title}</td>
				<td>${item.cost}</td>
				<td><AddToCart items={item}/></td>

			</tr>
		});
		return <table className="table table-hover">

			{items}

		</table>

	}

}


export default Catalog;