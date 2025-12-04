import React from 'react';
import Section from '../components/Section';
import { ArrowRight, PenTool, Layout, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-[zoomIn_20s_infinite_alternate]"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white">
          <p className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Depuis 2003
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-8 max-w-4xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
            L'architecture pensée pour <br/>
            <span className="italic font-normal">votre bien-être</span>.
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Une agence à taille humaine basée à Clermont-Ferrand. Nous transformons vos envies en espaces de vie uniques, durables et élégants.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <NavLink 
              to="/contact" 
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-dark hover:bg-secondary hover:text-white transition-all duration-300 font-medium tracking-wide"
            >
              <span>Discuter de votre projet</span>
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <Section bg="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dark mb-4">Notre Philosophie</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group p-8 border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 rounded-sm bg-white">
            <div className="w-14 h-14 bg-light rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-dark">
              <PenTool size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-4">Créativité & Rigueur</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Chaque ligne est tracée avec intention. Nous allions l'audace créative à la rigueur technique pour des projets qui traversent le temps sans prendre une ride.
            </p>
          </div>

          <div className="group p-8 border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 rounded-sm bg-white">
            <div className="w-14 h-14 bg-light rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-dark">
              <Users size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-4">Accompagnement Global</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              De l'esquisse à la remise des clés. Nous sommes votre interlocuteur unique, simplifiant les démarches administratives et le suivi de chantier.
            </p>
          </div>

          <div className="group p-8 border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 rounded-sm bg-white">
            <div className="w-14 h-14 bg-light rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-dark">
              <Layout size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-4">Conception Durable</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Une architecture respectueuse de son environnement. Nous privilégions les matériaux naturels, la lumière et l'efficacité énergétique.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Project Teaser */}
      <Section bg="light" className="overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/13203179/pexels-photo-13203179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Villa Contemporaine" 
              className="w-full h-[600px] object-cover shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Projet en vedette</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-dark">Villa Les Cèdres</h2>
            <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed">
              Une réinterprétation moderne de la maison familiale sur les hauteurs de Clermont-Ferrand. 
              Intégration paysagère parfaite et jeux de volumes pour capter la lumière naturelle tout au long de la journée.
            </p>
            <NavLink 
              to="/maisons" 
              className="text-dark border-b border-dark pb-1 hover:text-secondary hover:border-secondary transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Voir le projet
            </NavLink>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;