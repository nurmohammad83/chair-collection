import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { addToLocal,  } from '../Utilitties/fakeDb';
import Product from './Product';
import {  CartContext, ProductsContext } from './Root';


const Products = () => {
    const products = useContext(ProductsContext)
    const [cart,setCart]= useContext(CartContext)
    
   
    const handelAdded=(product)=>{
        let newCart=[]
        const exists = cart.find(existingProduct=> existingProduct.name === product.name)
        if(!exists){
            product.quantity = 1;
            newCart=[...cart,product]
        }else{
            const rest = cart.filter(existingProduct=> existingProduct.name !== product.name)
            exists.quantity=exists.quantity +1;
            newCart=[...rest,exists]
        }

        setCart(newCart)
        addToLocal(product.name)
        toast.success('Product Added!', { autoClose: 500 })
    }
    return (
        <>
        <h1 className='mt-6 text-center font-mono font-bold text-sky-600 text-5xl'>All Furniture</h1> 
        <div className='grid grid-cols-3 gap-4 p-8'>
            {
                products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    handelAdded={handelAdded}
                />)
            }
        </div>
        </>
    );
};

export default Products;