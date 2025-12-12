import { useState } from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import Lightbox from '../components/Lightbox';
import './Content.css';

const photos = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
        title: 'Pavel Steidl – kytara',
        category: 'Concert',
        description: 'Mezinárodní hudební festival Český Krumlov - Maškarní sál',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
        title: 'Francisextet',
        category: 'Music Festival',
        description: 'Jazz ensemble performance',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
        title: 'Pocta Leonardu',
        category: 'Tribute Concert',
        description: 'A tribute to Leonard Cohen',
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        title: 'Boris Andriano',
        category: 'Concert',
        description: 'Live performance at the festival',
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
        title: 'Cigánski Diabli',
        category: 'World Music',
        description: 'Energetic folk performance',
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
        title: 'Orchestra Performance',
        category: 'Classical',
        description: 'Symphony orchestra at the castle',
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
        title: 'Piano Recital',
        category: 'Classical',
        description: 'Solo piano performance',
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
        title: 'String Quartet',
        category: 'Chamber Music',
        description: 'Intimate chamber performance',
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
        title: 'Festival Night',
        category: 'Event',
        description: 'Evening atmosphere at the festival',
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
        title: 'Vocal Performance',
        category: 'Opera',
        description: 'Soprano soloist on stage',
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1571974599782-87624638275e?w=800&q=80',
        title: 'Audience',
        category: 'Atmosphere',
        description: 'Festival attendees enjoying the music',
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
        title: 'Grand Piano',
        category: 'Instruments',
        description: 'Steinway in the concert hall',
    },
];

const categories = ['All', 'Concert', 'Music Festival', 'Classical', 'Event', 'Opera'];

function Content() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filteredPhotos =
        selectedCategory === 'All'
            ? photos
            : photos.filter((p) => p.category === selectedCategory);

    const handlePhotoClick = (index) => {
        setLightboxIndex(index);
    };

    const handleCloseLightbox = () => {
        setLightboxIndex(null);
    };

    const handlePrev = () => {
        setLightboxIndex((prev) =>
            prev === 0 ? filteredPhotos.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setLightboxIndex((prev) =>
            prev === filteredPhotos.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="content-page">
            <div className="container">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title font-display">Obsah</h1>
                    <p className="page-description">
                        Browse through my collection of concert and event photography
                    </p>
                </motion.div>

                <motion.div
                    className="category-filter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <Gallery photos={filteredPhotos} onPhotoClick={handlePhotoClick} />

                {lightboxIndex !== null && (
                    <Lightbox
                        photos={filteredPhotos}
                        currentIndex={lightboxIndex}
                        onClose={handleCloseLightbox}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                )}
            </div>
        </div>
    );
}

export default Content;
