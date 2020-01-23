import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "../producttype/ProductTypeProvider"
import Product from "./Product"
import "./Products.css"

export default () => {
    const { products } = useContext(ProductContext)
    const { producttypes } = useContext(ProductTypeContext)
    console.log("productTypes in ProductList")
    console.log(producttypes)

    return (
        <div className="products">
            {
                products.map(pro => {
                    const type = producttypes.find(type => type.id === pro.productTypeId)
                    return <Product key={pro.id}
                        productType={type}
                        product={pro} />
                })
            }
        </div>
    )
}