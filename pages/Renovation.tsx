import React from 'react';
import Section from '../components/Section';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Renovation: React.FC = () => {
  return (
    <div className="pt-20">
      <Section bg="light">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Réhabilitation</span>
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-6">Rénovation & Patrimoine</h1>
          <p className="max-w-2xl mx-auto font-light text-gray-500">
            Sublimer l'existant. Nous redonnons vie aux bâtiments anciens en alliant respect de l'histoire et confort contemporain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          
          {/* Project 1 */}
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            <div className="w-full xl:w-2/3">
              <BeforeAfterSlider 
                beforeImage="https://unsplash.com/photos/-TSEG76Etn0/download?force=true&w=1600"
                afterImage="https://unsplash.com/photos/GR8W4e1TGJQ/download?force=true&w=1600"
              />
            </div>
            <div className="w-full xl:w-1/3 pt-4">
              <h2 className="text-3xl font-serif text-dark mb-2">Loft Industriel</h2>
              <p className="text-secondary font-medium mb-6">Centre-ville Clermont-Ferrand</p>
              <p className="text-gray-600 font-light mb-6">
                Transformation complète d'un ancien atelier de confection. Le défi : apporter de la lumière au cœur du bâtiment tout en conservant les poutres métalliques d'origine.
              </p>
              <ul className="text-sm font-light text-gray-500 space-y-2 border-l border-gray-300 pl-4">
                <li>• Création d'une verrière zénithale</li>
                <li>• Isolation thermique par l'intérieur (biosourcée)</li>
                <li>• Restauration des parquets d'époque</li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col xl:flex-row-reverse gap-12 items-start">
            <div className="w-full xl:w-2/3">
              <BeforeAfterSlider 
                beforeImage="https://unsplash.com/photos/t_UAnPYiuik/download?force=true&w=1600"
                afterImage="https://unsplash.com/photos/5JxVMkn1E80/download?force=true&w=1600"
              />
            </div>
            <div className="w-full xl:w-1/3 pt-4 text-left xl:text-right">
              <h2 className="text-3xl font-serif text-dark mb-2">Ferme Auvergnate</h2>
              <p className="text-secondary font-medium mb-6">Plateau de Gergovie</p>
              <p className="text-gray-600 font-light mb-6">
                Réhabilitation d'une grange en pierre de lave. L'objectif était de créer une ouverture magistrale sur la chaîne des Puys sans dénaturer le caractère vernaculaire du bâtiment.
              </p>
               <ul className="text-sm font-light text-gray-500 space-y-2 border-r-0 xl:border-r border-l xl:border-l-0 border-gray-300 pl-4 xl:pl-0 xl:pr-4">
                <li>• Maçonnerie traditionnelle à la chaux</li>
                <li>• Plancher chauffant basse température</li>
                <li>• Menuiseries acier minimalistes</li>
              </ul>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Renovation;