import ServiceCard from "./common/ServiceCard";
import services from "../assets/file/services.json";

const Services = () => {

    return(
        <div className="page-wrapper">
            <div className="page-header services-header">
                <h1>Services</h1>
            </div>
            <div className="articles">
                <article>
                    <p>Cablemakers can satisfy all your cable needs with a range of products and services.</p>
                    <section className="services-list">
                        <div className="service">
                            <img src="../../../service-icon/icon-cable-lengths.png"/>
                            <p>Ability to cut to size cable lengths</p>
                        </div>
                        <div className="service">
                            <img src="../../../service-icon/icon-same-day-dispatch.png"/>
                            <p>Same Day Dispatch</p>
                        </div>
                        <div className="service">
                            <img src="../../../service-icon/icon-cable-distribution.png"/>
                            <p>Customised Cable Distribution</p>
                        </div>
                        <div className="service">
                            <img src="../../../service-icon/icon-direct-to-site.png"/>
                            <p>Direct To Site</p>
                        </div>
                        <div className="service">
                            <img src="../../../service-icon/icon-project-cable-management.png"/>
                            <p>Project Cable Management</p>
                        </div>
                        <div className="service">
                            <img src="../../../service-icon/icon-load-delivery.png"/>
                            <p>Load Delivery</p>
                        </div>
                        <div className="service">
                            <img src="../../../service-icon/icon-source-cable-configuration.png"/>
                            <p>Source Any Cable Configuration</p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default Services;