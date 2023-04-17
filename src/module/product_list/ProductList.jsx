import React from 'react'
import ProductItem from '../product_item/ProductItem'
//props model & control below are using for open/close model when users click at 'show detail' button.
export default function ProductList(prop) {
    const shoeList = prop.list;
    return (
        <div className='row'>
            {
                shoeList.map((product, index) => (
                    <div className="col-4" key={index}>
                        <ProductItem
                        handleCartTotal = {prop.handleCartTotal}
                            data={product}
                            set={prop.setShoe}
                            model={prop.model}
                            control={prop.control}
                            cart={prop.cart}
                            setCart={prop.setCart}
                            empty={prop.empty}
                            setEmpty={prop.setEmpty}
                            setTotal={prop.setTotal}
                            setAmount={prop.setAmount}
                        />
                    </div>
                ))
            }
        </div>
    )
}
