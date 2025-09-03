import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<boolean[]>([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 68},
        { name: "Next.js", level: 20 },
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 64 },
        { name: "Python", level: 33 },
        { name: "MongoDB", level: 60},
        { name: "Java", level: 92 },
        { name: "Swing", level: 20 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 34 },
        { name: "Linux", level: 10 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills after a delay
          setTimeout(() => {
            const totalSkills = skillCategories.reduce((acc, category) => acc + category.skills.length, 0);
            const newAnimatedSkills = new Array(totalSkills).fill(false);
            
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((_, skillIndex) => {
                const globalIndex = skillCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
                setTimeout(() => {
                  setAnimatedSkills(prev => {
                    const updated = [...prev];
                    updated[globalIndex] = true;
                    return updated;
                  });
                }, (globalIndex + 1) * 200);
              });
            });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-royal-gradient">Skills</span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`card-royal p-8 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const globalIndex = skillCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
                    const isAnimated = animatedSkills[globalIndex];
                    
                    return (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{
                              width: isAnimated ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'JavaScript', 'HTML5', 'CSS3'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  style={{ 
                    animationDelay: `${1 + index * 0.05}s`,
                    animation: isVisible ? 'fadeInUp 0.5s ease-out forwards' : 'none',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;