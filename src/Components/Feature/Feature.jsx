/* eslint-disable react/prop-types */
import './feature.css';
import { useNavigate } from 'react-router-dom';

function Feature({ features }) {
    const navigate = useNavigate();

    return (
        <section id="feature" data-testid="feature" className="section-p1 p-4">
            {
                features.map((feature) => (
                    <div
                        key={feature.key}
                        className="fe-box cursor-pointer transition duration-300 hover:scale-105"
                        onClick={() => navigate(feature.route)}
                    >
                        <img src={feature.imgSrc} alt={feature.altText} />
                        <h6>{feature.altText}</h6>
                    </div>
                ))
            }
        </section>
    );
}

export default Feature;
