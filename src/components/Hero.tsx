import { useEffect, useState } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-gradient rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-royal-gradient rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-royal-gradient rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hello, I'm </span>
                <br />
                <span className="text-royal-gradient">Tanish Saha</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-semibold">
                Software Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate about creating innovative solutions and building 
                scalable applications. Ready to contribute to your team's success.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-royal group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </button>
              <button 
                onClick={scrollToNext}
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                View Portfolio
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gradient">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-royal-gradient">2+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional Portrait" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-royal hover:shadow-glow transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-royal-gradient opacity-20 rounded-2xl" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-royal-gradient rounded-full opacity-20 animate-pulse-royal" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-royal-gradient rounded-full opacity-20 animate-pulse-royal" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary-light transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;