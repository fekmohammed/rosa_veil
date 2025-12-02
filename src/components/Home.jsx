// import React, { useState, useEffect } from 'react';
// import { Heart, ShoppingCart, User, Menu, X, Star, ArrowRight, Play, ChevronRight } from "lucide-react";

// const Home = () => {
//   const [activeCategory, setActiveCategory] = useState('Hijab');
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Product data
//   const latestProducts = [
//     { id: 1, img: '/products/item1.jpeg', name: 'Elegant Jilbab', color: 'Beige', qty: 8, price: 79, rating: 4.8, reviews: 24 },
//     { id: 2, img: '/products/item2.jpeg', name: 'Classic Jilbab', color: 'Gold', qty: 6, price: 89, rating: 4.9, reviews: 31 },
//     { id: 3, img: '/products/item3.jpeg', name: 'Premium Hijab', color: 'Navy', qty: 10, price: 45, rating: 4.7, reviews: 18 },
//     { id: 4, img: '/products/item4.jpeg', name: 'Chic Hijab', color: 'Olive', qty: 7, price: 55, rating: 4.8, reviews: 22 },
//     { id: 5, img: '/products/item5.jpeg', name: 'Luxe Collection', color: 'Rose', price: 15, rating: 4.6, reviews: 15 },
//   ];

//   const sampleProducts = [
//     { id: 6, img: '/products/item6.jpeg', name: 'Silk Hijab Premium', price: 18, category: 'Hijab', isNew: true },
//     { id: 7, img: '/products/item7.jpeg', name: 'Cotton Blend Hijab', price: 20, category: 'Hijab' },
//     { id: 8, img: '/products/item8.jpeg', name: 'Designer Hijab', price: 22, category: 'Hijab', isBestseller: true },
//     { id: 9, img: '/products/item9.jpg', name: 'Royal Abaya', price: 55, category: 'Abaya', isNew: true },
//     { id: 10, img: '/products/item10.jpg', name: 'Modern Abaya', price: 60, category: 'Abaya' },
//     { id: 11, img: '/products/item11.jpg', name: 'Premium Abaya', price: 75, category: 'Abaya', isBestseller: true },
//     { id: 12, img: '/products/item12.webp', name: 'Chic Khimar', price: 30, category: 'Khimar' },
//     { id: 13, img: '/products/item13.jpeg', name: 'Elegant Khimar', price: 28, category: 'Khimar', isNew: true },
//     { id: 14, img: '/products/item14.jpeg', name: 'Stylish Khimar', price: 35, category: 'Khimar' },
//   ];

//   const filteredSamples = sampleProducts.filter(product => product.category === activeCategory);



//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50/50 to-purple-50/30">




//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="relative min-h-screen flex items-center overflow-hidden">
//           <div className="absolute inset-0">
//             <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-purple-900/30 to-transparent z-10" />
//             <img
//               src="/BACKGROUND.webp"
//               alt="Hero Background"
//               className="w-full h-full object-cover scale-105"
//               style={{ 
//                 animation: 'subtle-zoom 8s ease-in-out infinite alternate',
//               }}
//             />
//           </div>

//           <div className="relative z-20 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="text-white space-y-8">
//               <div className="space-y-6">
//                 <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
//                   Graceful
//                   <span className="block bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
//                     Modesty
//                   </span>
//                 </h1>
//                 <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
//                   Discover timeless elegance with our exclusive collection of hijabs, abayas, and khimars crafted for the modern Muslim woman.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button 
//                   onClick={() => handleNavigation('/collection')}
//                   className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-xl"
//                 >
//                   Explore Collection
//                 </button>
//                 <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 justify-center">
//                   <Play className="w-5 h-5" />
//                   Watch Story
//                 </button>
//               </div>
//             </div>

//             <div className="hidden lg:block">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-rose-300/20 to-purple-300/20 rounded-3xl blur-3xl" />
//                 <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
//                   <div className="text-center text-white space-y-4">
//                     <div className="text-4xl font-bold">50+</div>
//                     <div className="text-lg">Exclusive Designs</div>
//                     <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//                     <div className="text-sm text-gray-200">New arrivals every week</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Latest Collection */}
//         <section className="py-20 px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center justify-between mb-12">
//               <div>
//                 <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Collection</h2>
//                 <p className="text-gray-600">Handpicked pieces for the discerning you</p>
//               </div>
//               <button
//                 onClick={() => handleNavigation('/collection')}
//                 className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
//               >
//                 View All
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>

