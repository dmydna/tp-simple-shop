import React from "react";
import { Link, useMatch } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";

function CategoryNav({show}){

    const categoryMatch = useMatch("/productos/category/:category");
    const searchMatch = useMatch("/productos/search/:product");
    const {products} = useProducts()

    return(
        <div className={`d-flex mb-2 flex-wrap ${show ? '': 'd-none' } `}>
          <b className={`p-2 border mx-2 rounded px-3 mb-2  ${ location.pathname == '/productos' ? 'bg-primary' : '' } `}>
              <Link to={'/productos'} className={` text-decoration-none
                ${location.pathname == '/productos' ? 'text-white' : ''}`}>
                  {(location.pathname == '/productos' ? "#": <i class="bi bi-arrow-left"></i> )}
                  
              </Link></b>
         {[...new Set(products.map(p => p.category))].map(category => (
           <b className={`p-2 border mx-2 rounded mb-0 mb-2
              ${categoryMatch?.params.category == category ? 'bg-primary' : ''} `} key={category}>
            <Link className={`text-decoration-none
              ${categoryMatch?.params.category == category ? 'text-white' : ''}
              `} to={'/productos/category/'+ category }>
               {category}
            </Link>
           </b> 
          ))}
        </div>
    )

}

export default CategoryNav;