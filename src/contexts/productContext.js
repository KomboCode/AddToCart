import React, { createContext, useState } from 'react';
import data from '../data';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [ products, setProducts ] = useState(data);
    const [active, setActive ] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [select, setSelect] = useState({
        shoes: [],
        option: ""
    })
    const [pick, setPick] = useState(4);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleCategory = (category) => {
        const newProducts = data.filter((product) => 
        product.category === category);
        setProducts(newProducts);
        setSelect({
            shoes: newProducts,
            option: category
        })
        setActive("");
    }

    const handleActive = (brand, index) => {
        setActive(index);
        const { shoes, option } = select;
        if ( brand === "All" && ( option === "" || 
        option === "categories")) {
            setProducts(data);
            return;
        } else if ( option === "" || option === "categories") {
            const newProducts = data.filter((product) => 
            product.name === brand );
            setProducts(newProducts);
            return;
        } else if ( option !== "categories" && brand === "All") {
            setProducts(shoes);
            return;
        } else {
            const newProducts = shoes.filter((product) => 
            product.name === brand);
            setProducts(newProducts);
            return;
        }
    }

    const handlePick = (index) => {
        setPick(index);
    }

    const handleCart = (index) => {
        const newProducts = [...products];
        newProducts[index].incart = true;
        setProducts(newProducts);
    }

    const singleCart = (id) => {
        const newProducts = [...products];
        newProducts.forEach((product) => {
            if (product.id === id) {
                product.incart = true;
            }
        })
        setProducts(newProducts);
    } 

    return (
        <ProductContext.Provider value={{ 
            products,
            active,
            handleActive,
            toggle,
            handleToggle,
            handleCategory,
            pick,
            handlePick,
            handleCart,
            singleCart
             }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;