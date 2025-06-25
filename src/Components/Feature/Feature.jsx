import './feature.css';

// eslint-disable-next-line react/prop-types
function Feature({ features}) {
    return (
        <section id="feature" data-testid="feature" className="section-p1 p-4">
            {
                // eslint-disable-next-line react/prop-types
                features.map((feature) => (
                        <div key={ feature.key } className="fe-box">
                            <img src={ feature.imgSrc } alt={ feature.altText } />
                            <h6>{feature.altText}</h6>
                        </div>
                    )
                )
            }
        </section>
    );
}

export default Feature
