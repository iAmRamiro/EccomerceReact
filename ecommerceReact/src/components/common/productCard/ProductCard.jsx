import "./productCard.css";

const ProductCard = ({ item }) => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="card">
        <img className="product--image" src={item.img} alt="product image" />
        <h2>{item.title}</h2>
        <p className="price"> ${item.price}</p>
        <p>{item.description}</p>
        <p>
          <button>Añadir al Carrito</button>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
