import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Cart from '../Cart/Cart';
import { deleteFromDb }from '../../utilities/fakedb'
import ReviewItem from '../ReviewItem/ReviewItem';
const Orders = () => {
    const {products , initialCart}=useLoaderData();
    const [cart,setcart] = useState(initialCart);
    const handleRemoveItem=(id)=>{
        const remaining =cart.filter(product =>product.id!== id);
        setcart(remaining);
        deleteFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                  {
                    cart.map(product =><ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                   }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Orders;