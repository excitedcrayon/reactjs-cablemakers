import { Link } from "react-router-dom";

const FooterProductLink = ({ product }) => {
    return (
        <Link to={{ pathname: `/products/${product.link}` }} state={{ product }} title={product.name} aria-label={`${product.name} link`}>{product.name}</Link>
    );
}

export default FooterProductLink;