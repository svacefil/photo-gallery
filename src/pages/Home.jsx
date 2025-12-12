import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-gradient" />
                    <img
                        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80"
                        alt="Concert photography"
                        className="hero-image"
                    />
                </div>

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.span
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Professional Photography
                    </motion.span>

                    <motion.h1
                        className="hero-title font-display"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Libor<br />
                        <span className="text-gradient">Sváček</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        Capturing moments at the Mezinárodní hudební festival Český Krumlov
                        and beyond. Concert, event, and artistic photography.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <Link to="/content" className="btn btn-primary">
                            View Gallery
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get in Touch
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span>Scroll</span>
                    <div className="scroll-line" />
                </motion.div>
            </section>

            <section className="featured section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title font-display">Featured Work</h2>
                        <p className="section-subtitle">
                            A selection of my recent photography projects
                        </p>
                    </motion.div>

                    <div className="featured-grid">
                        {featuredImages.map((img, index) => (
                            <motion.div
                                key={index}
                                className="featured-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <img src={img.src} alt={img.title} className="featured-image" />
                                <div className="featured-overlay">
                                    <h3>{img.title}</h3>
                                    <span>{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="featured-cta"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/content" className="btn btn-outline">
                            View All Photos →
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

const featuredImages = [
    {
        src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
        title: 'Pavel Steidl',
        category: 'Concert',
    },
    {
        src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
        title: 'Francisextet',
        category: 'Music Festival',
    },
    {
        src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
        title: 'Tribute to Leonard',
        category: 'Special Event',
    },
    {
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        title: 'Boris Andriano',
        category: 'Concert',
    },
];

export default Home;
