import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';


const PrincipalOpcionMenu = () => {
    const context = useContext(ShoppingCartContext);

    const activeStyle = 'underline underline-offset-4'

    return(
        <aside 
            className={` ${context.isPrincipalOpcionMenuOpen ? 'flex flex-col' : 'hidden' } z-10 fixed left-0 top-[70px] border border-black bg-white rounded-lg w-[332px] h-[calc(100vh-80px)] flex flex-col`}>
            <div className='flex justify-between items-center p-6 mb-8'>
                <h2 className='font-medium text-3xl'>Account</h2>
                <div
                    className='cursor-pointer'x 
                    onClick={() => context.closePrincipalOpcionMenu()}>
                    <XMarkIcon className='size-6 text-black active:text-gray-400'></XMarkIcon>
                </div>
            </div>
            <ul className='flex flex-col font-medium text-base text-gray-500 items-start ml-6 gap-4'>
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
            </ul>
        </aside>
    );
}

export default PrincipalOpcionMenu;