import { useEffect, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jan 2023 - Present",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance, reducing load time by 40%",
        "Mentored junior developers on best practices and code reviews"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "MongoDB"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "StartupXYZ",
      location: "Your City",
      period: "Jun 2022 - Dec 2022",
      description: [
        "Built full-stack web applications using MERN stack",
        "Implemented RESTful APIs and database design",
        "Participated in agile development process and daily standups",
        "Contributed to open-source projects and documentation"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React", "Git"]
    },
    {
      title: "Web Development Trainee",
      company: "Digital Academy",
      location: "Your City",
      period: "Jan 2022 - May 2022",
      description: [
        "Completed intensive training program in modern web technologies",
        "Developed multiple projects including e-commerce and portfolio sites",
        "Learned industry best practices and agile methodologies",
        "Achieved top 10% in cohort performance metrics"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work <span className="text-royal-gradient">Experience</span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-royal-gradient transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-royal-gradient rounded-full transform -translate-x-1/2 animate-pulse-royal" />

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="card-royal p-6 group">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-medium text-primary flex items-center gap-2">
                          {exp.company}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;