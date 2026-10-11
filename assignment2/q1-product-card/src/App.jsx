
import './App.css';

function ProductCard({
  name = 'Unknown Product',
  price = 0,
  image = 'https://placehold.co/200x120?text=Product',
  rating = 0
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Rating: ⭐ {rating}/5</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Product Cards</h1>
      <div className="products">
        <ProductCard name="Laptop" price={55000}
          image="https://placehold.co/200x120?text=Laptop"
          rating={4.5} />
        <ProductCard name="Phone" price={25000}
          image="https://placehold.co/200x120?text=Phone"
          rating={4.7} />
        <ProductCard name="Headphones" price={1500}
          image="https://placehold.co/200x120?text=Headphones"
          rating={4.2} />
        <ProductCard name="Watch" price={3000}
          image="https://placehold.co/200x120?text=Watch"
          rating={4.0} />
      </div>
    </div>
  );
}

export default App;
