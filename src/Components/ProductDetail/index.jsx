import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return(
        <aside 
            className={` ${context.isProductDetailOpen ? 'flex' : 'hidden' } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-130px)] overflow-y-scroll`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div
                    className='cursor-pointer'
                    onClick={() => context.CloseProductDetail()}>
                    <XMarkIcon className='size-6 text-black active:text-gray-400'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6' >
                <img className='w-full h-full rounded-lg object-cover' 
                src={context.productToShow.images?.[0]} 
                alt={context.productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    );
}

export default ProductDetail;