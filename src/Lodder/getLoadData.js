import { setTolocal } from "../Utilitties/fakeDb";

export  const getLoderData = async()=>{
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    const saveCart = setTolocal()
    const inisialValue =[]
    for(const id in saveCart){
        const foundProduct = products.find(product=> product.id === id)
        if(foundProduct){
            const quantity = saveCart[id]
            foundProduct.quantity= quantity;
            inisialValue.push(foundProduct)
        }
    }

    return {products,inisialValue}

}
