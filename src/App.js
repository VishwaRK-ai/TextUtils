import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [themeColor, setThemeColor] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light', 'bg-dark', 'bg-danger', 'bg-success', 'bg-primary', 'bg-warning');
    document.body.style.backgroundColor = '';
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    
    if (cls === 'light' || cls === 'dark') {
      if (cls === 'light') {
        setMode('light');
        setThemeColor('white');
        document.body.style.backgroundColor = '#f4f6f9';
        document.body.style.color = '#212529';
        showAlert('Light mode has been enabled', 'success');
      } else {
        setMode('dark');
        setThemeColor('#121212');
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#f8f9fa';
        showAlert('Dark mode has been enabled', 'success');
      }
    } else {
      // It's a color theme
      setMode('color');
      document.body.classList.add('bg-' + cls);
      
      let hexColor = '';
      if(cls === 'primary') hexColor = '#084298';
      else if (cls === 'danger') hexColor = '#842029';
      else if (cls === 'success') hexColor = '#0f5132';
      else if (cls === 'warning') hexColor = '#664d03';
      
      setThemeColor(hexColor);
      document.body.style.color = 'white';
      showAlert(cls.charAt(0).toUpperCase() + cls.slice(1) + ' theme enabled', 'success');
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route path="/about" element={<About mode={mode} themeColor={themeColor} />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Text Utilities" mode={mode} themeColor={themeColor} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;