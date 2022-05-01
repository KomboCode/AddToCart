import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';


const Item = ({ 
     product,
     index 
    }) => {

        const {id, name, image, price, count } = product;

    return (
        <div className='cart-item'>
            <div className='image-bg'>
                <img src={image} width="190px"/>
            </div>
            <div className='wrapper'>
                <h3>{name}</h3>
                <h3>${price}</h3>
                <div className='count'>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
                <div>
                    < RiDeleteBin6Line className='delete'/>
                    <h4>${price}</h4>
                </div>
            </div>
        </div>
    )
}

export default Item;