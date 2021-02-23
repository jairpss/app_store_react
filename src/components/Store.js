import React from 'react';
import Products from './Products';

const Store = ({productos, agregarProductoCarrito}) => {
    return ( 
        <div>
            <h1>Store</h1>
            <Products 
                productos={productos}
                agregarProductoCarrito={agregarProductoCarrito}
            />
        </div>
     );
}
 
export default Store;