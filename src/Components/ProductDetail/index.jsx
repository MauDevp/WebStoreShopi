import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return(
        <aside 
            className={` ${context.isProductDetailOpen ? 'flex' : 'hidden' } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.CloseProductDetail()}>
                    <XMarkIcon className='size-6 text-black active:text-gray-400'></XMarkIcon>
                </div>
            </div>
        </aside>
    );
}

export default ProductDetail;