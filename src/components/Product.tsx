import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}
export function Product(props: ProductProps) {
    return (
        <div>{props.product.title}</div>
    )
}