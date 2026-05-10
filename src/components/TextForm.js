import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, settext] = useState("this is a sample text");
  const [textbox, settextbox] = useState("this is default of textbox");

  const handleUpClick = () => {
    let newtext = textbox.toUpperCase();
    settextbox(newtext);
  }
  const handleLoClick = () => {
    let newtext = textbox.toLowerCase();
    settextbox(newtext);
  }
  
  const handleAlterCase = () => {
    let newtext = "";
    for (let i = 0; i < textbox.length; i++) {
      if (i % 2 === 0) newtext += textbox[i].toLowerCase();
      else newtext += textbox[i].toUpperCase();
    }
    settextbox(newtext);
  }

  const handleFlipCase = () => {
    let newtext = "";
    for (let i = 0; i < textbox.length; i++) {
      if (textbox[i] === textbox[i].toUpperCase()) newtext += textbox[i].toLowerCase();
      else newtext += textbox[i].toUpperCase();
    }
    settextbox(newtext);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(textbox);
  }

  const handleClear = () => {
    settextbox("");
  }

  const handleOnChange = (event) => {
    settextbox(event.target.value);
  }
  
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={textbox} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleAlterCase}>Alternate Case</button>
      <button className="btn btn-primary mx-2" onClick={handleFlipCase}>Flip Case</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
      <button className="btn btn-info mx-2" onClick={handleClear}>clear</button>
    </div>
    <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>text summary</h1>
      <p>{textbox.split(" ").length} words, {textbox.length} characters</p>
      <h3>Preview</h3>
      <p>{textbox}</p>
    </div>
    </>
  )
}