import React from 'react';

export default function About(props) {
  const isDarkOrColor = props.mode !== 'light';
  
  const cardStyle = {
    backgroundColor: isDarkOrColor ? (props.mode === 'dark' ? '#1e1e1e' : 'rgba(255,255,255,0.1)') : '#ffffff',
    color: isDarkOrColor ? 'white' : '#212529',
    backdropFilter: isDarkOrColor ? 'blur(10px)' : 'none',
    border: isDarkOrColor ? '1px solid rgba(255,255,255,0.2)' : '1px solid #e9ecef',
    borderRadius: '16px'
  };

  const itemStyle = {
    backgroundColor: isDarkOrColor ? 'transparent' : 'white',
    color: isDarkOrColor ? 'white' : '#212529',
    borderBottom: isDarkOrColor ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e9ecef'
  };

  return (
    <div className="container py-4">
      <div className="card shadow-lg p-5 border-0" style={cardStyle}>
        <div className="text-center mb-5">
          <h1 className={`fw-bold display-5 ${!isDarkOrColor ? 'text-gradient' : ''}`}>About TextUtils</h1>
          <p className="lead mt-3" style={{ opacity: 0.9 }}>
            A premium text manipulation tool designed to streamline your workflow with powerful analytics and rapid formatting.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4" style={{ backgroundColor: isDarkOrColor ? 'rgba(0,0,0,0.2)' : '#f8f9fa' }}>
              <h4 className="fw-bold">Lightning Fast</h4>
              <p className="mb-0" style={{ opacity: 0.8 }}>Instantly analyze character counts, word density, and reading time directly in your browser without any server delays.</p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4" style={{ backgroundColor: isDarkOrColor ? 'rgba(0,0,0,0.2)' : '#f8f9fa' }}>
              <h4 className="fw-bold">Premium Themes</h4>
              <p className="mb-0" style={{ opacity: 0.8 }}>Tailor the visual experience to your exact preference with our custom color palettes, dark mode, and sleek glassmorphism UI.</p>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="p-4 h-100 rounded-4" style={{ backgroundColor: isDarkOrColor ? 'rgba(0,0,0,0.2)' : '#f8f9fa' }}>
              <h4 className="fw-bold">Secure & Private</h4>
              <p className="mb-0" style={{ opacity: 0.8 }}>Your data never leaves your device. Everything is processed locally ensuring 100% privacy for sensitive documents.</p>
            </div>
          </div>
        </div>

        <hr className="my-5" style={{ opacity: 0.1 }} />

        <div className="accordion" id="accordionExample">
          <div className="accordion-item rounded-4 mb-3 overflow-hidden border-0 shadow-sm" style={itemStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button ${isDarkOrColor ? 'text-white' : 'text-dark'}`}
                type="button"
                style={{ backgroundColor: isDarkOrColor ? 'rgba(255,255,255,0.05)' : '#ffffff' }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>How does the search highlight work?</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ backgroundColor: isDarkOrColor ? 'rgba(0,0,0,0.15)' : '#ffffff' }}>
                TextUtils uses an advanced dynamic regex engine behind the scenes to map your search queries against the live text, rendering highlighted matches instantly in the preview pane.
              </div>
            </div>
          </div>
          
          <div className="accordion-item rounded-4 mb-3 overflow-hidden border-0 shadow-sm" style={itemStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button collapsed ${isDarkOrColor ? 'text-white' : 'text-dark'}`}
                type="button"
                style={{ backgroundColor: isDarkOrColor ? 'rgba(255,255,255,0.05)' : '#ffffff' }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Is it free to use?</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{ backgroundColor: isDarkOrColor ? 'rgba(0,0,0,0.15)' : '#ffffff' }}>
                Yes! TextUtils is a completely free utility designed to enhance productivity. It requires no subscriptions, no accounts, and displays absolutely zero ads.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
