import { useParams, useLocation } from "react-router-dom";
import  multiLineString from "../functions/GlobalFunctions";

const ProductDescription = () => {

    const { link } = useParams();
    const product = useLocation();
    const data = product.state.product;

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
                        {data.benefits != null 
                        ? 
                        <div className="product-details-row benefits"><strong>Benefits</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.benefits)}} /></div> : ""}
                        {data.misc != null 
                        ? 
                        <div className="product-details-single-row"><span dangerouslySetInnerHTML={{__html: multiLineString(data.misc)}} /></div> : ""}
                        {data.note != null 
                        ? 
                        <div className="product-details-row note"><strong>Note</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.note)}} /></div> : ""}
                        {data.application != null 
                        ? 
                        <div className="product-details-row application"><strong>Application</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.application)}} /></div> : ""}  
                        {data.continuous_operating_temperature != null 
                        ? 
                        <div className="product-details-row continuos-operating-temparature"><strong>Continuous Operating Temperature</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.continuous_operating_temperature)}} /></div> : ""}
                        {data.colours != null 
                        ? 
                        <div className="product-details-row colours"><strong>Colours</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.colours)}} /></div> : ""} 
                        {data.voltage != null 
                        ? 
                        <div className="product-details-row voltage"><strong>Voltage</strong><span dangerouslySetInnerHTML={{__html: multiLineString(data.voltage)}} /></div> : ""}                  
                        {data.characteristics != null 
                        ? 
                        <div className="product-details-row characteristics"><strong>Characteristics</strong>
                            {data.characteristics.construction_characteristics != null 
                                ? <div className="product-details-inner-row">
                                    <strong>Construction Characteristics</strong>
                                    <span dangerouslySetInnerHTML={{__html: multiLineString(data.characteristics.construction_characteristics)}} />
                                  </div>
                                : ""}
                            {data.characteristics.dimensional_characteristics != null 
                                ? <div className="product-details-inner-row">
                                    <strong>Dimensional Characteristics</strong>
                                    <span dangerouslySetInnerHTML={{__html: multiLineString(data.characteristics.dimensional_characteristics)}} />
                                  </div>
                                : ""}                                
                            {data.characteristics.electrical_characteristics != null 
                                ? <div className="product-details-inner-row">
                                    <strong>Electrical Characteristics</strong>
                                    <span dangerouslySetInnerHTML={{__html: multiLineString(data.characteristics.electrical_characteristics)}} />
                                  </div>
                                : ""} 
                            {data.characteristics.usage_characteristics != null 
                                ? <div className="product-details-inner-row">
                                    <strong>Usage Characteristics</strong>
                                    <span dangerouslySetInnerHTML={{__html: multiLineString(data.characteristics.usage_characteristics)}} />
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
                        {data.cable_options.pairs != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Pairs</strong>
                            <span>{data.cable_options.pairs}</span>
                        </div> : ""}
                        {data.cable_options.screened != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Screened</strong>
                            <span>{data.cable_options.screened}</span>
                        </div> : ""}
                        {data.cable_options.sheath != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>Sheath</strong>
                            <span>{data.cable_options.sheath}</span>
                        </div> : ""}
                        {data.cable_options.swa != null 
                        ? 
                        <div className="product-attribute-row">
                            <strong>SWA</strong>
                            <span>{data.cable_options.swa}</span>
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