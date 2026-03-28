import React from 'react';
import { Zap, CheckCircle, Server, Database, Lock, Activity, Globe } from 'lucide-react';

const RealtimeNotificationProject = () => {
  return (
    <>
      <style>{`
        .project-card {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 48px rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .project-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        .project-description {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          color: #06b6d4;
          flex-shrink: 0;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(6, 182, 212, 0.8));
          }
        }

        .tech-stack {
          margin-bottom: 2rem;
        }

        .section-label {
          color: #06b6d4;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #06b6d4;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
          transform: translateY(-2px);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .feature-item {
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          transition: all 0.2s ease;
        }

        .feature-item:hover {
          background: rgba(6, 182, 212, 0.1);
          border-color: rgba(6, 182, 212, 0.4);
        }

        .feature-icon {
          color: #06b6d4;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .feature-text {
          color: #cbd5e1;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .architecture-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .project-header {
            flex-direction: column;
          }

          .project-title {
            font-size: 1.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="project-card">
        <div className="project-header">
          <div>
            <h3 className="project-title">Real-Time Notification System</h3>
            <p className="project-description">
              Engineered a scalable real-time notification system using ASP.NET Core SignalR and React.js, 
              supporting WebSocket connections for instant message delivery across web and mobile clients.
            </p>
          </div>
          <div className="project-icon">
            <Zap size={48} strokeWidth={2} />
          </div>
        </div>

        <div className="tech-stack">
          <div className="section-label">
            <Server size={16} />
            <span>Technology Stack</span>
          </div>
          <div className="tech-tags">
            <span className="tech-tag">ASP.NET Core</span>
            <span className="tech-tag">SignalR</span>
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">WebSocket</span>
            <span className="tech-tag">SQL Server</span>
            <span className="tech-tag">JWT Authentication</span>
            <span className="tech-tag">Redis</span>
          </div>
        </div>

        <div>
          <div className="section-label">
            <CheckCircle size={16} />
            <span>Key Features & Implementation</span>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <Activity className="feature-icon" size={20} />
              <span className="feature-text">
                Real-time bidirectional communication using SignalR hubs with automatic connection management
              </span>
            </div>
            <div className="feature-item">
              <Globe className="feature-icon" size={20} />
              <span className="feature-text">
                Connection state management with automatic reconnection logic and heartbeat monitoring
              </span>
            </div>
            <div className="feature-item">
              <Lock className="feature-icon" size={20} />
              <span className="feature-text">
                JWT-based authentication for secure WebSocket connections with role-based authorization
              </span>
            </div>
            <div className="feature-item">
              <Server className="feature-icon" size={20} />
              <span className="feature-text">
                Redis backplane for horizontal scaling across multiple servers and load balancing
              </span>
            </div>
            <div className="feature-item">
              <Activity className="feature-icon" size={20} />
              <span className="feature-text">
                React hooks integration (useEffect, useState) for real-time UI updates and state synchronization
              </span>
            </div>
            <div className="feature-item">
              <Database className="feature-icon" size={20} />
              <span className="feature-text">
                Notification persistence and delivery tracking with SQL Server for guaranteed message delivery
              </span>
            </div>
          </div>
        </div>

        <div className="architecture-badge">
          <CheckCircle size={16} />
          <span>Microservices Architecture • RESTful API • Event-Driven Design</span>
        </div>
      </div>
    </>
  );
};

export default RealtimeNotificationProject;