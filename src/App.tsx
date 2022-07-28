
import React from 'react';
import { Circles } from 'react-loader-spinner';
import { Product } from './components/Product';
import { useProducts } from './hooks/Products';



function App() {
  const { loading, error, products } = useProducts()

  return (
    <>
      {loading &&
        <div style={{ position: 'fixed', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Circles
            height="80"
            width="80"
            color='blue'
            ariaLabel='three-dots-loading'
          /></div>}
      {error && <div className='text-red-600' style={{ position: 'fixed', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '48px' }}>{error}</div>}
      <div className='container mx-auto max-w-2xl pt-5'>
        {products.map((product, index) => <Product product={product} key={index} />)}
      </div>
    </>

  )
}

export default App;
