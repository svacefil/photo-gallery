import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Albums.css';

const albums = [
    {
        id: 1,
        title: 'Mezinárodní hudební festival Český Krumlov 2018',
        cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
        count: 45,
    },
    {
        id: 2,
        title: 'Pavel Steidl Concert',
        cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
        count: 23,
    },
    {
        id: 3,
        title: 'Tribute to Leonard',
        cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
        count: 38,
    },
    {
        id: 4,
        title: 'Boris Andriano Live',
        cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        count: 31,
    },
    {
        id: 5,
        title: 'Francisextet Jazz Session',
        cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
        count: 27,
    },
    {
        id: 6,
        title: 'Cigánski Diabli',
        cover: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
        count: 19,
    },
];

function Albums() {
    return (
        <div className="albums-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title font-display">Alba</h1>
                    <p className="page-description">
                        Collections from concerts, festivals, and special events
                    </p>
                </motion.div>

                <div className="albums-grid">
                    {albums.map((album, index) => (
                        <motion.div
                            key={album.id}
                            className="album-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <Link to="/content" className="album-link">
                                <div className="album-cover">
                                    <img src={album.cover} alt={album.title} />
                                    <div className="album-overlay">
                                        <span className="album-count">{album.count} photos</span>
                                    </div>
                                </div>
                                <div className="album-info">
                                    <h3 className="album-title">{album.title}</h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Albums;
