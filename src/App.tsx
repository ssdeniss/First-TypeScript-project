
import React from 'react';
import CreateProduct from './components/CreateProduct';
import Error from './components/Error';
import Loader from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/Products';



function App() {
  const { loading, error, products } = useProducts()

  return (
    <>
      <Modal>
        <CreateProduct />
      </Modal>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <div className='container mx-auto max-w-2xl pt-5'>
        {products.map((product, index) => <Product product={product} key={index} />)}
      </div>
    </>

  )
}

export default App;
