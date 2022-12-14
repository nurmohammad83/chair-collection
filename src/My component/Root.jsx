import React, { createContext,  useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export const ProductsContext = createContext([]);
export const CartContext = createContext([]);
const Root = () => {
  const { products, inisialValue } = useLoaderData();
  const [cart, setCart] = useState(inisialValue);
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer/>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default Root;


