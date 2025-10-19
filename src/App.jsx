import React, { useEffect, useState } from 'react';
import { portfolio } from './data/portfolio';


// SVG Icons
const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Data

const skills = [
  { name: "Spring Boot", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
  { name: "Angular", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
  { name: "React", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Java", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "Python", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: ".NET", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "PostgreSQL", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Kafka", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg" },
  { name: "Docker", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "AWS", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Git", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "Jira", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg" },
  { name: "Bitbucket", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg" },
];


const timeline = [
  {
    year: 'Feb 2025',
    title: 'Software Developer @ Capgemini Engineering',
    duration: 'Feb 2025 – Jun 2025',
    details: 'Designed an EMR system with Spring Boot and Angular for medical workflows. Developed scalable microservices with Kafka for real-time communication and Keycloak for authentication.',
    location: 'Ariana, Tunisia'
  },
  {
    year: 'Jul 2024',
    title: 'Full Stack Developer @ Xtendplex',
    duration: 'Jul 2024 – Jan 2025',
    details: 'Developed ship tracking and crew management modules with Django. Built RESTful APIs with Keycloak access control. Created a CLI tool with Cookiecutter to automate FastAPI project creation.',
    location: 'Manzah, Tunisia'
  },
  {
    year: '2022',
    title: 'Software Engineering Student @ EPI Digital School',
    duration: '2022 – 2025',
    details: 'Pursuing Software Engineering degree with focus on full-stack development, microservices architecture, and modern security practices.',
    location: 'Tunisia'
  },
  {
    year: 'Jul 2023',
    title: 'Backend Developer @ Teamdev',
    duration: 'Jul 2023 – Aug 2023',
    details: 'Developed Spring Boot backend services with JWT authentication and role-based access control (RBAC) for customer account management.',
    location: 'Sahloul, Tunisia'
  },
  {
    year: '2022',
    title: 'Full Stack Developer @ A.A.F',
    duration: 'Feb 2022 – Jun 2022',
    details: 'Created an IT incident ticket management system with Laravel and Chart.js dashboards for IT support analytics and metrics (Final Year Project).',
    location: 'Sousse, Tunisia'
  },
  {
    year: '2019',
    title: "Bachelor's in Business Intelligence @ ISG Sousse",
    duration: '2019 – 2022',
    details: "Achieved Bachelor's degree in Business Intelligence, specializing in analyzing and interpreting complex business data.",
    location: 'Sousse, Tunisia'
  },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState(1);
  const [imageIndices, setImageIndices] = useState({});
  const itemsPerPage = 3;

  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prev => {
        const newIndices = { ...prev };
        currentItems.forEach((_, idx) => {
          const projectIndex = indexOfFirstItem + idx;
          const currentIndex = newIndices[projectIndex] || 0;
          const project = portfolio[projectIndex];
          newIndices[projectIndex] = (currentIndex + 1) % project.images.length;
        });
        return newIndices;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentPage]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfolio.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(portfolio.length / itemsPerPage);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 text-slate-900 dark:text-slate-100 min-h-screen transition-all duration-500">
      {/* Theme Toggle Button */}
      <button
        onClick={handleThemeSwitch}
        className="fixed top-6 right-6 z-50 p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700"
      >
        {theme === 'dark' ? (
          <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center pt-24 pb-16">
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <img
              src="./assets/profile.png"
              alt="Firas Boukhchim"
              className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Firas Boukhchim
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 font-semibold text-slate-700 dark:text-slate-300">
            Full-Stack Software Engineer
          </p>
          
          <p className="text-base md:text-lg max-w-3xl mb-8 text-slate-600 dark:text-slate-400 leading-relaxed">
            Full-stack software engineer with over 3 years of experience in designing and implementing web applications. 
            Strong expertise in Spring Boot and Angular, with solid understanding of distributed systems, modern security practices, 
            and application performance optimization.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/firas-boukhchim-70439b223/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="text-blue-600 dark:text-blue-400"><LinkedinIcon /></div>
            </a>
            <a href="https://github.com/firas-b" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="text-slate-800 dark:text-slate-200"><GithubIcon /></div>
            </a>
            <a href="mailto:boukhchimfiras487@gmail.com"
               className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="text-red-600 dark:text-red-400"><MailIcon /></div>
            </a>
          </div>
        </div>

        {/* Portfolio Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentItems.map((project, idx) => {
              const projectIndex = indexOfFirstItem + idx;
              const currentImageIndex = imageIndices[projectIndex] || 0;
              
              return (
                <div key={idx} className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    {project.images.map((img, imgIdx) => (
                      <img 
                        key={imgIdx}
                        src={img} 
                        alt={`${project.title} ${imgIdx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                          imgIdx === currentImageIndex 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Carousel indicators */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                      {project.images.map((_, imgIdx) => (
                        <div 
                          key={imgIdx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            imgIdx === currentImageIndex 
                              ? 'w-8 bg-white' 
                              : 'w-1.5 bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                        View Project <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all border border-slate-200 dark:border-slate-700">
              <ChevronLeftIcon />
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${currentPage === i + 1 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110' 
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:shadow-md border border-slate-200 dark:border-slate-700'}`}>
                {i + 1}
              </button>
            ))}
            
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all border border-slate-200 dark:border-slate-700">
              <ChevronRightIcon />
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="group flex flex-col items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-2">
                <img src={skill.imageUrl} alt={skill.name} 
                     className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-semibold text-center text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
            
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-20 pb-12 group">
                <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group-hover:-translate-y-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
                      {item.year}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{item.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  {item.location && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 italic">{item.location}</p>
                  )}
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Firas Boukhchim. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;