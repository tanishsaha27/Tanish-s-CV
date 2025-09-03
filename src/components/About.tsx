import { useEffect, useState } from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Full Stack",
      description: "Experienced in both frontend and backend development"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Modern Tech",
      description: "Always learning and adapting to new technologies and frameworks"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-royal-gradient">Me</span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate software developer with a keen eye for detail and a drive for excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Building Digital Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated software developer with expertise in modern web technologies. 
                  My journey in programming started with curiosity and has evolved into a passion 
                  for creating impactful digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently seeking opportunities to contribute to innovative projects and 
                  collaborate with talented teams. I believe in continuous learning and 
                  staying updated with the latest industry trends.
                </p>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="font-semibold text-foreground">Your City, Country</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <p className="font-semibold text-foreground">2+ Years</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Education</span>
                  <p className="font-semibold text-foreground">Computer Science</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Languages</span>
                  <p className="font-semibold text-foreground">English, Hindi</p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={`grid grid-cols-2 gap-6 ${isVisible ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: '0.4s' }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-royal p-6 text-center group hover:scale-105"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:animate-pulse-royal">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;