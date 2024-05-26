import { XMarkIcon } from '@heroicons/react/24/outline'
import { MinusIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/outline'
// import { XCircleIcon } from '@heroicons/react/24/outline'

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

    let renderXMarkIcon
    if(handleDelete){
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='size-6 text-black active:text-gray-400 bg-gray-200 rounded-full'></XMarkIcon>
    }

    return(
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
                    <p className='flex-1 text-lg font-medium mr-1 pt-4'>${price}</p>
                    <div className='flex-1 mb-6'>
                        {renderXMarkIcon}
                    </div>
                </div>
                <div className='flex justify-center h-full items-center gap-1 bg-gray-100 rounded-sm'>
                    <button className='flex-1'>{<MinusIcon className='size-5 text-black active:text-gray-400'/>}</button>
                    <span className='flex-2 text-center w-10 bg-blue-100 rounded-sm'>1</span>
                    <button className='flex-1'>{<PlusIcon className='size-5 text-black active:text-gray-400'/>}</button>
                </div>
            </div>

        </div>
    )
}

export default OrderCard