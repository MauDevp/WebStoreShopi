import { useContext } from 'react';

import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = context.order?.length -1
    // console.log('Index: ', index);
    
    // console.log('P: ', context.order?.[index].products);

    const countProductInstances = (id) => {
        return context.order?.[index].products.reduce((count, product) => {
            if (product.id === id) count += 1;
            return count;
        }, 0);
    };

    return (
        <Layout>
            <div className='flex justify-center items-center relative w-80 mb-6 mt-4'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
                {Object.values(
                    context.order?.[index]?.products.reduce((acc, product) => {
                        if (!acc[product.id]) {
                            acc[product.id] = product;
                        }
                        return acc;
                    }, {})
                ).map((product, productIndex) => (
                    <div key={`${product.id}-${productIndex}`}>
                        <OrderCard
                            key={`${product.id}-${productIndex}`}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            productsItems={product}
                            countProductInstances={countProductInstances}
                        />
                        {index < (context.order?.[index].products.length) - 1 && (
                            <hr className="border-t border-gray-200 my-3" />
                        )}
                    </div>
                    
                ))}
            </div>
        </Layout>
    )
}
export default MyOrder