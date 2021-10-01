import React from 'react';
import useProduct from '../../hooks/useProduct';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';

const OrderReview = () =>
{
    const [products, setProducts] = useProduct();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>{products?.length}</h1>
            <h3>{cart?.length}</h3>
            <h2>This is Order Review</h2>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;