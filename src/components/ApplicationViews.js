import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import { ProductTypeProvider } from "./producttype/ProductTypeProvider"
import LocationList from "./location/LocationList"
import ProductList from "./product/ProductList"


export default (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
         
            <ProductProvider>
                <ProductTypeProvider>
                    {/* Render the customer list when http://localhost:3000/animals */}
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductTypeProvider>
            </ProductProvider>
        </>
    )
}