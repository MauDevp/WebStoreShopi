import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

const Card = (data) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setproductToShow(productDetail)
        context.CloseCheckoutSideMenu()
        
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.CloseProductDetail()
    }

    const renderIcon = (id) => { 
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart){
            return(
                <div 
                    className='absolute top-0 right-0 flex justify-center bg-green-600 items-center rounded-full md:size-8 size-12 m-2 pb-0.5 font-medium text-black'>
                        <CheckIcon className='md:size-5 size-6 text-white'></CheckIcon>
                </div>
            )
        } else {
            return(
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center rounded-full md:size-8 size-12 m-2 pb-0.5 font-medium bg-gray-200 text-black active:bg-black '
                    onClick={(event) => {addProductsToCart(event, data.data)} }
                    >
                        <PlusIcon className='md:size-5 size-8 text-black  active:text-white'></PlusIcon>
                </div>
            )
        }
    }

    return(
        <div className='bg-white cursor-pointer w-[22rem] h-[26rem] md:w-56 md:h-60 rounded-lg md:transition md:duration-[300ms] md:active:scale-[1.1] md:active:duration-[140ms]'
        >
            <figure className='relative mb-2 w-full h-4/5 md:active:scale-[0.98] md:active:duration-100 md:transition duration-[300ms]'>
                <span className='absolute bottom-0 left-0 bg-white/60 md:rounded-lg rounded-2xl text-black text-lg font-light md:font-normal md:text-xs m-2 px-3 py-0.5'>
                    {data.data?.category?.name}
                </span>
                <img 
                    onClick={() => showProduct(data.data)}
                    className='w-full h-full object-cover rounded-lg text-xs font-extralight'
                    src={data.data?.images[0]}
                    alt={'Product'}
                />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='md:text-sm text-xl font-light line-clamp-2 0w-4/5 pr-2'>{data.data?.title}</span>
                <span className='md:text-sm text-xl font-medium'>${data.data?.price}</span>
            </p>
        </div>
    )
}

export default Card;