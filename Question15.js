import { useState } from 'react';

function Product({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function Question15() {
  const [isAdded, setIsAdded] = useState(false);
  const product = { name: 'Laptop', price: 999 };

  return (
    <div>
      <Product 
        product={product} 
        onAddToCart={() => setIsAdded(true)} 
      />
      {isAdded && <p style={{ color: 'green' }}>Added to Cart!</p>}
    </div>
  );
}