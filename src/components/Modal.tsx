import React from 'react'
import CreateProduct from './CreateProduct'

interface ModalProps {
    children: React.ReactNode
}
export function Modal({ children }: ModalProps) {
    return (
        <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
            <div className="modal__popup w-[500px] p-10 rounded bg-white ">
                {children}
            </div>
        </div>
    )
}

