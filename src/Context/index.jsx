import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();



// eslint-disable-next-line react/prop-types
export const ShoppingCartProvide = ({children}) => {
    //Shopping Cart * Increment Count
    const [count, setCount] = useState(0);

    //Product Detail * Open and Close Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const CloseProductDetail = () => setIsProductDetailOpen(false);

    //Checkout Side Menu * Open and Close Checkout Side Menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Product Detail * Show Product in Detail
    const [productToShow, setproductToShow] = useState({});

    //Shopping Cart * add Product to cart
    const [cartProducts, setCartProducts] = useState([]);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            CloseProductDetail,
            productToShow,
            setproductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            CloseCheckoutSideMenu,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}