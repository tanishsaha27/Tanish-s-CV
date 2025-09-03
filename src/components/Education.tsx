import { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Your University Name",
      location: "Your City, Country",
      period: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Best Final Year Project Award",
        "Active member of Computer Science Society"
      ],
      courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering"]
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science (PCM)",
      institution: "Your School Name",
      location: "Your City, Country", 
      period: "2018 - 2020",
      grade: "Percentage: 92%",
      achievements: [
        "School Topper in Computer Science",
        "National Science Olympiad Qualifier",
        "Head of Computer Club"
      ],
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-DEV-2023-001"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-REACT-2023"
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC-FULLSTACK-2022"
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & <span className="text-royal-gradient">Certifications</span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Academic background and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                Education
              </h3>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card-royal p-6 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-primary font-medium">{edu.field}</p>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-primary">{edu.grade}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <Star className="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Relevant Courses
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : ''}`}>
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="card-royal p-6 group hover:scale-105"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Issued: {cert.date}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center ml-4 group-hover:animate-pulse-royal">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Training */}
              <div className="card-royal p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Continuous Learning
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Online Courses Completed</span>
                    <span className="font-semibold text-primary">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Workshop Attended</span>
                    <span className="font-semibold text-primary">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Hackathons Participated</span>
                    <span className="font-semibold text-primary">5+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;