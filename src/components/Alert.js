import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (word === 'danger') word = 'error';
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '60px', position: 'sticky', top: '0', zIndex: 99 }}>
      {props.alert && (
        <div 
          className={`alert alert-${props.alert.type} alert-dismissible fade show shadow-sm border-0 d-flex align-items-center justify-content-center`} 
          role="alert"
          style={{ borderRadius: '0 0 16px 16px', fontWeight: '500' }}
        >
          <span><strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}</span>
        </div>
      )}
    </div>
  );
}