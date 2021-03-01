import './Products.css';
import { Link } from 'react-router-dom';

function Products() {
  return (
   <div className='container'>

    <div className='product__item'>
        <h3 className='product__title'>Xiaomi Note 3</h3>
        <div className='product__price'>400</div>
        <Link to="products/1">Details</Link>
    </div>

    <div className='product__item'>
        <h3 className='product__title'>iPhone 12</h3>
        <div className='product__price'>1300</div>
        <Link to="products/2">Details</Link>
    </div>

    <div className='product__item'>
        <h3 className='product__title'>Samsung Galaxy S20</h3>
        <div className='product__price'>800</div>
        <Link to="products/3">Details</Link>
    </div>

   </div> 
  );
}

export default Products;