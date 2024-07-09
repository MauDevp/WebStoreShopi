import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'


function Home(){
    const context = useContext(ShoppingCartContext);

    const renderView = () => {
            if(context.filteredItems?.length > 0){
                return(
                    context.filteredItems?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )
            } else {
                return(
                    <div className='flex flex-col w-full h-96 items-center justify-center col-span-4'>
                        <h1 className='mb-6 font-extralight text-2xl'>We don&apos;t have anything:</h1>
                        <ArchiveBoxXMarkIcon className='size-16 text-black'/>
                    </div>
                )
            } 
    }



    return (
        <Layout>
            <div className='flex justify-center items-center relative w-80 sm:w-full'>
                <h1 className='font-medium text-3xl mb-10 mt-2 md:text-4xl md:mt-0'>Exclusive products</h1>
            </div>
            <div className="flex justify-center">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg">
                    {renderView()}
                </div>
            </div>
            <ProductDetail />
        </Layout>
    );
}

export default Home;