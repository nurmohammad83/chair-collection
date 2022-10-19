const addToLocal = (name)=>{
    let shoppingCart= {}
    
    const storeCart = localStorage.getItem('shopping-cart')
    if(storeCart){
        shoppingCart= JSON.parse(storeCart)

        const quantity = shoppingCart[name]
        if(quantity){
            const newQuantity = quantity + 1;
            shoppingCart[name]=newQuantity;
        }else{
            shoppingCart[name]= 1
        }
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
const setTolocal =()=>{
    let shoppingCart= {}

    const storeCart =localStorage.getItem('shopping-cart')
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
        return shoppingCart
    }else{
       return shoppingCart
    }
}

const removeFromDb = name => {
    const storeCart = localStorage.getItem('shopping-cart')
    if (storeCart) {
      const shoppingCart = JSON.parse(storeCart)
      if (name in shoppingCart) {
        delete shoppingCart[name]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      }
    }
  }
export  {addToLocal , setTolocal, removeFromDb}