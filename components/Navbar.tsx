
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded-sm">
            <i className="fas fa-hard-hat text-white text-xl"></i>
          </div>
          <span className={`text-2xl font-extrabold uppercase tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Apex<span className="text-orange-600">Pro</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'Services', 'Projects', 'AI Estimator', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={`font-semibold text-sm uppercase tracking-widest hover:text-orange-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 font-bold text-sm uppercase tracking-widest rounded-sm transition-all transform hover:scale-105">
            Get Quote
          </button>
        </div>

        <button className="md:hidden text-2xl text-orange-600">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
