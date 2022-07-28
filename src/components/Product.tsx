import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}
export function Product({ product }: ProductProps) {
    const [showDescription, setShowDescription] = useState(false)
    return (
        <div className="border py-2 px-4 rounded flex  items-center mb-2">
            <img src={product.image} alt="" style={{ width: '100px' }} />
            <div className="content ml-10">
                <div className="mt-4">{product.title}</div>
                <p>$ {product.price}</p>
                <button className="py-2 px-4 border bg-yellow-300 mt-4" 
                onClick={() => setShowDescription(!showDescription)}>
                    {!showDescription ? 'Show Details' : 'Hide Details'}</button>
                {showDescription && <div>{product.description}</div>}
            </div>
        </div>

    )
}