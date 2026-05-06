import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DogGallery } from './pages/DogGallery';
import { CatGallery } from './pages/CatGallery';

// Home component (can be in the same file for this small example)
function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-black text-blue-600 mb-4">Welcome to the Pet App!</h1>
      <p className="text-xl text-gray-600">Click the links above to navigate without reloading the page.</p>
    </div>
  );
}

export default function App() {
  return (
    // 1. BrowserRouter MUST wrap the entire application
    <BrowserRouter>
      
      {/* 2. Navigation - The Link component REPLACES the traditional <a href> tag */}
      <nav className="p-6 bg-zinc-800 text-white flex gap-6 text-lg font-bold shadow-md">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/dogs" className="hover:text-blue-400 transition-colors">Dog Gallery</Link>
		<Link to="/cats">Cat Gallery</Link>
      </nav>

      {/* 3. Routes - Defining WHICH component is shown at WHICH URL */}
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogGallery />} />
		  <Route path="/cats" element={<CatGallery />} />
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}