import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Cpu, Terminal, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ChevronRight, Download, Briefcase ,Zap } from 'lucide-react';
import RealtimeNotificationProject from './RealtimeNotificationProject';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    'Backend & Architecture': [
      'C#', 'ASP.NET Core Web API', 'Microservices', 'RESTful APIs', 
      'Entity Framework', 'MVC', 'JWT', 'OAuth 2.0', 'API Versioning'
    ],
    'Frontend': [
      'React.js', 'Redux', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
      'Windows Forms', '.NET MAUI'
    ],
    'Database': [
      'SQL Server', 'MySQL', 'Entity Framework Core', 'LINQ', 'Query Optimization'
    ],
    'Industrial Automation': [
      'Modbus TCP/RTU', 'RS232/RS485', 'PLC Integration', 'SCADA', 
      'Manufacturing Execution Systems (MES)'
    ],
    'DevOps & Tools': [
      'Git', 'Azure DevOps', 'CI/CD', 'Visual Studio', 'Postman', 'Serilog', 'Agile/Scrum'
    ]
  };

  const projects = [
    {
      title: 'Project Management System',
      description: 'Full-stack project management application with ASP.NET Core backend and React frontend. Features real-time updates, user authentication, task tracking, and role-based access control.',
      technologies: ['ASP.NET Core', 'React.js', 'SQL Server', 'JWT', 'RESTful APIs', 'Entity Framework'],
      highlights: [
        'Real-time project tracking and updates',
        'Role-based access control (Admin/User)',
        'Task completion approval workflow',
        'Responsive dashboard with analytics'
      ],
      liveUrl: 'https://pmt-amber-psi.vercel.app',
      githubUrl: 'https://github.com/M-Mikey/ProjectManagementSystem'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Architected full-stack modernization of 15 legacy ASPX modules to ASP.NET Core microservices with React.js frontend, implementing JWT authentication and OAuth 2.0.',
      technologies: ['ASP.NET Core', 'React.js', 'Redux', 'Microservices', 'JWT', 'OAuth 2.0'],
      highlights: [
        '50% reduction in page load times (3s → 1.5s)',
        '60% API performance improvement (500ms → 200ms)',
        'Zero-downtime deployment architecture'
      ]
    },
    {
      title: 'Real-Time ERP & Manufacturing System',
      description: 'Developed ASP.NET Core Web APIs and React.js dashboards for real-time manufacturing execution systems with live production monitoring.',
      technologies: ['ASP.NET Core', 'React.js', 'WebSocket', 'RESTful APIs', 'Serilog'],
      highlights: [
        'Real-time data visualization dashboards',
        'Enterprise-grade structured logging',
        'API versioning and authentication'
      ]
    },
    {
      title: 'Industrial Automation Integration',
      description: 'Built device communication layers and data acquisition pipelines integrating PLCs and industrial sensors via Modbus TCP/RTU protocols for SCADA systems.',
      technologies: ['Modbus TCP/RTU', 'RS232/RS485', 'PLC Integration', 'SCADA', 'C#'],
      highlights: [
        'Seamless PLC integration',
        'Real-time sensor data acquisition',
        'SCADA system connectivity'
      ]
    },
    {
      title: 'Manufacturing Operations Suite',
      description: 'Developed Windows Forms applications and Windows Services for barcode printing, weight logging, and automated data synchronization across manufacturing facilities.',
      technologies: ['Windows Forms', 'Windows Services', 'C#', 'SQL Server'],
      highlights: [
        'Multi-facility production monitoring',
        'Automated data polling and sync',
        'Real-time visibility into operations'
      ]
    }
  ];

  const experience = [
    {
      title: 'Software Engineer (Contract)',
      company: 'Tech Bliss Digital Solution',
      client: 'NIIT Limited',
      location: 'New Delhi, India',
      period: 'September 2025 – February 2026',
      achievements: [
        'Architected full-stack modernization of 15 legacy ASPX modules to ASP.NET Core microservices with React.js, reducing page loads by 50% (3s→1.5s) and API response by 60% (500ms→200ms), enabling weekly CI/CD deployments',
        'Designed RESTful API architecture with JWT authentication, OAuth 2.0, and versioned endpoints, implementing microservices pattern with API Gateway and ensuring zero-downtime deployments',
        'Built component-based React architecture with Redux state management and reusable UI components, improving maintainability and development velocity'
      ]
    },
    {
      title: 'Software Consultant',
      company: 'YNV Technologies',
      location: 'Haryana, India',
      period: 'January 2024 – May 2025',
      achievements: [
        'Architected ASP.NET Core Web APIs for real-time ERP and manufacturing execution systems, implementing JWT authentication, API versioning, and structured logging (Serilog) for enterprise-grade reliability',
        'Engineered Windows applications and React.js dashboards with real-time data visualization, integrating via RESTful services and WebSocket for live production monitoring',
        'Integrated PLCs and industrial sensors via Modbus TCP/RTU and RS232/485 protocols, building device communication layers and data acquisition pipelines for SCADA system integration'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'YNV Technologies',
      location: 'Haryana, India',
      period: 'June 2021 – January 2024',
      achievements: [
        'Developed Windows Forms applications for barcode printing, weight logging, and production monitoring supporting manufacturing operations across multiple facilities',
        'Built Windows Services for automated data polling and synchronization between field equipment and enterprise systems, ensuring data consistency and real-time visibility'
      ]
    }
  ];

  const navItems = [
    { id: 'about', label: 'About', icon: Code },
    { id: 'experience', label: 'Experience', icon: Terminal },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'self-projects', label: 'Self Projects', icon: Zap },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        .mono {
          font-family: 'Space Mono', monospace;
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          padding: 1px;
          border-radius: 12px;
        }
        
        .gradient-border-inner {
          background: #09090b;
          border-radius: 11px;
          padding: 1.5rem;
        }
        
        .tech-grid {
          background: 
            linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .glow {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        
        .appear {
          animation: appearUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        @keyframes appearUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .skill-tag {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .skill-tag:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2));
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        
        .nav-item {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          transform: scaleY(0);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .nav-item.active::before {
          transform: scaleY(1);
        }
        
        .accent-text {
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .code-block {
          background: rgba(16, 185, 129, 0.05);
          border-left: 3px solid #10b981;
          font-family: 'Space Mono', monospace;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 bg-zinc-900/80 backdrop-blur-lg border-r border-zinc-800 z-50 flex flex-col items-center py-8 max-md:w-16">
        <div className="mb-12">
          <div className="w-12 h-12 max-md:w-10 max-md:h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold mono text-lg max-md:text-base">MS</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-6 max-md:gap-4">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`nav-item w-full flex flex-col items-center gap-1 py-3 px-2 text-zinc-500 hover:text-emerald-400 ${
                activeSection === id ? 'active text-emerald-400' : ''
              }`}
              title={label}
            >
              <Icon size={20} className="max-md:w-4 max-md:h-4" />
              <span className="text-xs max-md:text-[10px]">{label}</span>
            </button>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-zinc-800">
          <a
            href="https://github.com/M-Mikey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            title="GitHub"
          >
            <Github size={20} className="max-md:w-4 max-md:h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-sharma-a50383239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} className="max-md:w-4 max-md:h-4" />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-20 max-md:ml-16 tech-grid">
        {/* Hero Section */}
        {activeSection === 'about' && (
          <section className={`min-h-screen flex items-center justify-center px-8 max-md:px-4 py-20 max-md:py-16 ${isVisible ? 'appear' : ''}`}>
            <div className="max-w-5xl w-full">
              <h1 className="text-7xl max-md:text-4xl max-sm:text-3xl font-bold mb-4 tracking-tight">
                MOHIT <span className="accent-text">SHARMA</span>
              </h1>
              
              <p className="text-2xl max-md:text-xl max-sm:text-lg text-zinc-400 mb-6 max-w-3xl leading-relaxed">
                Full-Stack .NET Engineer
              </p>
              
              <div className="gradient-border mb-8 max-w-3xl">
                <div className="gradient-border-inner">
                  <p className="text-zinc-300 leading-relaxed text-lg max-md:text-base">
                    Full-Stack .NET Engineer with <span className="text-emerald-400 font-semibold">3+ years</span> architecting enterprise applications across manufacturing, ERP, and modernization initiatives. Specialized in scalable microservices with <span className="text-emerald-400">ASP.NET Core</span>, <span className="text-blue-400">React.js</span>, and industrial automation (PLCs, Modbus, SCADA).
                  </p>
                </div>
              </div>
              
              {/* Resume Download Button */}
              <div className="mb-12">
                <a
                  href="/Mohit_Sharma_Resume.pdf"
                  download="Mohit_Sharma_Resume.pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 max-md:px-6 max-md:py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Download size={20} className="max-md:w-4 max-md:h-4" />
                  <span className="max-md:text-sm">Download Resume</span>
                </a>
              </div>
              
              <div className="flex gap-8 max-md:gap-4 text-zinc-400 flex-wrap">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-emerald-400 max-md:w-4 max-md:h-4" />
                  <span className="max-md:text-sm">New Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-emerald-400 max-md:w-4 max-md:h-4" />
                  <span className="max-md:text-sm">+91-8700758407</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-emerald-400 max-md:w-4 max-md:h-4" />
                  <span className="text-sm max-md:text-xs break-all">mohitsharma8700758407@gmail.com</span>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6 max-md:gap-4 max-sm:gap-3 max-w-2xl">
                <div className="code-block p-4 max-md:p-3 rounded-lg">
                  <div className="text-3xl max-md:text-2xl max-sm:text-xl font-bold text-emerald-400 mb-1">60%</div>
                  <div className="text-sm max-md:text-xs text-zinc-400">API Performance Boost</div>
                </div>
                <div className="code-block p-4 max-md:p-3 rounded-lg">
                  <div className="text-3xl max-md:text-2xl max-sm:text-xl font-bold text-emerald-400 mb-1">50%</div>
                  <div className="text-sm max-md:text-xs text-zinc-400">Page Load Reduction</div>
                </div>
                <div className="code-block p-4 max-md:p-3 rounded-lg">
                  <div className="text-3xl max-md:text-2xl max-sm:text-xl font-bold text-emerald-400 mb-1">15+</div>
                  <div className="text-sm max-md:text-xs text-zinc-400">Legacy Modules Modernized</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className={`min-h-screen py-20 px-8 max-md:px-4 max-md:py-16 ${isVisible ? 'appear' : ''}`}>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-16 max-md:mb-12">
                Work <span className="accent-text">Experience</span>
              </h2>
              
              <div className="space-y-12 max-md:space-y-8">
                {experience.map((job, idx) => (
                  <div 
                    key={idx} 
                    className="gradient-border glow"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="gradient-border-inner">
                      <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                        <div>
                          <h3 className="text-2xl max-md:text-xl font-bold text-emerald-400 mb-2">{job.title}</h3>
                          <p className="text-xl max-md:text-lg text-zinc-300 mb-1">
                            {job.company} {job.client && <span className="text-zinc-500">({job.client})</span>}
                          </p>
                          <p className="text-zinc-400 flex items-center gap-2 text-sm">
                            <MapPin size={14} />
                            {job.location}
                          </p>
                        </div>
                        <div className="mono text-emerald-400 text-sm max-md:text-xs bg-emerald-400/10 px-4 py-2 rounded-lg">
                          {job.period}
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mt-6">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-zinc-300 leading-relaxed max-md:text-sm">
                            <ChevronRight className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 max-md:mt-12 gradient-border">
                <div className="gradient-border-inner">
                  <h3 className="text-2xl max-md:text-xl font-bold text-blue-400 mb-3">Education</h3>
                  <p className="text-xl max-md:text-lg text-zinc-300 mb-2">Bachelor of Technology in Computer Science & Engineering</p>
                  <p className="text-zinc-400 max-md:text-sm">Global Institute of Technology and Management, Rohtak, India</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className={`min-h-screen py-20 px-8 max-md:px-4 ${isVisible ? 'appear' : ''}`}>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-16 max-md:mb-12">
                Featured <span className="accent-text">Projects</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-md:gap-6">
                {projects.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="gradient-border glow"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="gradient-border-inner h-full flex flex-col">
                      <h3 className="text-2xl max-md:text-xl font-bold text-emerald-400 mb-3">{project.title}</h3>
                      <p className="text-zinc-300 mb-4 leading-relaxed text-base max-md:text-sm">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-blue-400 mb-2 mono">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-zinc-800/60 border border-zinc-700 rounded text-xs mono text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2 mono">Highlights:</h4>
                        <ul className="space-y-2 mb-4">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-2 text-zinc-400 text-sm">
                              <ChevronRight size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 pt-4 border-t border-zinc-800 flex gap-3 flex-wrap">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-all duration-300 hover:scale-105"
                            >
                              <ExternalLink size={16} />
                              <span className="text-sm font-semibold">View Live</span>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-105"
                            >
                              <Github size={16} />
                              <span className="text-sm font-semibold">View Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {activeSection === 'self-projects' && (
          <section className={`min-h-screen py-20 px-8 max-md:px-4 ${isVisible ? 'appear' : ''}`}>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-16 max-md:mb-12">
                Self <span className="accent-text">Projects</span>
              </h2>
              <RealtimeNotificationProject />
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className={`min-h-screen py-20 px-8 max-md:px-4 max-md:py-16 ${isVisible ? 'appear' : ''}`}>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-16 max-md:mb-12">
                Technical <span className="accent-text">Proficiencies</span>
              </h2>
              
              <div className="space-y-10 max-md:space-y-8">
                {Object.entries(skills).map(([category, items], idx) => (
                  <div key={category} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <h3 className="text-2xl max-md:text-xl font-bold mb-6 max-md:mb-4 flex items-center gap-3">
                      <Server className="text-emerald-400" size={24} />
                      <span className="accent-text">{category}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3 max-md:gap-2">
                      {items.map((skill, i) => (
                        <span
                          key={i}
                          className="skill-tag px-5 py-3 max-md:px-4 max-md:py-2 bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-300 hover:text-emerald-400 mono text-sm max-md:text-xs cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 max-md:mt-12 code-block p-8 max-md:p-6 rounded-lg">
                <h3 className="text-xl max-md:text-lg font-bold text-emerald-400 mb-4 mono">Key Achievements</h3>
                <ul className="space-y-3 text-zinc-300 max-md:text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                    <span>Modernized 15 legacy ASPX modules to ASP.NET Core microservices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                    <span>Achieved 60% API performance improvement (500ms → 200ms)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                    <span>Implemented zero-downtime deployment architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                    <span>Integrated industrial automation systems (PLCs, SCADA, Modbus)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className={`min-h-screen flex items-center justify-center px-8 max-md:px-4 py-20 max-md:py-16 ${isVisible ? 'appear' : ''}`}>
            <div className="max-w-4xl w-full">
              <h2 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-16 max-md:mb-12 text-center">
                Let's <span className="accent-text">Connect</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-md:gap-6">
                <div className="gradient-border glow">
                  <div className="gradient-border-inner text-center">
                    <Mail className="text-emerald-400 mx-auto mb-4" size={40} />
                    <h3 className="text-xl max-md:text-lg font-bold mb-2">Email</h3>
                    <a 
                      href="mailto:mohitsharma8700758407@gmail.com" 
                      className="text-zinc-400 hover:text-emerald-400 transition-colors break-all text-sm max-md:text-xs"
                    >
                      mohitsharma8700758407@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="gradient-border glow">
                  <div className="gradient-border-inner text-center">
                    <Phone className="text-blue-400 mx-auto mb-4" size={40} />
                    <h3 className="text-xl max-md:text-lg font-bold mb-2">Phone</h3>
                    <a 
                      href="tel:+918700758407" 
                      className="text-zinc-400 hover:text-blue-400 transition-colors"
                    >
                      +91-8700758407
                    </a>
                  </div>
                </div>
                
                <div className="gradient-border glow md:col-span-2">
                  <div className="gradient-border-inner text-center">
                    <MapPin className="text-emerald-400 mx-auto mb-4" size={40} />
                    <h3 className="text-xl max-md:text-lg font-bold mb-2">Location</h3>
                    <p className="text-zinc-400">New Delhi, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 max-md:mt-12 text-center">
                <div className="code-block p-8 max-md:p-6 rounded-lg inline-block w-full max-w-2xl">
                  <p className="mono text-emerald-400 text-lg max-md:text-base mb-4">
                    // Available for full-time opportunities
                  </p>
                  <p className="text-zinc-300 max-md:text-sm">
                    Full-Stack .NET Engineer specializing in enterprise applications,
                    <br className="max-sm:hidden" />
                    microservices architecture, and industrial automation
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}