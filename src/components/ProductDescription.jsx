import { useParams } from "react-router-dom";

const ProductDescription = () => {

    const { link } = useParams();

    return (
        <h1>{link}</h1>
    );
}

export default ProductDescription;