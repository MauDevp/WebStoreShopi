// eslint-disable-next-line no-unused-vars
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'


const OrdersCard = props => {

    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props

    // Set current date
    const currentData = () => {
        const date = new Date();
        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
        const formattedDate = date.toLocaleDateString('de-DE', options);
        return formattedDate.replace(/\//g, '/');
    }

    return(
        <div className='flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-3'>
            <div className='flex justify-between w-full'>
                <div className='flex'>
                    <div className='flex flex-col justify-center font-light mr-1'>
                        <CalendarIcon className='h-6 w-6 text-black cursor-pointer'/>
                        <ShoppingBagIcon className='h-6 w-6 text-black cursor-pointer'/>
                    </div>
                    <p className='flex flex-col justify-center font-light'>
                        <span>
                            {currentData()}
                        </span>
                        <span>
                            {totalProducts} {totalProducts > 1 ? 'articles' : 'article'}
                        </span>
                    </p>
                </div>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>
                        ${totalPrice}
                    </span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard