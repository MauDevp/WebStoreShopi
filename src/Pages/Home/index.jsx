import { useContext, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


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
    const inputRef = useRef();

    const handleButtonClick = () => {
        inputRef.current.focus();
    };


    return (
        <Layout>
            <div className='flex justify-center items-center relative w-80'>
                <h1 className='font-medium text-2xl mb-6'>Exclusive products</h1>
            </div>
            <div className='flex justify-center items-center w-4/12 mb-4 h-10'>
                <button onClick={handleButtonClick} className='flex justify-center items-center bg-black h-full w-12 rounded-s-lg border border-black'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-white cursor-pointer'/>
                </button>
                <input 
                    ref={inputRef}
                    type="text"
                    placeholder='Search a products'
                    className='rounded-e-lg w-full h-full text-center border border-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 active:ring-2 active:ring-inset'
                    onChange={(event) => context.setSearchByTitle(event.target.value) }
                />
            </div>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    );
}

export default Home;