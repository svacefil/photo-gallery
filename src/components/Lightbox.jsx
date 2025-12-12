import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Lightbox.css';

function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }) {
    const photo = photos[currentIndex];

    const handleKeyDown = useCallback(
        (e) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    onPrev();
                    break;
                case 'ArrowRight':
                    onNext();
                    break;
            }
        },
        [onClose, onPrev, onNext]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown]);

    return (
        <AnimatePresence>
            <motion.div
                className="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <div className="lightbox-backdrop" />

                <motion.div
                    className="lightbox-content"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={photo.src}
                        alt={photo.title}
                        className="lightbox-image"
                    />

                    <div className="lightbox-info">
                        <h2 className="lightbox-title">{photo.title}</h2>
                        {photo.description && (
                            <p className="lightbox-description">{photo.description}</p>
                        )}
                        <span className="lightbox-counter">
                            {currentIndex + 1} / {photos.length}
                        </span>
                    </div>
                </motion.div>

                <button
                    className="lightbox-close"
                    onClick={onClose}
                    aria-label="Close lightbox"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <button
                    className="lightbox-nav lightbox-prev"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    aria-label="Previous photo"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <button
                    className="lightbox-nav lightbox-next"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    aria-label="Next photo"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </motion.div>
        </AnimatePresence>
    );
}

export default Lightbox;
