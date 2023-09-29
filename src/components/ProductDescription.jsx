import { useParams, useLocation } from "react-router-dom";

const ProductDescription = () => {

    const { link } = useParams();
    const product = useLocation();
    const data = product.state.product;

    function multiLineString(string){
        return string.replace(/\n/g,"<br />");
    }

    return (
        <div className="page-wrapper">
            <div className="page-product-description-data">
                {data.image != null 
                    ?
                    <div className="product-image">
                        <img src={data.image} alt={ `${data.name} image`} />
                    </div>
                    :
                    <div className="product-image">
                        {/* No image to be placed here */}
                        <img src="" alt="" />
                    </div>
                }
                <div className="product-information">
                    {data.name != null
                        ?
                        <div className="product-name">
                            <h1>{data.name}</h1>
                        </div>
                        : ""
                    }
                    <div className="product-details">
                        {data.standards != null 
                        ? 
                        <div className="product-details-row standards"><strong>Standards</strong><span>{data.standards}</span></div> : ""}
                        {data.description != null 
                        ? 
                        <div className="product-details-row description"><strong>Description</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.description)}} /></div> : ""}
                        {data.note != null 
                        ? 
                        <div className="product-details-row note"><strong>Note</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.note)}} /></div> : ""}                        
                        {data.characteristics != null 
                        ? 
                        <div className="product-details-row characteristics"><strong>Characteristics</strong>
                            {data.characteristics.construction_characteristics != null 
                                ? <div className="product-details-inner-row">
                                    <strong>Construction Characteristics</strong>
                                    <span dangerouslySetInnerHTML={{__html: multiLineString(data.characteristics.construction_characteristics)}} />
                                  </div>
                                : ""}
                            {data.characteristics.electrical_characteristics != null 
                                ? <div className="product-details-inner-row">
                                    <strong>Electrical Characteristics</strong>
                                    <span dangerouslySetInnerHTML={{__html: multiLineString(data.characteristics.electrical_characteristics)}} />
                                  </div>
                                : ""}                                
                        </div> : ""}
                    </div>
                </div>
            </div>
            <div className="page-product-description-attributes">
                {data.cable_options != null
                    ?
                    <>
                        {data.cable_options.size_mm != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Size Mm</strong>
                            <span>{data.cable_options.size_mm}</span>
                        </div> : ""}  
                        {data.cable_options.core != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Core</strong>
                            <span>{data.cable_options.core}</span>
                        </div> : ""}
                        {data.cable_options.cores != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Cores</strong>
                            <span>{data.cable_options.cores}</span>
                        </div> : ""}   
                        {data.cable_options.conductor != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Conductor</strong>
                            <span>{data.cable_options.conductor}</span>
                        </div> : ""}  
                        {data.cable_options.colour != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Colour</strong>
                            <span>{data.cable_options.colour}</span>
                        </div> : ""} 
                        {data.cable_options.earth != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Earth</strong>
                            <span>{data.cable_options.earth}</span>
                        </div> : ""}   
                        {data.cable_options.flexible != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Flexible</strong>
                            <span>{data.cable_options.flexible}</span>
                        </div> : ""} 
                        {data.cable_options.length != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Length</strong>
                            <span>{data.cable_options.length}</span>
                        </div> : ""}
                        {data.cable_options.length_range != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Length Range</strong>
                            <span>{data.cable_options.length_range}</span>
                        </div> : ""}                              
                        {data.cable_options.lszh != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>LSZH</strong>
                            <span>{data.cable_options.lszh}</span>
                        </div> : ""} 
                        {data.cable_options.sheath != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Sheath</strong>
                            <span>{data.cable_options.sheath}</span>
                        </div> : ""}
                        {data.cable_options.termite != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Termite</strong>
                            <span>{data.cable_options.termite}</span>
                        </div> : ""} 
                        {data.cable_options.voltage != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Voltage</strong>
                            <span>{data.cable_options.voltage}</span>
                        </div> : ""}         
                    </>
                    : ""}
            </div>
        </div>
    );
}

export default ProductDescription;