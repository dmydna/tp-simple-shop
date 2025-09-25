import React from "react";
import { Link, useLocation, useMatch, useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductosContext";

function CategoryNav(){

    const categoryMatch = useMatch("/productos/category/:category");
    const {products} = useProducts()

    return(
        <div className={`d-flex mb-4 overflow-auto`}>
          <b className={`p-2 border mx-2 rounded px-3 ${ location.pathname == '/productos' ? 'd-none' : '' } `}>
              <Link to={'/productos'}><i class="bi bi-arrow-left"></i>
              </Link></b>
         {[...new Set(products.map(p => p.category))].map(category => (
           <b className={`p-2 border mx-2 rounded 
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