//             <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//               {latestProducts.map((product, index) => (
//                 <div
//                   key={product.id}
//                   className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
//                   style={{ 
//                     animationDelay: `${index * 100}ms`,
//                     animation: 'fadeInUp 0.6s ease-out forwards'
//                   }}
//                 >
//                   <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
//                     <div className="w-full h-full bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center text-gray-400">
//                       <div className="text-center">
//                         <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
//                           <Heart className="w-8 h-8 text-gray-300" />
//                         </div>
//                         <div className="text-sm font-medium">{product.name}</div>
//                       </div>
//                     </div>

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                     <div className="absolute top-4 left-4 space-y-2">
//                       <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
//                         <Star className="w-3 h-3 text-yellow-400 fill-current" />
//                         {product.rating}
//                       </div>
//                     </div>

//                     <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                       <button className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-50 transition-colors">
//                         Quick Add
//                       </button>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
//                       {product.name}
//                     </h3>
//                     <p className="text-sm text-gray-500">{product.color}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-xl font-bold text-gray-900">${product.price}</span>
//                       <button className="p-2 hover:bg-rose-50 rounded-full transition-colors">
//                         <Heart className="w-4 h-4 text-gray-400 hover:text-rose-500" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
//           <div className="max-w-7xl mx-auto px-8 text-center">
//             <div className="mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 We are a modest fashion brand dedicated to empowering women through 
//                 quality, comfort, and timeless elegance. Every piece tells a story of 
//                 craftsmanship and care.
//               </p>
//             </div>

//             <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
//               {[
//                 { title: 'Premium Quality', desc: 'Finest fabrics sourced globally', color: 'from-rose-500 to-pink-500' },
//                 { title: 'Timeless Design', desc: 'Classic styles that never fade', color: 'from-purple-500 to-indigo-500' },
//                 { title: 'Perfect Fit', desc: 'Sizes for every body type', color: 'from-blue-500 to-cyan-500' },
//               ].map((card, index) => (
//                 <div
//                   key={index}
//                   className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
//                 >
//                   <div className={`w-full h-full bg-gradient-to-br ${card.color} flex items-center justify-center`}>
//                     <div className="text-center text-white p-8">
//                       <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
//                         <Star className="w-8 h-8" />
//                       </div>
//                       <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
//                       <p className="text-white/90">{card.desc}</p>
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Shop by Category */}
//         <section className="py-20 px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
//               <p className="text-gray-600">Find your perfect style</p>
//             </div>

//             <div className="flex justify-center mb-12">
//               <div className="inline-flex bg-gray-100 rounded-full p-1">
//                 {["Hijab", "Abaya", "Khimar"].map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setActiveCategory(cat)}
//                     className={`px-8 py-3 rounded-full font-semibold transition-all ${
//                       activeCategory === cat
//                         ? "bg-black text-white shadow-lg"
//                         : "text-gray-600 hover:text-gray-900"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {filteredSamples.slice(0, 8).map((product, index) => (
//                 <div
//                   key={product.id}
//                   className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
//                   style={{ 
//                     animationDelay: `${index * 50}ms`,
//                     animation: 'fadeInUp 0.6s ease-out forwards'
//                   }}
//                 >
//                   <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5] bg-gray-100 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
//                     <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
//                       <div className="text-center">
//                         <ShoppingCart className="w-12 h-12 mx-auto mb-2" />
//                         <div className="text-sm font-medium">{product.name}</div>
//                       </div>
//                     </div>

//                     {product.isNew && (
//                       <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
//                         NEW
//                       </div>
//                     )}

//                     {product.isBestseller && (
//                       <div className="absolute top-3 left-3 px-2 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full">
//                         BESTSELLER
//                       </div>
//                     )}

