import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return(
        <aside 
            className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } flex-col fixed right-0 top-20 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    className='cursor-pointer'
                    onClick={() => context.CloseCheckoutSideMenu()}>
                    <XMarkIcon className='size-6 text-black active:text-gray-400'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
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
        </aside>
    );
}

export default CheckoutSideMenu;