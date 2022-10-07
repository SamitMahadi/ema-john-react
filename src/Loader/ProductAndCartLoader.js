import { getStoredCart } from "../utilities/fakedb";

export const ProductAndCartLoader = async () =>{
    const ProductsData = await fetch('products.json');
    const products = await ProductsData.json()


    const SavedCart = getStoredCart();
    const initialCart = []
    // console.log('savedcart',SavedCart);
    console.log(products);
    for (const id in SavedCart){
        const addedProduct = products.find(product =>product.id===id)
        if(addedProduct){
            const quantity = SavedCart[id]
            addedProduct.quantity=quantity;
           initialCart.push(addedProduct); 
        }
    }
    return {products: products , initialCart: initialCart};
}