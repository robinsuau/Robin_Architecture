import React from 'react';
import Section from '../components/Section';

const Public: React.FC = () => {
  return (
    <div className="pt-20">
      <Section bg="white">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Collectivités & Professionnels</span>
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-6">Espaces Publics</h1>
          <p className="max-w-2xl mx-auto font-light text-gray-500">
            Concevoir des lieux de rencontre, d'apprentissage et de sport. Une architecture fonctionnelle qui respecte les contraintes budgétaires et normatives.
          </p>
        </div>

        <div className="space-y-20">
          {/* Project 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute top-4 left-4 w-full h-full border border-secondary/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/34971913/pexels-photo-34971913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Gymnase Municipal" 
                className="w-full h-auto shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif text-dark mb-4">Gymnase Jean Moulin</h2>
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-6">Riom, 2022</p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Construction d'un complexe sportif de 2500m². Utilisation massive de bois lamellé-collé pour la charpente afin de réduire l'empreinte carbone. La lumière zénithale diffuse permet une pratique sportive optimale sans éblouissement.
              </p>
              <div className="flex gap-4">
                <span className="bg-light px-4 py-2 text-xs text-gray-500 rounded-full">ERP Cat. 3</span>
                <span className="bg-light px-4 py-2 text-xs text-gray-500 rounded-full">HQE</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="order-1">
              <h2 className="text-3xl font-serif text-dark mb-4">Médiathèque du Parc</h2>
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-6">Issoire, 2020</p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Un lieu de culture ouvert sur la nature. Les façades vitrées créent un dialogue constant entre les espaces de lecture et le parc environnant. Traitement acoustique soigné pour le confort des usagers.
              </p>
              <div className="flex gap-4">
                <span className="bg-light px-4 py-2 text-xs text-gray-500 rounded-full">Culture</span>
                <span className="bg-light px-4 py-2 text-xs text-gray-500 rounded-full">Passivhaus</span>
              </div>
            </div>
            <div className="order-2 relative group">
              <div className="absolute top-4 right-4 w-full h-full border border-primary/20 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Médiathèque" 
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Public;