
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AIEstimator from './components/AIEstimator';
import { SERVICES, PROJECTS } from './constants';
import { Project, Service } from './types';

const Modal: React.FC<{ project: Project; isOpen: boolean; onClose: () => void }> = ({ project, isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onTransitionEnd={onAnimationEnd}
      onClick={onClose}
    >
      <div 
        className={`bg-white w-full max-w-2xl rounded-sm overflow-hidden shadow-2xl relative transition-all duration-300 ease-out transform ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-100 hover:bg-orange-600 hover:text-white rounded-full transition-all flex items-center justify-center"
          aria-label="Close modal"
        >
          <i className="fas fa-times"></i>
        </button>
        
        <div className="grid md:grid-cols-2">
          <div className="overflow-hidden">
             <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-8">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-2 block">{project.category}</span>
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">{project.title}</h3>
            <div className="w-12 h-1 bg-orange-600 mb-6"></div>
            <p className="text-slate-600 leading-relaxed mb-8">
              {project.description}
            </p>
            <button 
              onClick={onClose}
              className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-3 uppercase tracking-widest transition-all rounded-sm"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="group p-8 border border-slate-100 bg-slate-50 hover:bg-slate-900 transition-all duration-500 rounded-sm">
      <div className="relative inline-block mb-6">
        <div className="w-16 h-16 bg-white shadow-lg flex items-center justify-center rounded-sm group-hover:bg-orange-600 transition-colors peer">
          <i className={`fas ${service.icon} text-2xl text-orange-600 group-hover:text-white`}></i>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-slate-800 text-white text-xs font-bold uppercase tracking-widest rounded-sm opacity-0 invisible translate-y-1 peer-hover:opacity-100 peer-hover:visible peer-hover:translate-y-0 transition-all duration-200 z-10 whitespace-nowrap shadow-xl">
          {service.title}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors uppercase tracking-tight">
        {service.title}
      </h3>
      <p className="text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed">
        {service.description}
      </p>
      <div className="mt-6 flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-widest cursor-pointer group-hover:text-white">
        Learn More <i className="fas fa-arrow-right text-xs"></i>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541913066827-2bb33b70a6a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Construction" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
              Building <span className="text-orange-600">Bridges</span> <br /> 
              to the future
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-xl border-l-4 border-orange-600 pl-6">
              Precision. Power. Performance. We transform blueprints into landmarks with uncompromising quality and innovative engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 font-bold uppercase tracking-widest rounded-sm transition-all shadow-xl hover:-translate-y-1 inline-block">
                Explore Projects
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 font-bold uppercase tracking-widest rounded-sm transition-all hover:-translate-y-1 inline-block">
                Our Services
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 w-full bg-orange-600/90 py-8 backdrop-blur-sm hidden md:block">
          <div className="container mx-auto px-6 flex justify-between items-center text-white">
            <div className="text-center px-4">
              <div className="text-3xl font-black">25+</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Years Excellence</div>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center px-4">
              <div className="text-3xl font-black">450+</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Projects Completed</div>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center px-4">
              <div className="text-3xl font-black">120+</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Expert Engineers</div>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-center px-4">
              <div className="text-3xl font-black">100%</div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-80">Safety Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-orange-600 font-bold uppercase tracking-[0.3em] mb-4 text-sm">Our Expertise</h4>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                Solutions built on <br /> <span className="text-orange-600">Solid Foundations</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm">
              We provide end-to-end construction services that combine traditional craftsmanship with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
              Featured <span className="text-orange-600">Work</span>
            </h2>
            <div className="w-24 h-2 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="relative group overflow-hidden rounded-sm shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-2">{project.category}</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{project.title}</h3>
                  <button 
                    onClick={() => handleOpenModal(project)}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 uppercase tracking-widest text-xs transition-all self-start flex items-center gap-2 rounded-sm transform hover:scale-105 active:scale-95"
                  >
                    View Details <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-4 font-bold uppercase tracking-widest transition-all">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {selectedProject && (
        <Modal 
          project={selectedProject} 
          isOpen={isModalOpen}
          onClose={handleCloseModal} 
        />
      )}

      <AIEstimator />

      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8">
                Ready to build <br /> <span className="text-orange-600">something Great?</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10">
                Contact us today for a consultation on your upcoming project. Our team of experts is ready to help you plan, design, and construct your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded text-orange-600 shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-tight">Main Office</h4>
                    <p className="text-slate-500">123 Steel Structure Ave, Industrial District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded text-orange-600 shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-tight">Call Us</h4>
                    <p className="text-slate-500">+1 (800) BUILD-PRO</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded text-orange-600 shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-tight">Email</h4>
                    <p className="text-slate-500">contact@apexpro.build</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-sm shadow-xl border border-slate-100">
              <form className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-orange-600 outline-none" placeholder="John Doe" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-orange-600 outline-none" placeholder="john@example.com" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Project Type</label>
                  <select className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-orange-600 outline-none">
                    <option>Residential Construction</option>
                    <option>Commercial Building</option>
                    <option>Industrial Facility</option>
                    <option>Consultation Only</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                  <textarea className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-orange-600 outline-none min-h-[150px]" placeholder="Tell us about your project..."></textarea>
                </div>
                <div className="col-span-2">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 uppercase tracking-[0.2em] transition-all shadow-lg hover:shadow-orange-200">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded-sm">
                  <i className="fas fa-hard-hat text-white text-xl"></i>
                </div>
                <span className="text-2xl font-extrabold uppercase tracking-tighter">
                  Apex<span className="text-orange-600">Pro</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                Leading the industry with excellence, safety, and innovation. We are committed to building high-quality infrastructures that stand the test of time.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded-full hover:bg-orange-600 hover:border-orange-600 transition-all">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-orange-600 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-orange-600 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-orange-600 transition-colors">Projects</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 Apex Construction Pro Inc. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span>Licence #12345678</span>
              <span>ISO 9001 Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
