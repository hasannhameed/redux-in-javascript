import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PROCDUCTS = [
  {id:'p1',
    price:1,
    title:'my product',
    discription:'my discription'
  },
  {id:'p2',
    price:2,
    title:'my product',
    discription:'my discription'
  },
  {id:'p3',
    price:3,
    title:'my product',
    discription:'my discription'
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROCDUCTS.map(product =>(
          <ProductItem
          key={product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.discription}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
