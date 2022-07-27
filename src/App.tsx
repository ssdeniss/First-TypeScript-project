import React from 'react';
import { Product } from './components/Product';
import { Products } from './data/Products';


function App() {
  return (

    <div className='container mx-auto max-w-2xl pt-5'>
      <Product product={Products[0]} />
    </div>
  )
}

export default App;
