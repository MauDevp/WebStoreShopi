import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext);

    const stateCheckoutSideMenu = () => {
        context.CloseProductDetail()
        context.setIsCheckoutSideMenuOpen(context.isCheckoutSideMenuOpen ? false : true)
    }

    return(
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-base font-light top-0 bg-slate-200'>
            <ul className='flex font-medium text-base text-gray-500 items-center gap-4'>
                <li className='font-bold text-2xl text-black'>
                    <NavLink 
                        to='/'>
                        Shopi
                    </NavLink>
                </li>
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

            <ul className='flex font-medium text-base text-gray-500 items-center gap-4'>
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
        </nav>
    );
}

export default Navbar;