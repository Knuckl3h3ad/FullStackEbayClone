"use client"

import MainLayout from './layouts/Mainlayout'
import CarouselComp from './components/CarouselComp'
import Product from './components/Product'

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description: "blah blah blah",
      url: "https://picsum.photos/id/7",
      price: 2500
    },
    {
      id: 2,
      title: "School Books",
      description: "blah blah blah",
      url: "https://picsum.photos/id/20",
      price: 1999
    }
  ]
  return (
    <MainLayout>
      <CarouselComp />

      <div className='max-w-[1488px] mx-auto'>
        <div className='text-2xl font-bold mt-4 mb-6 px-4'>Products</div>

        <div className='grid grid-cols-5 gap-4'>
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
