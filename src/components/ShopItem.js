import React from 'react';

class ShopItem extends React.Component {
	constructor(props) {
		super(props);		

		this.state = { orderQuantity: 1 }

		this.updateQuantity = this.updateQuantity.bind(this)
		this.onAddToCart = this.onAddToCart.bind(this)
	}


	onAddToCart() {
		let cartItem = {
			id: this.props.itemId,
			title: this.props.title,
			quantity: this.state.orderQuantity
		}

		this.props.buyHandler( cartItem )
	}

	updateQuantity(evt) {
		this.setState({ orderQuantity: parseInt(evt.target.value, 0) })
	}


	render() {
		return <div className="shopItem col-md-3">
			<img src="http://placehold.it/350x150" role="presentation" />
			<h3>{ this.props.title } </h3>
			<ul>
				<li className="price">price: { this.props.price }$ </li>
				<li className="inventory">stock: { this.props.inventory } </li>
			</ul>
			<input id="orderQuantity" type="number" name="orderQuantity" onChange={ this.updateQuantity } value={this.state.orderQuantity} />
			<button className="btn btn-primary" onClick={this.onAddToCart}>Buy</button>
		</div>
	};
}


export default ShopItem;