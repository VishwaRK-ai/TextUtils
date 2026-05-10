import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase!', 'success');
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleTrimClick = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert('Extra spaces removed!', 'success');
  };

  const handleCapitalize = () => {
    const newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    setText(newText);
    props.showAlert('Capitalized words!', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard!', 'success');
  };

  const handleClear = () => {
    setText('');
    props.showAlert('Text cleared!', 'danger');
  };

  const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;
  const charCount = text.length;
  const readTime = (0.008 * wordCount).toFixed(2);
  const isDarkOrColor = props.mode !== 'light';

  const cardStyle = {
    backgroundColor: isDarkOrColor ? (props.mode === 'dark' ? '#1e1e1e' : 'rgba(255,255,255,0.1)') : '#ffffff',
    color: isDarkOrColor ? 'white' : '#212529',
    backdropFilter: isDarkOrColor ? 'blur(10px)' : 'none',
    border: isDarkOrColor ? '1px solid rgba(255,255,255,0.2)' : '1px solid #e9ecef'
  };

  const textAreaStyle = {
    backgroundColor: isDarkOrColor ? (props.mode === 'dark' ? '#2c3034' : 'rgba(0,0,0,0.2)') : '#ffffff',
    color: isDarkOrColor ? 'white' : '#212529',
    border: isDarkOrColor ? '1px solid rgba(255,255,255,0.2)' : '1px solid #ced4da'
  };

  const getHighlightedText = () => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={index} style={{ backgroundColor: '#ffeb3b', color: 'black', borderRadius: '4px', padding: '0 2px' }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getMatchCount = () => {
    if (!searchQuery) return 0;
    const matches = text.match(new RegExp(searchQuery, 'gi'));
    return matches ? matches.length : 0;
  };

  return (
    <div className="row g-4">
      {/* Left Column: Input and Controls */}
      <div className="col-lg-8">
        <div className="card shadow-sm p-4" style={cardStyle}>
          <h2 className={`mb-4 fw-bold ${!isDarkOrColor ? 'text-gradient' : ''}`}>{props.heading}</h2>
          
          <textarea
            className="form-control mb-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={textAreaStyle}
            rows="8"
            placeholder="Type, paste, or explore your text here..."
          ></textarea>
          
          <div className="d-flex flex-wrap gap-2">
            <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-info text-white" onClick={handleLoClick}>Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-warning text-dark" onClick={handleCapitalize}>Capitalize</button>
            <button disabled={text.length === 0} className="btn btn-success" onClick={handleTrimClick}>Trim Spaces</button>
            <button disabled={text.length === 0} className="btn btn-secondary" onClick={handleCopy}>Copy</button>
            <button disabled={text.length === 0} className="btn btn-danger" onClick={handleClear}>Clear</button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="card shadow-sm p-4 mt-4" style={cardStyle}>
          <h3 className="fw-bold mb-3">Live Preview</h3>
          <div 
            className="p-3 rounded" 
            style={{
              minHeight: '120px', 
              backgroundColor: isDarkOrColor ? 'rgba(0,0,0,0.2)' : '#f8f9fa',
              whiteSpace: 'pre-wrap',
              border: isDarkOrColor ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e9ecef'
            }}
          >
            {text.length > 0 ? getHighlightedText() : <span className="text-muted">Nothing to preview yet...</span>}
          </div>
        </div>
      </div>

      {/* Right Column: Analytics & Search */}
      <div className="col-lg-4">
        {/* Metrics Card */}
        <div className="card shadow-sm p-4 mb-4" style={cardStyle}>
          <h4 className="fw-bold mb-4">Text Analytics</h4>
          
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-5">Words</span>
            <span className="badge rounded-pill bg-primary fs-6 px-3">{wordCount}</span>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-5">Characters</span>
            <span className="badge rounded-pill bg-info fs-6 px-3">{charCount}</span>
          </div>
          
          <hr style={{ opacity: 0.2 }} />
          
          <div className="mt-3">
            <div className="d-flex justify-content-between mb-1">
              <span className="small">Estimated Reading Time</span>
              <span className="small fw-bold">{readTime} min</span>
            </div>
            <div className="progress" style={{ height: '8px', backgroundColor: isDarkOrColor ? 'rgba(255,255,255,0.1)' : '#e9ecef' }}>
              <div 
                className="progress-bar bg-success" 
                role="progressbar" 
                style={{ width: `${Math.min((wordCount / 200) * 100, 100)}%` }} 
                aria-valuenow={wordCount} 
                aria-valuemin="0" 
                aria-valuemax="200"
              ></div>
            </div>
          </div>
        </div>

        {/* Search Card */}
        <div className="card shadow-sm p-4" style={cardStyle}>
          <h4 className="fw-bold mb-3">Quick Search</h4>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Find in text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={textAreaStyle}
          />
          {searchQuery ? (
            <div className={`alert ${getMatchCount() > 0 ? 'alert-success' : 'alert-warning'} py-2 mb-0 border-0`}>
              <strong>{getMatchCount()}</strong> match{getMatchCount() !== 1 ? 'es' : ''} found
            </div>
          ) : (
            <p className="small text-muted mb-0">Type above to highlight matches.</p>
          )}
        </div>
      </div>
    </div>
  );
}