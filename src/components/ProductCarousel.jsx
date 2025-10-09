import { useEffect, useMemo, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useProducts } from '../contexts/ProductContext';
import { Card,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWindowsWidth } from './useWindowSize';
import CardProduct from './CardProduct';



function ProductCarousel({children, filterFn, col, borders, className}) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const { products, filtered } = useProducts()

  //  copia local de filtered
  const cfiltered = useMemo(()=>{
     return products.filter(p => filterFn(p))
  }, [products])

  
  const [chunkSize, setChunkSize] = useState()
  const width = useWindowsWidth()

  const [visibleProducts, setVisibleProducts] = useState(cfiltered);

  useEffect(() => {
    if (width < 576){
      setVisibleProducts(cfiltered.slice(0,3))
      setChunkSize(1);
    } 
    else if(width < 992){
      setVisibleProducts(cfiltered.slice(0,10))
      setChunkSize(2)
    }
    else{ 
      setVisibleProducts(cfiltered)
      setChunkSize(col);
    }
  }, [width, cfiltered]);

  const slides = [];
  for (let i = 0; i < visibleProducts.length; i += chunkSize) {
    slides.push(visibleProducts.slice(i, i + chunkSize));
  }


  return (

    <div className={`${!borders ? 'border' : '' } ${className} rounded p-4 h-100`}>
      <div className='d-flex justify-content-between'>
        <div>
         {children} {/* header */}
        </div>
        <div className="d-flex justify-content-center mt-3 gap-2">
          {slides.map((g, i) => (
            <Button
              key={i}
              variant={i === index ? 'primary' : 'outline-secondary'}
              size="sm"
              onClick={() => setIndex(i)}
              className="rounded-circle"
              style={{ width: 12, height: 12, padding: 0 }}
            />
          ))}
        </div>
      </div>
      
    <Carousel
    indicators={false} variant="dark" activeIndex={index} onSelect={handleSelect}>
      {slides.map((group, index)=>(
          <Carousel.Item>
          <div className="d-flex justify-content-around"> {/* Use flexbox for item arrangement */}
            {group.map((p)=>(
              <CardProduct 
                className={'border-0'} 
                id={p.id} 
                image={p.thumbnail} 
                title={p.title} 
                stock={p.stock} 
                price={p.price}
              />
            ))}
          </div>
        </Carousel.Item>        
      ))}
  </Carousel>
    </div>



  );
}



              // <Card 
              //   key={product.id} 
              //   className="flex-fill  border-0" 
              //   style={{ minWidth: '12rem', maxWidth: '18rem' }}
              // >
              //   <Card.Img 
              //     style={{ objectFit: 'contain', height: 160 }}
              //     variant="top" src={product.thumbnail}  />
              //   <Card.Body>
              //     <Card.Title 
              //      as={Link} to={`/productos/details/${product.title}`}
              //      className='text-truncate text-decoration-none hover-link fs-6'>
              //       {product.title}
              //     </Card.Title>
              //     <Card.Text className='small text-muted text-truncate'>
              //       ${product.price}
              //     </Card.Text>
              //   </Card.Body>
              // </Card>

export default ProductCarousel;