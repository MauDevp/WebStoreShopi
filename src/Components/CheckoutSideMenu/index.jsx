import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';
import { AddAmountItems } from '../AddAmountItems';


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    
    const countProductInstances = (id) => {
        return context.cartProducts.reduce((count, product) => {
            if (product.id === id) count += 1;
            return count;
        }, 0);
    };
    

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
            className={` ${context.isCheckoutSideMenuOpen ? 'flex flex-col' : 'hidden' } fixed right-0 top-[120px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-120px)] flex flex-col pb-16`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-3xl'>My Order</h2>
                <div
                    className='cursor-pointer'x 
                    onClick={() => context.CloseCheckoutSideMenu()}>
                    <XMarkIcon className='size-6 text-black active:text-gray-400'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-auto flex-grow'>
                {context.cartProducts.reduce((uniqueProducts, product) => {
                    if (!uniqueProducts.some(uniqueProduct => uniqueProduct.id === product.id)) {
                        uniqueProducts.push(product);
                    }
                    return uniqueProducts;
                }, []).map((product, index) => (
                    <div key={`${product.id}-${index}`}>
                        <OrderCard
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                            AddAmountItems={AddAmountItems}
                            productItem={product}
                            countProductInstances={countProductInstances}
                        />
                        {index < context.cartProducts.length - 1 && (
                            <hr className="border-t border-gray-200 my-3" />
                        )}
                    </div>
                ))}
            </div>
            {context.cartProducts.length > 0 ? (
            <div className='flex flex-col py-2 bg-white justify-between items-center border-t border-black px-6 w-full h-14 rounded-lg'>
                <p className='flex justify-between items-center w-full mb-1'>
                    <span className='font-normal'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link className='w-full' to='/my-orders/last'>
                    <button className='bg-black py-4 text-white w-full rounded-md' onClick={() => handleCheckout()}>checkout</button>
                </Link>
            </div>
            ) : context.CloseCheckoutSideMenu() }

        </aside>
    );
}

export default CheckoutSideMenu;