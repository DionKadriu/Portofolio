import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style jsx global>{`
        :root {
          --ios-bg: #f2f2f7;
          --ios-surface: #ffffff;
          --ios-border: rgba(255, 255, 255, 0.2);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #f2f2f7 0%, #e8e8ed 100%);
          color: #1c1c1e;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          min-height: 100vh;
        }

        .bg-gray-225 {
          background: linear-gradient(135deg, #f2f2f7 0%, #e8e8ed 100%);
        }

        /* iOS-style shadows */
        .shadow-ios {
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .shadow-ios-small {
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.06);
        }

        .shadow-ios-large {
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .shadow-ios-hover {
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .shadow-ios-pressed {
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.1),
            0 1px 4px rgba(0, 0, 0, 0.06);
        }

        .shadow-ios-inner {
          box-shadow: 
            inset 0 2px 4px rgba(255, 255, 255, 0.9),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Custom scrollbar - iOS style */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        /* Selection styles */
        ::selection {
          background: rgba(0, 122, 255, 0.3);
          color: #1c1c1e;
        }

        /* Focus styles - iOS blue */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #007aff;
          outline-offset: 2px;
        }

        /* Glassmorphism effects */
        .glass {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Smooth animations */
        * {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        /* Gradient text support */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* iOS-style button effects */
        button, a {
          transform: translateZ(0);
          transition: all 0.2s ease;
        }

        /* Custom color classes for iOS gradients */
        .from-gray-800 { --tw-gradient-from: #1f2937; }
        .to-gray-600 { --tw-gradient-to: #4b5563; }
      `}</style>
      {children}
    </div>
  );
}