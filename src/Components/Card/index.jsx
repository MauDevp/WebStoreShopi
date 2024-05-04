import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';

const Card = (data) => {
    const context = useContext(ShoppingCartContext);
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.data?.category?.name}
                </span>
                <img 
                    onClick={() => context.openProductDetail()}
                    className='w-full h-full object-cover rounded-lg text-xs font-extralight'
                    src={data.data?.images[0]}
                    alt={'Product'}
                />
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center rounded-full w-8 h-8 m-2 pb-0.5 font-medium bg-gray-200 text-black active:bg-black '
                    onClick={() => context.setCount(context.count + 1)}
                >
                    <PlusIcon className='size-5 text-black  active:text-white'></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data?.title}</span>
                <span className='text-sm font-medium'>${data.data?.price}</span>
            </p>
        </div>
    )
}

export default Card;