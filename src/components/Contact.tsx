import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import SocialMedia from './SocialMedia';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "tanish27saha@gmail.com",
      href: "mailto:tanish27saha@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8777644569",
      href: "<tel:+918777644569>"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kolkata, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-royal-gradient">Touch</span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss upon any opportunities or collaborate on projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-primary" />
                  Let's Connect
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I’m always open to exploring new opportunities, engaging in innovative projects, and collaborating with talented teams. 
                  If you’d like to connect or have a question, feel free to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="card-royal p-6 group block hover:scale-105"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-royal-gradient rounded-full flex items-center justify-center text-white group-hover:animate-pulse-royal">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">
                  Follow Me On
                </h4>
                <SocialMedia />
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-in-right' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="card-royal p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Tanish Saha
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-royal w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;