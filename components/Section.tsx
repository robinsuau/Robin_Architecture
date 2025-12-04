import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'light' | 'dark';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', bg = 'white', id }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-light',
    dark: 'bg-dark text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;