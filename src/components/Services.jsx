import ServiceCard from "./common/ServiceCard";
import services from "../assets/file/services.json";
import serviceimage from "../assets/image/services.jpeg";

const Services = () => {

    return(
        <div className="page-wrapper">
            <div className="page-header services-header" data-header-name="Services">
                <h1>Services</h1>
            </div>
            <div className="articles">
                <article>
                    <p className="text-center">Cablemakers can satisfy all your cable needs with a range of products and services.</p>
                    <div className="service-list">
                        {services.map((service, key) => {
                            return(
                                <ServiceCard key={key} service={service} />
                            )
                        })}
                    </div>
                    <div className="article-image article-image-dropshadow">
                        <img src={serviceimage} />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Services;