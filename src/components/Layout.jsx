import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Layout.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/content', label: 'Obsah' },
    { path: '/albums', label: 'Alba' },
    { path: '/contact', label: 'Kontakt' },
    { path: '/bio', label: 'Bio' },
];

function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="layout">
            <header className="header glass">
                <div className="header-content">
                    <NavLink to="/" className="logo">
                        <span className="logo-text font-display">Libor Sváček</span>
                    </NavLink>

                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="main">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Libor Sváček. All rights reserved.
                        </p>
                        <a href="mailto:box@fotosvacek.cz" className="footer-email">
                            box@fotosvacek.cz
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