//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <button className="px-6 py-3 bg-white text-black font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <h3 className="font-semibold text-gray-900">{product.name}</h3>
//                     <div className="flex items-center justify-between">
//                       <span className="text-lg font-bold text-gray-900">${product.price}</span>
//                       <button className="p-1 hover:bg-rose-50 rounded-full transition-colors">
//                         <Heart className="w-4 h-4 text-gray-400 hover:text-rose-500" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Newsletter */}
//         <section className="py-20 bg-gradient-to-r from-rose-600 to-purple-600">
//           <div className="max-w-4xl mx-auto px-8 text-center text-white">
//             <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
//             <p className="text-xl mb-8 opacity-90">
//               Subscribe to our newsletter for exclusive offers and new arrivals
//             </p>
//             <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
//               />
//               <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-semibold">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-black text-white py-16">
//           <div className="max-w-7xl mx-auto px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//               <div>
//                 <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
//                   ROSA VEIL
//                 </div>
//                 <p className="text-gray-400 mb-6">
//                   Crafting modest fashion with elegance and grace for the modern Muslim woman.
//                 </p>
//                 <div className="flex gap-4">
//                   {['IG', 'FB', 'TT'].map((social, index) => (
//                     <button
//                       key={social}
//                       className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-sm font-semibold"
//                     >
//                       {social}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold mb-6">Customer Care</h3>
//                 <ul className="space-y-3 text-gray-400">
//                   <li><button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Contact Us</button></li>
//                   <li><button onClick={() => handleNavigation('/track-order')} className="hover:text-white transition-colors">Track Order</button></li>
//                   <li><button onClick={() => handleNavigation('/returns')} className="hover:text-white transition-colors">Returns</button></li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold mb-6">Company</h3>
//                 <ul className="space-y-3 text-gray-400">
//                   <li><button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">About Us</button></li>
//                   <li><button onClick={() => handleNavigation('/careers')} className="hover:text-white transition-colors">Careers</button></li>
//                   <li><button onClick={() => handleNavigation('/blog')} className="hover:text-white transition-colors">Blog</button></li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold mb-6">Legal</h3>
//                 <ul className="space-y-3 text-gray-400">
//                   <li><button onClick={() => handleNavigation('/privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
//                   <li><button onClick={() => handleNavigation('/terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
//                   <li><button onClick={() => handleNavigation('/shipping')} className="hover:text-white transition-colors">Shipping Info</button></li>
//                 </ul>
//               </div>
//             </div>

//             <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//               <p>© 2025 ROSA VEIL. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </main>

//       <style dangerouslySetInnerHTML={{
//         __html: `
//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes subtle-zoom {
//             0% { transform: scale(1.05); }
//             100% { transform: scale(1.1); }
//           }
//         `
//       }} />
//     </div>)}
//     export default Home;













// old version
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Search,Heart, ShoppingCart, User, Menu, X, Star, ArrowRight, Play, ChevronRight } from "lucide-react";

