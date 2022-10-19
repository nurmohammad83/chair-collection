import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from './Root';
import { toast } from 'react-toastify'
import { removeFromDb } from '../Utilitties/fakeDb';

const Cart = () => {
	const [cart,setCart]= useContext(CartContext)

	console.log(cart);
	

	const handelRemoveItem=(name=>{
		const remaning = cart.filter(product=> product.name !== name)
		setCart(remaning)
		removeFromDb(name)
		toast.warning('Removed Item!', { autoClose: 500 })
	})
	let total = 0;
	for(const product of cart){
		total = total + product.price * product.quantity
	}
    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<h2 className="text-xl font-semibold">Your cart</h2>
	<ul className="flex flex-col divide-y divide-gray-700">
		{
			cart.map(product=> <CartItem
				 key={product.id}
				 product={product}
				 handelRemoveItem={handelRemoveItem}
				 />)
		}
	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold"> {total} </span>
		</p>
		<p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
		<Link to='/products'>
		<button type="button"  className="px-6 py-2 border bg-blue-500 font-semibold rounded-md dark:border-violet-400">Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
		</Link>
		<Link to='/checkout'><button type="button" className="bg-orange-500 font-semibold px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button></Link>
	</div>
</div>
    );
};

export default Cart;