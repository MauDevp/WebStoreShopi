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
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.CloseProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart){
            return(
                <div 
                    className='absolute top-0 right-0 flex justify-center bg-green-600 items-center rounded-full w-8 h-8 m-2 pb-0.5 font-medium text-black'
                    >
                        <CheckIcon className='size-5 text-white'></CheckIcon>
                </div>
            )
        } else {
            return(
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center rounded-full w-8 h-8 m-2 pb-0.5 font-medium bg-gray-200 text-black active:bg-black '
                    onClick={(event) => {addProductsToCart(event, data.data)} }
                    >
                        <PlusIcon className='size-5 text-black  active:text-white'></PlusIcon>
                </div>
            )
        }
    }

    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg transition duration-[300ms] active:scale-[1.1] active:duration-[140ms]'
        >
            <figure className='relative mb-2 w-full h-4/5 active:scale-[0.98] active:duration-100 transition duration-[300ms]'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
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
                <span className='text-sm font-light'>{data.data?.title}</span>
                <span className='text-sm font-medium'>${data.data?.price}</span>
            </p>
        </div>
    )
}

export default Card;