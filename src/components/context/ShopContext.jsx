import React, { createContext } from "react";
import products from '../assets/all_product';

export const ShopContext  = createContext(null);

const ShopContextProvider = (props)=>{

    const contextValue = {products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};
export default ShopContextProvider;