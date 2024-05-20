import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
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
            <div className='flex items-center border-t border-black px-6 w-full h-16 rounded-lg absolute bottom-0 right-0 left-0'>
                <p className='flex justify-between items-center w-full'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;