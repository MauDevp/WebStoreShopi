import { createContext, useState, useEffect } from 'react';
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

    //Checkout Side Menu * Open and Close Checkout Side Menu
    const [isPrincipalOpcionMenuOpen, setIsPrincipalOpcionMenuOpen] = useState(false);
    const openPrincipalOpcionMenu = () => setIsPrincipalOpcionMenuOpen(true);
    const closePrincipalOpcionMenu = () => setIsPrincipalOpcionMenuOpen(false);

    //Product Detail * Show Product in Detail
    const [productToShow, setproductToShow] = useState({});

    //Shopping Cart * add Product to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    //Shopping Cart * Order
    const [order, setOrder] = useState([]);

    //Get products from API
    const [items, setItems] = useState(null);


    const [filteredItems, setFilteredItems] = useState(null);

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    //Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    //
    useEffect(() => {
        fetch('https://test-api-store.onrender.com/product')
        .then(response => response.json())
        .then(data => setItems(data))
    }, []);

    useEffect(() => {
        setCount(cartProducts.length);
    }, [cartProducts]);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }
        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item=> item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType){
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_BY_CATEGORY',items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

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
            isPrincipalOpcionMenuOpen,
            setIsPrincipalOpcionMenuOpen,
            openPrincipalOpcionMenu,
            closePrincipalOpcionMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}