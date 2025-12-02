import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Heart, ShoppingCart, User, Menu, X, Star, ArrowRight, Play, ChevronRight} from "lucide-react";

// Imported Page Components
import Home from './components/Home';
import Collection from './components/Collection';
import New from './components/New';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Profile from './components/Profile';

// Footer Pages (placeholders)
const Contact = () => <div className="p-8 text-center">📩 Contact Us Page</div>;
const TrackOrder = () => <div className="p-8 text-center">📦 Track Your Order Page</div>;
const Returns = () => <div className="p-8 text-center">↩️ Returns & Refunds Page</div>;

const About = () => <div className="p-8 text-center">ℹ️ About Us Page</div>;
const Careers = () => <div className="p-8 text-center">💼 Careers Page</div>;
const Blog = () => <div className="p-8 text-center">📝 Blog Page</div>;

const Privacy = () => <div className="p-8 text-center">🔒 Privacy Policy Page</div>;
const Terms = () => <div className="p-8 text-center">📃 Terms & Conditions Page</div>;
const Shipping = () => <div className="p-8 text-center">🚚 Shipping Info Page</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/new" element={<New />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        {/* Footer Routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </Router>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 h-20 shadow">
        {/* Left: Menu button */}
        <div className="flex items-center gap-8">
          <Menu
            className="w-7 h-7 text-gray-700 hover:text-black cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/logo1.png" alt="Brand Logo" className="w-[120px] h-auto object-contain" />
        </div>

        {/* Right: Icons */}
        <div className="flex justify-around w-[200px] items-center gap-6 text-gray-700">
          <Link to="/favorites">
            <Heart className="w-6 h-6 hover:text-red-500 transition cursor-pointer" />
          </Link>
          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 hover:text-blue-500 transition cursor-pointer" />
          </Link>
          <Link to="/profile">
            <User className="w-6 h-6 hover:text-green-500 transition cursor-pointer" />
          </Link>
        </div>
      </nav>

      {/* Sidebar Overlay
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )} */}

     {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-6 space-y-4">
          {[
            { name: 'Home', path: '/' },
            { name: 'Collection', path: '/collection' },
            { name: 'New Arrivals', path: '/new' },
            { name: 'Sale', path: '/sale' },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => {
                handleNavigation(link.path);
                setSidebarOpen(false);
              }}
              className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-purple-50 transition-all group text-left"
            >
              <span className="font-medium text-gray-700 group-hover:text-gray-900">{link.name}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default App;
