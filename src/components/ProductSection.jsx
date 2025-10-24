import { useMemo } from 'react';
import { useProducts } from '../contexts/ProductContext';
import { useWindowsWidth } from '../contexts/useWindowSize';
import CardProduct from './CardProduct';

function ProductSection({children, filterFn, count, className, borders}){

    const { products } = useProducts()

    const width = useWindowsWidth()
    const cfiltered = useMemo(()=>{
       const filtered = products.filter(p => filterFn(p))
       return count ? filtered.slice(0, (count)) : filtered
     }, [products])

    
    const colClass = useMemo(() => {
      if (count >= 4) return 'col-lg-3 col-md-4 col-sm-6 col-12'
    
      const fix = Math.floor(12 / count)
      return `col-lg-${fix} col-md-${fix} col-sm-12 col-12`
    }, [count])



    return(
      <div className={`${className} rounded  h-100 p-4`}>
        <div className='row'>
          {children}
        {cfiltered.map((p, i) => (
            <CardProduct 
              className={'border-0 m-0 p-0'} 
              id={p.id} 
              image={p.thumbnail} 
              title={p.title} 
              stock={p.stock} 
              price={p.price}
              cols={colClass}
            />
        ))}
        </div>
        </div>

    )
}


 {/*
             <Col className={`d-flex flex-column 
              ${colClass} `} 
             // xs={12} sm={6} md={4} lg={3}
                >

              <Card  
              className={`row m-2 text-decoration-none border-0
              ${i != 3  && width < 723 ? 'border-bottom' : '' }
              ps-0`}
            >
              <Card.Img 
                style={{ objectFit: 'contain', height: 160 }} 
                className="mx-auto" src={product.thumbnail} 
              />
              <Card.Body>
                <Card.Title 
                  as={Link} 
                  to={`/productos/details/${product.title}`} 
                  className={`d-block text-wrap fw-normal hover-link`}
                >
                  {product.title}
                </Card.Title>
                <Card.Text  className="h3 text-truncate">
                  $ {product.price || "N/A"}
                </Card.Text>
                <Card.Text className="fw-bolder text-secondary">
                  stock: {product.stock || 0}
                </Card.Text>
              </Card.Body>
              <Card.Text className="w-100 d-flex mb-2"></Card.Text>
            </Card> 
             </Col>
            */}


export default ProductSection;