import React from 'react'
import ShopItem from '../components/ShopItem'
import ShoppingCart from '../components/ShoppingCart'

const SHOP_PAGE = {
	items: [
		{ id: 1, title: "First item", price: 20, inventory: 10 },
		{ id: 2, title: "Second item", price: 15, inventory: 20 },
		{ id: 3, title: "Third item", price: 40, inventory: 5 },
		{ id: 4, title: "Fouth item", price: 100, inventory: 10 }
	],
	cartItems: []
}

class ShopPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = SHOP_PAGE

		this.buyHandler = this.buyHandler.bind(this)
	}

	buyHandler( newCartItem ) {

		let addNew = true

		this.state.cartItems.map((item) => {
			if ( item.id === newCartItem.id ) {
				addNew = false
				item.quantity += newCartItem.quantity
				this.forceUpdate()
			}
		});

		if ( addNew === true ) {
			this.setState((prevState) => {
				return { cartItems: prevState.cartItems.concat([ newCartItem ]) }
			})
		}

	}


	render() {
		return(
			<div className="shopPage">
				<div className="row">
					<div className="col-md-3">
						{ <ShoppingCart items={this.state.cartItems} /> }
					</div>

					<div className="col-md-9">
						<div className="row">
							{ this.state.items.map((item, i) => <ShopItem key={i} itemId={item.id} title={item.title} price={item.price} buyHandler={this.buyHandler} />) }
						</div>
					</div>

				</div>
			</div>
		)		
	}
}


export default ShopPage