import { motion } from 'framer-motion';
import './Gallery.css';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

function Gallery({ photos, onPhotoClick }) {
    return (
        <motion.div
            className="gallery"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {photos.map((photo, index) => (
                <motion.div
                    key={photo.id}
                    className="gallery-item"
                    variants={item}
                    onClick={() => onPhotoClick(index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={photo.src}
                        alt={photo.title}
                        className="gallery-image"
                        loading="lazy"
                    />
                    <div className="gallery-overlay">
                        <h3 className="gallery-title">{photo.title}</h3>
                        {photo.category && (
                            <span className="gallery-category">{photo.category}</span>
                        )}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Gallery;
