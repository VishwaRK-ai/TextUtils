import React, {useState} from 'react'

export default function About() {
    const [MyStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',

        padding:"20px",
        borderRadius:"5px"
    });

    const toggleStyle =()=>{
        if(MyStyle.color === 'white'){
            setMyStyle({
                color:"black",
                backgroundColor:'white',
                border:"1px solid white"
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Dark Mode");
        }
    }

    const [btntext,setBtnText] = useState('Enable Dark Mode');
  return (
    <div className="container my-3 padding-bottom=10px" style = {MyStyle}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style ={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse style ={MyStyle} collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style ={MyStyle} >
                    <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style ={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse style ={MyStyle} collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style ={MyStyle}>
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style ={MyStyle} >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style ={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        <div className = "container my-3">
            <button type="button" className="btn btn-dark" onClick={toggleStyle}>{btntext}</button>
        </div>
        
    </div>
  )
}
