import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import Item from './cart/item';

const Cart = () => {

    const { cart } = useContext(CartContext);

    var sum = 0;

    const total = cart.forEach((product) => {
        sum = sum + product.price;
    })

    return (
        <section className='cart'>
            { cart.length > 0 ? 
            <div className='total'>
                <h2>Total Cost: <span>$ {sum}</span></h2>
                <button>Clear Cart</button>
            </div>
            : 
            <div className='empty'>
                <h2>Empty Cart</h2>
            </div>}

            { cart.length > 0 ? 
            <div className='titles'>
                <h2>BRAND</h2>
                <h2>PRICE</h2>
                <h2>AMOUNT</h2>
                <h2>DELETE</h2>
                <h2>TOTAL PRICE</h2>
            </div> : null }

            {cart.map( (product, index) => {
                return (
                    <Item
                        key={product.id}
                        product={product}
                        index={index}
                    />
                )
            } ) }
        </section>
    )
}

export default Cart;