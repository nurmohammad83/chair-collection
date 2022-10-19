import React from 'react';

const Product = ({product,handelAdded}) => {
    const {name,photo,price,quantity}= product
    return (
        <div className=" rounded-md shadow-xl bg-gray-200dark:text-gray-100">
	<img src={photo} alt="" className="p-1 object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p className="dark:text-gray-100 font-semibold">Quantity: {quantity? quantity: 0}</p>
			<p className="dark:text-gray-100 font-semibold">Price: {price}</p>
		</div>
		<button 
        onClick={()=>handelAdded(product)}
        type="button" className="flex items-center justify-center w-full p-3  tracking-wide rounded-md hover:bg-orange-400 bg-violet-400 text-white font-semibold">Buy Now</button>
	</div>
</div>
    );
};

export default Product;