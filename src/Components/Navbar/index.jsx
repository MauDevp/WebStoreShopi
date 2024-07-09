import { NavLink } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext);

    const stateCheckoutSideMenu = () => {
        context.CloseProductDetail()
        context.setIsCheckoutSideMenuOpen(context.isCheckoutSideMenuOpen ? false : true)
    }
    const statePrincipalOpcionMenu = () => {
        context.CloseCheckoutSideMenu()
        context.setIsPrincipalOpcionMenuOpen(context.isPrincipalOpcionMenuOpen ? false : true)
    }

    // Create a ref for the input element
    const inputRef = useRef();
    const handleButtonClick = () => {
        // Focus on the input element when the button is clicked
        inputRef.current.focus();
    };

    return(
        <nav className='flex flex-col justify-center items-center fixed z-10 w-full py-4 top-0 bg-white shadow'>
            <div className='block md:hidden'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <div className='flex justify-between items-center md:w-11/12 mx-4'>
                        <div
                            onClick={statePrincipalOpcionMenu}
                        >
                            <Bars3Icon className='h-6 w-6 text-black cursor-pointer'/>
                        </div>
                        <ul>
                            <li className='font-bold text-4xl text-black'>
                                <NavLink 
                                    to='/'
                                    onClick={() => context.setSearchByCategory()}
                                    >
                                    Shopi
                                </NavLink>
                            </li>
                        </ul>
                        <div className='flex justify-center items-center w-6/12 h-10'>
                            <button onClick={handleButtonClick} className='flex justify-center items-center bg-black h-full w-12 rounded-s-lg border border-black'>
                                <MagnifyingGlassIcon className='h-6 w-6 text-white cursor-pointer'/>
                            </button>
                            <input 
                                ref={inputRef}
                                type="text"
                                placeholder='search a product...'
                                className='rounded-e-lg w-full h-full text-center border border-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 active:ring-2 active:ring-inset'
                                onChange={(event) => context.setSearchByTitle(event.target.value) }
                            />
                        </div>
                        <li onClick={stateCheckoutSideMenu} className='flex items-center'>
                                    <ShoppingBagIcon className='size-8 text-black  active:text-white'></ShoppingBagIcon>
                                    <div className='text-sm'>{context.count}</div>
                        </li>
                    </div>
                    <div className='flex w-10/12 md:w-6/12 overflow-x-auto scrollbar-hide'>
                        <ul className='flex font-medium text-base text-gray-500 mt-6 space-x-3'>
                            <li>
                                <NavLink 
                                    to='/'
                                    onClick={() => context.setSearchByCategory()}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    All
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/clothes'
                                    onClick={() => context.setSearchByCategory('clothes')}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Clothes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/electronics'
                                    onClick={() => context.setSearchByCategory('electronics')}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Electronics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/furnitures'
                                    onClick={() => context.setSearchByCategory('furnitures')}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Furnitures
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/shoes'
                                    onClick={() => context.setSearchByCategory('shoes')}
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }>
                                    Shoes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to='/others'
                                    onClick={() => context.setSearchByCategory('others')}
                                    className={({ isActive }) => 
                                        isActive ? activeStyle : undefined
                                    }>
                                    Others
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='hidden md:block md:w-10/12'>
                <div className='flex justify-center items-center md:w-full'>
                    <ul>
                        <li className='font-bold text-4xl text-black'>
                            <NavLink 
                                to='/'
                                onClick={() => context.setSearchByCategory()}
                                >
                                Shopi
                            </NavLink>
                        </li>
                    </ul>
                    <div className='flex justify-center items-center w-4/12 h-10 ml-40 mr-8'>
                        <button onClick={handleButtonClick} className='flex justify-center items-center bg-black h-full w-12 rounded-s-lg border border-black'>
                            <MagnifyingGlassIcon className='h-6 w-6 text-white cursor-pointer'/>
                        </button>
                        <input 
                            ref={inputRef}
                            type="text"
                            placeholder='search a product...'
                            className='rounded-e-lg w-full h-full text-center border border-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 active:ring-2 active:ring-inset'
                            onChange={(event) => context.setSearchByTitle(event.target.value) }
                        />
                    </div>
                    <ul className='flex font-medium text-base text-gray-500 items-center gap-8'>
                        <li className='text-black/60 font-normal'>
                            mau@platzi.com
                        </li>
                        <li>
                            <NavLink 
                                to='/my-orders'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/my-account'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                My Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/sign-in'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Sign In
                            </NavLink>
                        </li>
                        <li onClick={stateCheckoutSideMenu} className='flex items-center'>
                            <ShoppingBagIcon className='size-6 text-black  active:text-white'></ShoppingBagIcon>
                            <div className='text-sm'>{context.count}</div>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-start md:w-6/12 md:ml-40'>
                    <ul className='flex font-medium text-base text-gray-500 items-center gap-5 mt-6'>
                        <li>
                            <NavLink 
                                to='/'
                                onClick={() => context.setSearchByCategory()}
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                All
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/clothes'
                                onClick={() => context.setSearchByCategory('clothes')}
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Clothes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/electronics'
                                onClick={() => context.setSearchByCategory('electronics')}
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Electronics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/furnitures'
                                onClick={() => context.setSearchByCategory('furnitures')}
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Furnitures
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/shoes'
                                onClick={() => context.setSearchByCategory('shoes')}
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Shoes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/others'
                                onClick={() => context.setSearchByCategory('others')}
                                className={({ isActive }) => 
                                    isActive ? activeStyle : undefined
                                }>
                                Others
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;