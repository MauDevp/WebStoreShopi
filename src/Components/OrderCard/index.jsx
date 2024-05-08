import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {

    const {
        // eslint-disable-next-line react/prop-types
        id,
        // eslint-disable-next-line react/prop-types
        title,
        // eslint-disable-next-line react/prop-types
        imageUrl,
        // eslint-disable-next-line react/prop-types
        price,
        // eslint-disable-next-line react/prop-types
        handleDelete
    } = props

    return(
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-3'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover text-sm font-extralight' src={imageUrl} alt='Product' />
                </figure>
                <p className='text-sm font-light w-40'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <XMarkIcon onClick={() => handleDelete(id)} className='size-6 text-black active:text-gray-400'></XMarkIcon>
            </div>
        </div>
    )
}

export default OrderCard