import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Content from './pages/Content';
import Albums from './pages/Albums';
import Contact from './pages/Contact';
import Bio from './pages/Bio';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="content" element={<Content />} />
          <Route path="albums" element={<Albums />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bio" element={<Bio />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
