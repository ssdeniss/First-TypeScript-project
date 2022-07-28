import React from 'react'

const CreateProduct = () => {
    return (
        <form>
            <input type="text" className='border py-2 px-4 mb-2 w-full outline-none' placeholder='Enter product title' />
            <button type='submit' className='mt-4 py-2 px-4 border text-black bg-yellow-500 hover:text-white'>Create</button>
        </form>
    )
}

export default CreateProduct