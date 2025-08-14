/* eslint-disable react/prop-types */
import './feature.css';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'; // ícone de clique

function Feature({ features }) {
    const navigate = useNavigate();

    return (
        <section id="feature" data-testid="feature" className="section-p1 p-4">
            {features.map((feature) => (
                <div
                    key={feature.key}
                    className={`fe-box cursor-pointer transition-transform duration-300`}
                    onClick={() => navigate(feature.route)}
                >
                    <div className="fe-img-wrapper">
                        <img src={feature.imgSrc} alt={feature.altText} />
                    </div>
                    <h6>{feature.altText}</h6>
                    <p className="fe-description">{feature.description}</p>
                    <div className="fe-more">
                        <span>Ver mais</span>
                        <FiArrowRight className="fe-arrow" />
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Feature;
