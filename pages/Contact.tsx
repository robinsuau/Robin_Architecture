import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message. Nous vous recontacterons sous 48h.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen bg-light">
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Parlons de votre projet</span>
            <h1 className="text-4xl md:text-5xl font-serif text-dark mb-8">Contactez-nous</h1>
            <p className="text-gray-600 font-light text-lg mb-12 leading-relaxed">
              Vous avez un projet de construction, d'extension ou de rénovation ? 
              Notre équipe est à votre écoute pour vous accompagner.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-dark font-serif text-lg">Téléphone</h3>
                  <p className="text-gray-500 font-light mt-1">+33 4 73 00 00 00</p>
                  <p className="text-xs text-gray-400 mt-1">Du Lundi au Vendredi, 9h - 18h</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-dark font-serif text-lg">Email</h3>
                  <p className="text-gray-500 font-light mt-1">contact@robin-architecte.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-dark font-serif text-lg">Agence</h3>
                  <p className="text-gray-500 font-light mt-1">12 Avenue de la République</p>
                  <p className="text-gray-500 font-light">63000 Clermont-Ferrand</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-secondary">
            <h2 className="text-2xl font-serif text-dark mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-light border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="jean@exemple.fr"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors"
                    placeholder="06 00 00 00 00"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Description du projet</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-light border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors resize-none"
                  placeholder="Type de projet, surface envisagée, localisation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-dark text-white font-medium py-4 px-6 rounded hover:bg-secondary transition-colors duration-300 flex items-center justify-center space-x-2 tracking-wide uppercase text-sm"
              >
                <span>Envoyer</span>
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Contact;