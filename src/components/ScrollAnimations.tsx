import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollAnimations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setIsVisible(window.scrollY > 300);

      // Handle section detection for animated transitions
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Handle wheel event for smooth section transitions
    const handleWheel = (e: WheelEvent) => {
      // Uncomment below for automatic section scrolling on wheel
      // if (Math.abs(e.deltaY) > 50) {
      //   e.preventDefault();
      //   const direction = e.deltaY > 0 ? 1 : -1;
      //   const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
      //   
      //   if (nextSection !== currentSection) {
      //     const element = document.getElementById(sections[nextSection]);
      //     if (element) {
      //       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      //     }
      //   }
      // }
    };

    // Uncomment to enable automatic section scrolling
    // window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionIndex: number) => {
    const element = document.getElementById(sections[sectionIndex]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-royal-gradient text-white rounded-full shadow-glow transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        } hover:scale-110 hover:shadow-royal`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>

      {/* Section Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-primary scale-125 shadow-glow'
                : 'bg-border hover:bg-primary/50'
            }`}
            aria-label={`Go to ${section} section`}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>

      {/* Page Transition Overlay */}
      <div 
        className={`fixed inset-0 bg-background z-[60] pointer-events-none transition-opacity duration-500 ${
          currentSection !== undefined ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </>
  );
};

export default ScrollAnimations;