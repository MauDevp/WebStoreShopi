import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            data: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return(
        <aside 
            className={` ${context.isCheckoutSideMenuOpen ? 'flex flex-col' : 'hidden' } fixed right-0 top-[70px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-70px)] flex flex-col pb-16`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    className='cursor-pointer'x 
                    onClick={() => context.CloseCheckoutSideMenu()}>
                    <XMarkIcon className='size-6 text-black active:text-gray-400'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-auto flex-grow'>
                {context.cartProducts.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
            {context.cartProducts.length > 0 ? (
            <div className='flex flex-col py-2 bg-white justify-between items-center border-t border-black px-6 w-full h-28 rounded-lg absolute bottom-0 right-0 left-0'>
                <p className='flex justify-between items-center w-full'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link className='w-full' to='/my-orders/last'>
                    <button className='bg-black py-4 text-white w-full rounded-lg' onClick={() => handleCheckout()}>checkout</button>
                </Link>
            </div>
            ) : context.CloseCheckoutSideMenu() }

        </aside>
    );
}

export default CheckoutSideMenu;