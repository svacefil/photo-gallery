import { motion } from 'framer-motion';
import './Bio.css';

function Bio() {
    return (
        <div className="bio-page">
            <div className="container">
                <div className="bio-content">
                    <motion.div
                        className="bio-image-container"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bio-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                                alt="Libor Sváček"
                                className="bio-image"
                            />
                            <div className="bio-image-accent" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="bio-text"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="bio-label">About the Photographer</span>
                        <h1 className="bio-title font-display">
                            Libor<br />
                            <span className="text-gradient">Sváček</span>
                        </h1>

                        <div className="bio-description">
                            <p>
                                For over two decades, I have dedicated myself to capturing the
                                essence of live music and cultural events. Based in the historic
                                town of Český Krumlov, my work primarily focuses on the
                                renowned Mezinárodní hudební festival Český Krumlov
                                (International Music Festival Český Krumlov).
                            </p>

                            <p>
                                My photography philosophy centers on preserving the emotional
                                intensity of live performances—the anticipation before the first
                                note, the communion between artist and audience, and those
                                fleeting moments of pure artistic expression that make live
                                music transcendent.
                            </p>

                            <p>
                                Working with available light and maintaining an unobtrusive
                                presence, I strive to document these events authentically while
                                creating images that convey the atmosphere and energy of each
                                unique performance.
                            </p>
                        </div>

                        <div className="bio-stats">
                            <div className="stat">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Events Covered</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">50K+</span>
                                <span className="stat-label">Photos Captured</span>
                            </div>
                        </div>

                        <div className="bio-cta">
                            <a href="mailto:box@fotosvacek.cz" className="btn btn-primary">
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Bio;
