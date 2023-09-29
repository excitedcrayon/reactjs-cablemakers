import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={{ pathname: `/products/${product.link}`}} state={{ product }} title={product.name} aria-label={`${product.name} link`}>
                <div className="product-card-image">
                    <img src={product.image} alt={product.name} aria-label={`${product.name} image`} />
                </div>
                <div className="product-card-title">
                    <span>{product.name}</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;