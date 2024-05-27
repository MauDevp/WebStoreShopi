import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { findLastIndex } from 'lodash';

// eslint-disable-next-line react/prop-types
export const AddAmountItems = ({idItem, product, amountItems}) => {
    const context = useContext(ShoppingCartContext);

    // eslint-disable-next-line react/prop-types
    const { id, title, images, price } = product;

    const handleAddToCart = () => {
        const newProduct = { id, title, images , price, amount: 1, instanceId: `${id}-${context.cartProducts.length}` };
        context.setCartProducts(prevCartProducts => [...prevCartProducts, newProduct]);
    };

    const handleRemoveFromCart = () => {
        context.setCartProducts(prevCartProducts => {
            const lastIndex = findLastIndex(prevCartProducts, { id: idItem });
            if (lastIndex !== -1) {
                // Si hay al menos una instancia del producto, elimina la última
                const updatedCartProducts = [...prevCartProducts];
                updatedCartProducts.splice(lastIndex, 1);
                return updatedCartProducts;
            }
            // Si no hay ninguna instancia del producto, no hagas nada
            return prevCartProducts;
        });
    };

    return(
        <div className='flex justify-center h-full items-center gap-1 bg-gray-100 rounded-sm'>
            <button onClick={handleRemoveFromCart} className='flex-1'>
                <MinusIcon className='size-5 text-black active:text-gray-400' />
            </button>
            <span className='flex-2 text-center w-10 bg-blue-100 rounded-sm'>{amountItems}</span>
            <button onClick={handleAddToCart} className='flex-1'>
                <PlusIcon className='size-5 text-black active:text-gray-400' />
            </button>
        </div>
    )
}