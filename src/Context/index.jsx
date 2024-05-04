import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();



// eslint-disable-next-line react/prop-types
export const ShoppingCartProvide = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const CloseProductDetail = () => setIsProductDetailOpen(false);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            CloseProductDetail,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}