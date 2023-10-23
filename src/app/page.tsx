import { ProductType } from '@/types/ProductType';

async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log({ products });
  /**
   * https://fakestoreapi.com/products
   * Every time that we use fetch data on the components, my component should be an async function.
   */

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products?.map((product: ProductType) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
      {/* <h1>Next E-Commerce 13</h1> */}
    </div>
  );
}
