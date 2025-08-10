import React, { useState } from "react";

// Define the project interface
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  sourceCode?: string;
  liveLink?: string;
  image?: string;
  year: string;
  category: string;
}

// Define the props interface
interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`
          relative transition-all duration-500 ease-out cursor-pointer
          ${isExpanded ? 'fixed inset-4 z-50' : 'mb-1'}
        `}
        style={{
          animationDelay: `${delay}ms`,
          animation: 'slideUp 0.6s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={`
            bg-white transition-all duration-500 ease-out overflow-hidden
            ${isExpanded 
              ? 'rounded-2xl shadow-2xl h-full' 
              : 'rounded-lg shadow-sm hover:shadow-md border border-gray-100 h-12'
            }
          `}
          style={{
            backgroundColor: isHovered && !isExpanded ? '#fafafa' : '#ffffff',
          }}
        >
          {/* Collapsed State */}
          {!isExpanded && (
            <div className="flex items-center justify-between h-full px-4 group">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? '#6b7280' : '#d1d5db'
                  }}
                />
                <h3 
                  className="text-gray-800 font-medium text-sm transition-all duration-300"
                  style={{
                    transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
                  }}
                >
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 text-xs">{project.year}</span>
                <div 
                  className="text-gray-300 transition-all duration-300"
                  style={{
                    transform: isHovered ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 3L8 6L4 9" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Expanded State */}
          {isExpanded && (
            <div 
              className="p-8 h-full flex flex-col overflow-y-auto opacity-0"
              style={{
                animation: 'fadeInUp 0.4s ease-out 0.1s forwards'
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-gray-900 font-semibold text-2xl mb-2">{project.title}</h2>
                  <p className="text-gray-400 text-sm">{project.category} • {project.year}</p>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="text-gray-300 hover:text-gray-500 transition-all duration-200 hover:rotate-90 p-2"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 5L15 15M15 5L5 15" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Image */}
                <div className="space-y-6">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full rounded-xl object-cover aspect-video bg-gray-50 transition-transform duration-300 hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="rounded-xl aspect-video flex items-center justify-center bg-gray-50 text-gray-300 text-sm">
                      No preview available
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: 'fadeIn 0.3s ease-out forwards',
                          opacity: 0
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block w-full bg-gray-900 text-white font-medium py-3 px-6 rounded-xl text-sm text-center hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        View Live Demo
                      </a>
                    )}
                    
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block w-full border border-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl text-sm text-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black z-40 cursor-pointer"
          style={{
            animation: 'fadeIn 0.3s ease-out forwards',
            opacity: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
          onClick={() => setIsExpanded(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

// Main component
const SmoothProjectShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "DM Resharing",
      description: "A secure direct message resharing system with end-to-end encryption and advanced privacy controls. Built for seamless communication across multiple platforms with real-time synchronization.",
      technologies: ["React", "Node.js", "Socket.io", "Encryption"],
      year: "2024",
      category: "Communication",
      sourceCode: "https://github.com/example/dm-resharing",
      liveLink: "https://demo.com/dm-resharing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: "2",
      title: "Media Viewer",
      description: "Advanced media viewer with support for multiple formats, real-time editing capabilities, and cloud synchronization features. Optimized for performance and user experience.",
      technologies: ["Vue.js", "WebGL", "FFmpeg", "AWS"],
      year: "2024",
      category: "Media",
      sourceCode: "https://github.com/example/media-viewer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: "3",
      title: "Command System",
      description: "Powerful command-line interface system with intelligent autocomplete, plugin architecture, and customizable workflows. Designed for developer productivity.",
      technologies: ["TypeScript", "Electron", "CLI", "Plugins"],
      year: "2024",
      category: "Developer Tools",
      liveLink: "https://demo.com/command-system",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop"
    },
    {
      id: "4",
      title: "Send Interaction",
      description: "Real-time interaction platform enabling seamless communication with gesture recognition and voice commands. Built for modern collaborative workflows.",
      technologies: ["React Native", "WebRTC", "ML Kit", "Firebase"],
      year: "2024",
      category: "Mobile",
      sourceCode: "https://github.com/example/send-interaction",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      id: "5",
      title: "@Everyone",
      description: "Collaborative workspace platform with advanced notification system and team management features. Streamlines communication for distributed teams.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
      year: "2024",
      category: "Collaboration",
      liveLink: "https://demo.com/everyone",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      id: "6",
      title: "/Gif",
      description: "High-performance GIF creation and optimization tool with batch processing and custom compression algorithms. Perfect for content creators.",
      technologies: ["Python", "OpenCV", "FastAPI", "Docker"],
      year: "2024",
      category: "Media Processing",
      sourceCode: "https://github.com/example/gif-processor"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 
          className="text-4xl font-semibold text-gray-900 mb-16 opacity-0"
          style={{
            animation: 'slideUp 0.8s ease-out 0.2s forwards'
          }}
        >
          Projects
        </h1>
        
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={400 + index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothProjectShowcase;