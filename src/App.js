import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light'); 
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

	const toggleMode = (cls) => {
		setMode(cls);

		if (cls === 'danger') {
			document.body.style.backgroundColor = '#4e0505';
			showAlert("Red theme enabled", "success");
		} 
		else if (cls === 'success') {
			document.body.style.backgroundColor = '#054e05';
			showAlert("Green theme enabled", "success");
		} 
		else if (cls === 'primary') {
			document.body.style.backgroundColor = '#051b4e';
			showAlert("Blue theme enabled", "success");
		}
		else {
			document.body.style.backgroundColor = 'white';
			showAlert("Light theme enabled", "success");
		}
	};

  return (
    <>
			<Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText}/> 
      <Alert alert={alert}/>
      

			<div className="container my-3">
				<Routes>
					<Route exact path="/about" element={<About />} />
					
					<Route exact path="/" element={
						<TextForm heading="Enter the text to analyze below" mode={mode}/>
					} />
				</Routes>
			</div>
			</Router>
    </>
  );
}

export default App;