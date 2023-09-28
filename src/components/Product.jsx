const Product = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={product.image} alt={product.name} aria-label={`${product.name} image`} />
            </div>
            <div className="product-card-title">
                <span>{product.name}</span>
            </div>
        </div>
    );
}

export default Product;