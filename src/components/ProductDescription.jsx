import { useParams, useLocation } from "react-router-dom";

const ProductDescription = () => {

    const { link } = useParams();
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="page-wrapper">
            <h1>{link}</h1>
        </div>
    );
}

export default ProductDescription;