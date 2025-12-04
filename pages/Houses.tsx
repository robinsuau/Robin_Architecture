import React from 'react';
import Section from '../components/Section';

const houses = [
  { id: 1, title: 'Maison H', type: 'Construction Neuve', image: 'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Une structure bois minimaliste.' },
  { id: 2, title: 'Villa S', type: 'Villa Contemporaine', image: 'https://images.pexels.com/photos/7903178/pexels-photo-7903178.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Larges baies vitrées sur jardin.' },
  { id: 3, title: 'Le Belvédère', type: 'Extension', image: 'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Surélévation panoramique.' },
  { id: 4, title: 'Résidence K', type: 'Construction Neuve', image: 'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Intégration en pente forte.' },
  { id: 5, title: 'Maison de Ville', type: 'Rénovation Lourde', image: 'https://images.pexels.com/photos/13620065/pexels-photo-13620065.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Réhabilitation cœur de ville.' },
  { id: 6, title: 'L\'Atelier', type: 'Transformation', image: 'https://images.pexels.com/photos/33568016/pexels-photo-33568016.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Ancien atelier transformé en loft.' },
];

const Houses: React.FC = () => {
  return (
    <div className="pt-20">
      <Section bg="light">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Particuliers</span>
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-6">Maisons & Villas</h1>
          <p className="max-w-2xl mx-auto font-light text-gray-500">
            De la première esquisse à la réalité. Nous concevons des habitats singuliers qui reflètent votre mode de vie et s'ancrent durablement dans leur environnement.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <div key={house.id} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-w-3 aspect-h-4 w-full h-[400px] overflow-hidden bg-gray-200">
                <img 
                  src={house.image} 
                  alt={house.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-secondary text-xs font-bold tracking-widest uppercase mb-1 block">{house.type}</span>
                  <h3 className="text-white text-2xl font-serif mb-2">{house.title}</h3>
                  <p className="text-gray-200 text-sm font-light border-l-2 border-secondary pl-3">{house.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Sketch Section */}
        <div className="mt-32 flex flex-col md:flex-row items-center bg-white p-8 md:p-12 shadow-sm rounded-lg">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
             <img 
               src="https://images.pexels.com/photos/15764116/pexels-photo-15764116.jpeg?auto=compress&cs=tinysrgb&w=1600" 
               alt="Croquis architectural" 
               className="w-full h-auto rounded shadow-inner"
             />
          </div>
          <div className="w-full md:w-1/2 md:pl-16">
            <h3 className="text-3xl font-serif mb-6 text-dark">La 3D au service de votre imagination</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Pour vous aider à vous projeter, nous réalisons des modélisations 3D photo-réalistes et des croquis d'ambiance à chaque étape du projet. Cela permet de valider les volumes, les matériaux et la lumière avant même le début du chantier.
            </p>
            <ul className="space-y-3 font-light text-sm text-gray-500">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Modélisation volumétrique</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Rendus photo-réalistes</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>Visite virtuelle immersive</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Houses;