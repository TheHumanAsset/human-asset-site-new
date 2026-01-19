
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import { RESOURCES, SERVICES } from './constants';
import { Service } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const renderHome = () => (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Redefining <span className="text-indigo-600">Growth</span> Through Strategic Insight.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Consultancy in early startup strategy, accounting, HR, wellbeing, culture and career development advisory that just gets it. Bridge the gap between where you are and where you want to be.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-200"
                >
                  Explore Services
                </button>
                <button 
                  onClick={() => setActiveTab('resources')}
                  className="bg-white border border-slate-200 px-8 py-4 rounded-full text-lg font-bold text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Free Resources
                </button>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000 hidden lg:block">
              {/* Abstract decorative elements instead of random stock photo */}
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl rotate-3 opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-3xl -rotate-3 opacity-20 shadow-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="grid grid-cols-2 gap-4 w-full">
                     <div className="h-32 bg-white rounded-2xl shadow-lg animate-pulse"></div>
                     <div className="h-32 bg-indigo-50 rounded-2xl border border-indigo-100"></div>
                     <div className="h-32 bg-indigo-50 rounded-2xl border border-indigo-100"></div>
                     <div className="h-32 bg-white rounded-2xl shadow-lg animate-pulse delay-75"></div>
                   </div>
                </div>
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderResources = () => (
    <section className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Knowledge Resources</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tools and educational materials curated to empower your journey.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {RESOURCES.map(res => (
            <div key={res.id} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="md:w-1/3 h-48 md:h-auto relative bg-slate-100 flex items-center justify-center">
                <i className={`fas ${res.type === 'video' ? 'fa-play-circle text-indigo-200' : 'fa-globe text-indigo-200'} text-7xl`}></i>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 w-fit ${
                  res.type === 'video' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  {res.type}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{res.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{res.description}</p>
                <a 
                  href={res.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-bold text-sm inline-flex items-center hover:underline"
                >
                  Access Resource <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderServices = () => (
    <section className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Professional advisory tailored for commercial entities and individuals.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <div key={service.id} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                service.category === 'Commercial' ? 'bg-indigo-100 text-indigo-600' : 
                service.category === 'Individual' ? 'bg-emerald-100 text-emerald-600' : 
                'bg-amber-100 text-amber-600'
              }`}>
                <i className={`fas ${
                  service.category === 'Commercial' ? 'fa-building' : 
                  service.category === 'Individual' ? 'fa-user-graduate' : 
                  'fa-lightbulb'
                } text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">{service.description}</p>
              
              <div className="space-y-4 mb-8">
                {service.subServices ? (
                  <div className="space-y-2">
                    {service.subServices.map(sub => (
                      <div key={sub.id} className="flex items-center text-sm text-slate-600">
                        <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                        {sub.title}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center text-sm text-slate-600 italic">
                    <i className="fas fa-clock text-amber-500 mr-2"></i>
                    60 Minute Deep-Dive Session
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-slate-50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    {service.durations.map(d => (
                      <span key={d} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">
                        {d}M
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Video Sessions</span>
                </div>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 hover:-translate-y-1 transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen pb-20">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        {activeTab === 'home' && renderHome()}
        {activeTab === 'resources' && renderResources()}
        {activeTab === 'services' && renderServices()}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white mr-2">
              <i className="fas fa-chart-line"></i>
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">The Human Asset</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 The Human Asset Consultancy. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a 
              href="https://www.linkedin.com/company/the-human-asset" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/the.human.asset/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </footer>

      {selectedService && (
        <BookingModal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          service={selectedService} 
        />
      )}
    </div>
  );
};

export default App;