const Home = () => {
  // Product data
  const latestProducts = [
    { id: 1, img: '/products/item1.jpeg', name: 'Elegant Jilbab', color: 'Beige', qty: 8, price: 79 },
    { id: 2, img: '/products/item2.jpeg', name: 'Classic Jilbab', color: 'Gold', qty: 6, price: 89 },
    { id: 3, img: '/products/item3.jpeg', name: 'Premium Hijab', color: 'Navy', qty: 10, price: 45 },
    { id: 4, img: '/products/item4.jpeg', name: 'Chic Hijab', color: 'Olive', qty: 7, price: 55 },
    { id: 5, img: '/products/item5.jpeg', name: 'Sample 1', price: 15 },
  ];

  // Shop Samples data with categories
const sampleProducts = [
    { id: 6, img: '/products/item6.jpeg', name: 'Silk Hijab Premium', price: 18, category: 'Hijab', isNew: true },
    { id: 7, img: '/products/item7.jpeg', name: 'Cotton Blend Hijab', price: 20, category: 'Hijab' },
    { id: 8, img: '/products/item8.jpeg', name: 'Designer Hijab', price: 22, category: 'Hijab', isBestseller: true },
    { id: 9, img: '/products/item9.jpg', name: 'Royal Abaya', price: 55, category: 'Abaya', isNew: true },
    { id: 10, img: '/products/item10.jpg', name: 'Modern Abaya', price: 60, category: 'Abaya' },
    { id: 11, img: '/products/item11.jpg', name: 'Premium Abaya', price: 75, category: 'Abaya', isBestseller: true },
    { id: 12, img: '/products/item12.webp', name: 'Chic Khimar', price: 30, category: 'Khimar' },
    { id: 13, img: '/products/item13.jpeg', name: 'Elegant Khimar', price: 28, category: 'Khimar', isNew: true },
    { id: 14, img: '/products/item14.jpeg', name: 'Stylish Khimar', price: 35, category: 'Khimar' },
  ];

  const [activeCategory, setActiveCategory] = useState('Hijab');
  const filteredSamples = sampleProducts.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section className="p-8 space-y-16">

      {/* Hero Section */}
      <div className="relative rounded-lg shadow overflow-hidden">
        <img
          src="BACKGROUND.webp"
          alt="Fashion Background"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute text-center flex flex-col items-center top-1/2 right-8 transform -translate-y-1/2 bg-white/90 p-8 rounded-xl shadow-lg max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Graceful Modesty, Timeless Elegance
          </h1>
          <p className="text-gray-700 mb-6">
            Step into a world of refined style with our exclusive hijabs and abayas for every occasion.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800">
            Go to Shop
          </Button>
        </div>
      </div>

      {/* Latest Collection */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Collection</h2>
          <Link
            to="/collection"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-5 md:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              style={{ height: '350px' }}
            >
              {/* Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent 
                transition-all duration-500 group-hover:h-full"
              ></div>

              {/* Details */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 
                group-hover:opacity-100 transition-opacity duration-500"
              >
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-200">{product.color}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  <button className="bg-white text-black px-3 py-1 rounded-lg text-xs hover:bg-gray-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>






      <section className="relative py-24 bg-white overflow-hidden">
        {/* About text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">About Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are a modest fashion brand focused on quality, comfort, and elegance.
            From daily wear to special occasions, we craft each piece with love and care.
          </p>
        </div>

        {/* Card wrapper */}
        <div className="relative flex justify-center gap-8">
          {/* Left card */}
          <div
            className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg mt-8 bg-cover bg-center transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            style={{
              backgroundImage: "url('/products/item9.jpg')",
              backgroundPosition: "left center",
            }}
          ></div>

          {/* Middle card */}
          <div
            className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl z-10"
            style={{
              backgroundImage: "url('/products/item11.jpg')",
              backgroundPosition: "center center",
            }}
          ></div>

          {/* Right card */}
          <div
            className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg mt-8 bg-cover bg-center transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            style={{
              backgroundImage: "url('/products/item12.webp')",
              backgroundPosition: "right center",
            }}
          ></div>
        </div>
      </section>


















      {/* Shop Samples with Tabs */}
      <section className="py-20 px-8">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
      <p className="text-gray-600">Find your perfect style</p>
    </div>

    {/* Category Tabs */}
    <div className="flex items-center justify-between mb-12">
      <div className="inline-flex bg-gray-100 rounded-full p-1">
        {["Hijab", "Abaya", "Khimar"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeCategory === cat
                ? "bg-black text-white shadow-lg"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <Link
            to="/shop"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            View All →
          </Link>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredSamples.slice(0, 8).map((product, index) => (
        <div
          key={product.id}
          className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
          style={{ 
            animationDelay: `${index * 50}ms`,
            animation: 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          {/* Product Card */}
          <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5] bg-gray-100 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
            
            {/* If product has image, show it, otherwise show placeholder */}
            {product.img ? (
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-sm font-medium">{product.name}</div>
                </div>
              </div>
            )}

            {/* Badges */}
            {product.isNew && (
              <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                NEW
              </div>
            )}
            {product.isBestseller && (
              <div className="absolute top-3 left-3 px-2 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full">
                BESTSELLER
              </div>
            )}

            {/* Hover Add to Cart */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              <button className="p-1 hover:bg-rose-50 rounded-full transition-colors">
                <Heart className="w-4 h-4 text-gray-400 hover:text-rose-500" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Us */}
      {/* <section className="relative py-20 bg-white overflow-hidden">
  <div className="text-center relative z-10 mb-12">
    <h2 className="text-3xl font-bold">About Us</h2>
    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
      We are a modest fashion brand focused on quality, comfort, and elegance.
      From daily wear to special occasions, we craft each piece with love and care.
    </p>
  </div>

  <div className="relative flex justify-center gap-6">
    

    <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
      <img
        src="background.jpg"
        alt="slice left"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "left center" }}
      />
    </div>

    <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg -mt-8">
      <img
        src="background.jpg"
        alt="slice center"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center" }}
      />
    </div>

    <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
      <img
        src="background.jpg"
        alt="slice right"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "right center" }}
      />
    </div>
  </div>
</section> */}















      {/* Footer */}

      {/* Footer */}
      <footer className="relative bg-black text-white py-10 -mb-8 -ml-8 -mr-8">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/BACKGROUND.webp" // replace with your image path
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" /> {/* dark overlay */}
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 flex flex-col items-center">
          {/* Logo */}
          <h2 className="text-3xl font-bold mb-8">ROSA VEIL</h2>

          {/* Links in one row */}
          <div className="flex flex-wrap justify-center gap-16">
            {/* CUSTOMER CARE */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CUSTOMER CARE</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                <li><Link to="/track-order" className="hover:text-gray-300">Track Your Order</Link></li>
                <li><Link to="/returns" className="hover:text-gray-300">Returns & Refunds</Link></li>
              </ul>
            </div>

            {/* GET TO KNOW US */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">GET TO KNOW US</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
              </ul>
            </div>

            {/* STORE POLICIES */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">STORE POLICIES</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
                <li><Link to="/shipping" className="hover:text-gray-300">Shipping Info</Link></li>
              </ul>
            </div>

            {/* GET SOCIAL */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">GET SOCIAL</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">TikTok</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom note */}
          <p className="mt-10 text-sm text-gray-400">
            © 2025 ROSA VEIL. All Rights Reserved.
          </p>
        </div>
      </footer>



    </section>
  );
};

export default Home;
