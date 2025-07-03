function ProductsList({ products }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} style={{
          padding: '10px',
          margin: '5px',
          border: '1px solid #eee'
        }}>
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default function Question12() {
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' }
  ];

  return <ProductsList products={products} />;
}