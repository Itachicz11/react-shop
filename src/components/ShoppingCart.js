import React from 'react';
import CartItem from './CartItem';


const ShoppingCart = (props) => {

	return(
		<div className="shopping-cart">
			<h4>shopping cart</h4>

			{ props.items.length === 0 &&
				<span>no items in the cart</span>
			}

			{ props.items.map( (item, i) => <CartItem shopItemId={item.id} quantity={item.quantity} title={item.title} key={i} /> ) }


		</div>
	)
};



export default ShoppingCart;