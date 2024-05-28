// import { useContext } from 'react';
// import { ShoppingCartContext } from '../../Context';
import { XMarkIcon} from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
const OrderCard = ({ id, title, imageUrl, price, handleDelete, AddAmountItems, productItem, countProductInstances}) => {
    
    
    // const context = useContext(ShoppingCartContext);
    // console.log('cartProducts',context.cartProducts)
    // console.log('Order: ', context.order)
    
    const productCount = countProductInstances(id);

    let renderXMarkIcon
    if(handleDelete){
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='size-6 text-black active:text-gray-400 bg-gray-200 rounded-full'></XMarkIcon>
    }


    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-3'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover text-sm font-extralight' src={imageUrl} alt='Product' />
                </figure>
                <p className='text-sm leading-6 font-light w-28'>{title}</p>
            </div>
            <div className='flex flex-col h-20 justify-center items-center'>
                <div className='flex items-center w-full h-full gap-1'>
                    <div className='flex-1 h-full'></div>
                    <p className='flex-1 text-lg font-medium mr-1 pt-4'>${price*productCount}</p>
                    <div className='flex-1 mb-6'>
                        {renderXMarkIcon}
                    </div>
                </div>
                {AddAmountItems ? <AddAmountItems idItem={id} product={productItem} amountItems={productCount} /> : <span className='flex-2 text-center w-10'>x {productCount}</span>}
            </div>
        </div>
    );
};

export default OrderCard;