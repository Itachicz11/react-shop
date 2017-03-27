import React from 'react';

class CartItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<li className="cartItem">
				<span>{ this.props.title }</span>
				<span>  { this.props.quantity }</span>
			</li>
		)
	}


};

export default CartItem;